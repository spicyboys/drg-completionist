use crate::properties::Property;
use crate::utils::error::ParseError;
use byteorder::{LittleEndian, ReadBytesExt};
use serde::Serialize;
use std::io::Cursor;

#[derive(Debug, Serialize)]
pub struct BoolProperty(bool);

impl BoolProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    let i = reader.read_i16::<LittleEndian>()?;
    Ok(Property::from(BoolProperty(if i == 0 {
      false
    } else {
      true
    })))
  }
}
