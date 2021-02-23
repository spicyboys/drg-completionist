use callback_future::CallbackFuture;
use fragile::Fragile;
use js_sys::Uint8Array;
// use serde::Deserialize;
use std::collections::{HashMap, HashSet};
use std::str;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::future_to_promise;
use web_sys::{File, FileReader, ProgressEvent};

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = "Promise<SaveFileData>")]
    pub type ParseSaveFileResult;
    #[wasm_bindgen(typescript_type = "ReadonlyMap<string, ReadonlySet<string>>")]
    pub type SaveFileOverclocks;
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[macro_export]
macro_rules! console_log {
  ($($t:tt)*) => (crate::log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub struct SaveFileData {
    overclocks: HashMap<String, HashSet<String>>,
}

#[wasm_bindgen]
impl SaveFileData {
    #[wasm_bindgen(getter)]
    pub fn overclocks(&self) -> SaveFileOverclocks {
        let m = js_sys::Map::new();
        for (weapon, weapon_overclocks) in &self.overclocks {
            let s = js_sys::Set::new(&JsValue::undefined());
            for overclock in weapon_overclocks {
                s.add(&JsValue::from(overclock));
            }
            m.set(&JsValue::from(weapon), &s);
        }
        JsValue::from(m).unchecked_into::<SaveFileOverclocks>()
    }
}

fn get_file_data(e: ProgressEvent) -> Option<Vec<u8>> {
    let target = e.target()?;
    let reader_result = JsCast::dyn_ref::<FileReader>(&target)?.result().unwrap();
    Some(Uint8Array::new(&reader_result).to_vec())
}

// #[derive(Deserialize)]
// struct OverclockData {
//     name: String,
//     weapon: String,
// }

mod properties;
mod utils;
use byteorder::{LittleEndian, ReadBytesExt};
use properties::Property;
use std::char;
use std::io::{Cursor, Read};
use utils::{error::ParseError, peek::peek, read_guid::*, read_string::*};
extern crate console_error_panic_hook;

#[derive(Debug)]
struct EngineVersion {
    major: u16,
    minor: u16,
    patch: u16,
    build: u32,
    build_id: String,
}

impl EngineVersion {
    fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Self, std::io::Error> {
        let major = reader.read_u16::<LittleEndian>()?;
        let minor = reader.read_u16::<LittleEndian>()?;
        let patch = reader.read_u16::<LittleEndian>()?;
        let build = reader.read_u32::<LittleEndian>()?;
        let build_id = reader.read_string()?;
        Ok(Self {
            major,
            minor,
            patch,
            build,
            build_id,
        })
    }
}

#[derive(Debug)]
struct SaveFileMetadata {
    save_version: i32,
    package_version: i32,
    engine_version: EngineVersion,
    custom_format_version: i32,
    custom_format_data: HashMap<Guid, i32>,
    save_game_type: String,
}

impl SaveFileMetadata {
    fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Self, std::io::Error> {
        let save_version = reader.read_i32::<LittleEndian>()?;
        let package_version = reader.read_i32::<LittleEndian>()?;
        let engine_version = EngineVersion::new(reader)?;
        let custom_format_version = reader.read_i32::<LittleEndian>()?;
        let custom_format_data_length = reader.read_i32::<LittleEndian>()?;
        let mut custom_format_data = HashMap::new();
        for _ in 0..custom_format_data_length {
            custom_format_data.insert(reader.read_guid()?, reader.read_i32::<LittleEndian>()?);
        }
        let save_game_type = reader.read_string()?;
        Ok(Self {
            save_version,
            package_version,
            engine_version,
            custom_format_version,
            custom_format_data,
            save_game_type,
        })
    }
}

fn validate_save_file_header(reader: &mut Cursor<Vec<u8>>) -> Result<(), ParseError> {
    let header = b"GVAS";
    let mut header_bytes = vec![0u8; header.len()];
    reader.read_exact(&mut header_bytes)?;
    assert_eq!(header_bytes, header, "Unexpected header");
    Ok(())
}

fn get_file_overclocks(file_bytes: &Vec<u8>) -> Result<HashMap<String, HashSet<String>>, String> {
    let mut cursor = Cursor::new(file_bytes.to_vec());
    match validate_save_file_header(&mut cursor) {
        Err(_) => return Err("Invalid save file".to_string()),
        _ => (),
    };
    let metadata = SaveFileMetadata::new(&mut cursor);
    console_log!("{:?}", metadata);

    let mut properties = HashMap::new();
    loop {
        if char::from_u32(peek(&mut cursor).unwrap()).is_none() {
            break;
        }
        let name = cursor.read_string().unwrap();
        let data_type = cursor.read_string().unwrap();
        let _length = cursor.read_i64::<LittleEndian>().unwrap();
        let property = Property::new(data_type.as_str(), &mut cursor);
        console_log!("{}: {:?}", name, property);
        properties.insert(name, property);
    }
    console_log!("{:?}", properties);
    Err("I'm too lazy to update the return type of this function".to_string())
}

#[wasm_bindgen]
pub fn parse_save_file(file: File) -> ParseSaveFileResult {
    console_error_panic_hook::set_once();
    let promise = future_to_promise(async {
        let file = Fragile::new(file);
        let file_data: Result<Vec<u8>, &str> = CallbackFuture::new(move |complete| {
            let reader = FileReader::new().unwrap();
            let onloadend_cb = Closure::once(Box::new(|e: ProgressEvent| {
                complete(match get_file_data(e) {
                    Some(d) => Ok(d),
                    None => Err("Failed to get data from file"),
                });
            }));
            reader.set_onloadend(JsCast::dyn_ref(onloadend_cb.as_ref()));
            reader
                .read_as_array_buffer(&file.get())
                .expect("blob not readable");
            onloadend_cb.forget();
        })
        .await;
        match file_data {
            Ok(d) => match get_file_overclocks(&d) {
                Ok(o) => Ok(JsValue::from(SaveFileData { overclocks: o })),
                Err(e) => Err(JsValue::from(e)),
            },
            Err(e) => Err(JsValue::from(e)),
        }
    });

    JsValue::from(promise).unchecked_into::<ParseSaveFileResult>()
}
