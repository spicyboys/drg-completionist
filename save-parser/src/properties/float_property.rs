use crate::properties::Property;
use crate::utils::error::ParseError;
use byteorder::{LittleEndian, ReadBytesExt};
use std::io::{Cursor, Read};

#[derive(Debug)]
pub struct FloatProperty(f32);

impl FloatProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    reader.read_exact(&mut [0u8; 1])?;
    Ok(Property::Float(FloatProperty(
      reader.read_f32::<LittleEndian>()?,
    )))
  }
}
