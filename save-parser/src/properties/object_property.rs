use crate::properties::Property;
use crate::utils::error::ParseError;
use byteorder::{LittleEndian, ReadBytesExt};
use serde::Serialize;
use std::io::{Cursor, Read};

#[derive(Debug, Serialize)]
pub struct ObjectProperty(i32);

impl ObjectProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    let addr = reader.read_i32::<LittleEndian>()?;
    // WEST VIRGINAAAAAAAAAAA
    // MOUNTAIN MAMAAAAAAA
    // TAKE ME HOMEEEEEEEEEEEEE
    // COUNTRY ROADSSSSSSSS
    reader.read_exact(&mut [0u8; 6])?;
    Ok(Property::from(ObjectProperty(addr)))
  }
}
