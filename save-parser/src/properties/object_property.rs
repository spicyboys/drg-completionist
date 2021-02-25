use crate::properties::{Property, StringProperty};
use crate::utils::{error::ParseError, read_string::ReadString};
use serde::Serialize;
use std::io::{Cursor, Read};

#[derive(Debug, Serialize)]
pub struct ObjectProperty(i32);

impl ObjectProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    reader.read_exact(&mut [0u8; 1])?;
    Ok(Property::from(StringProperty(reader.read_string()?)))
  }
}
