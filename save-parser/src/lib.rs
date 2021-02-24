mod properties;
mod utils;

use byteorder::{LittleEndian, ReadBytesExt};
use callback_future::CallbackFuture;
use fragile::Fragile;
use js_sys::Uint8Array;
use properties::Property;
use std::{
  char,
  collections::HashMap,
  io::{Cursor, Read},
  str,
};
use utils::{
  error::ParseError, guid::Guid, peek::peek, read_guid::ReadGuid, read_string::ReadString,
};
use wasm_bindgen::{prelude::*, JsCast};
use wasm_bindgen_futures::future_to_promise;
use web_sys::{File, FileReader, ProgressEvent};
extern crate console_error_panic_hook;

#[wasm_bindgen(typescript_custom_section)]
const TS_APPEND_CONTENT: &'static str = r#"
/**
 * Technically, we're returning the whole save file, but that feels like a 
 * nightmare to write out here so I'm not doing to do it. If you need another
 * type in the future, console.log the return from the parser, figure out the
 * type, and add it here later.
 *
 * Or complain to future Robert, this is past Robert's fault anyways.
 */
export type SaveFile = {
  "SchematicSave": {
    "SchematicSave": {
      "ForgedSchematics": string[],
      "OwnedSchematics": string[],
    },
  },
}; 
"#;

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(typescript_type = "Promise<SaveFile>")]
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

fn get_file_data(e: ProgressEvent) -> Option<Vec<u8>> {
  let target = e.target()?;
  let reader_result = JsCast::dyn_ref::<FileReader>(&target)?.result().unwrap();
  Some(Uint8Array::new(&reader_result).to_vec())
}

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

fn get_save_file_data(file_bytes: &Vec<u8>) -> Result<HashMap<String, Property>, ParseError> {
  let mut cursor = Cursor::new(file_bytes.to_vec());
  match validate_save_file_header(&mut cursor) {
    Err(_) => return Err(ParseError::new("Invalid save file".to_string())),
    _ => (),
  };
  let _metadata = SaveFileMetadata::new(&mut cursor);

  let mut properties = HashMap::new();
  loop {
    if char::from_u32(peek(&mut cursor)?).is_none() {
      break;
    }
    let name = cursor.read_string()?;
    let data_type = cursor.read_string()?;
    let _length = cursor.read_i64::<LittleEndian>()?;
    let property = Property::new(data_type.as_str(), &mut cursor)?;
    properties.insert(name, property);
  }

  Ok(properties)
}

#[wasm_bindgen]
pub fn parse_save_file(file: File) -> ParseSaveFileResult {
  console_error_panic_hook::set_once();
  let promise = future_to_promise(async {
    let file = Fragile::new(file);
    let file_bytes: Result<Vec<u8>, &str> = CallbackFuture::new(move |complete| {
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
    match file_bytes {
      Ok(d) => match get_save_file_data(&d) {
        Ok(s) => Ok(JsValue::from_serde(&s).unwrap()),
        Err(e) => Err(JsValue::from(e.to_string())),
      },
      Err(e) => Err(JsValue::from(e)),
    }
  });

  JsValue::from(promise).unchecked_into::<ParseSaveFileResult>()
}
