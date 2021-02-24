use crate::properties::Property;
use crate::utils::{error::ParseError, read_string::*};
use serde::Serialize;
use std::io::{Cursor, Read};

#[derive(Debug, Serialize)]
pub struct EnumProperty {
  name: String,
  value: String,
}

impl EnumProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    let name = reader.read_string()?;
    reader.read_exact(&mut [0u8; 1])?;
    let value = reader.read_string()?;
    Ok(Property::from(EnumProperty { name, value }))
  }
}
