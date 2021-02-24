use crate::properties::{GuidProperty, Property};
use crate::utils::{error::ParseError, read_string::*};
use byteorder::{LittleEndian, ReadBytesExt};
use serde::Serialize;
use std::io::{Cursor, Read};

#[derive(Debug, Serialize)]
pub struct SetProperty(pub Vec<Box<Property>>);

impl SetProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    let property_type = reader.read_string()?;
    // There's just... five dead bytes here. I wish I knew why.
    reader.read_exact(&mut [0u8; 5])?;
    let num_properties = reader.read_i32::<LittleEndian>()?;

    let mut items = Vec::new();
    for _ in 0..num_properties {
      match property_type.as_str() {
        "StructProperty" => items.push(Box::new(GuidProperty::new(reader)?)),
        _ => {
          return Err(ParseError::new(format!(
            "Unhandled Set property type {}",
            property_type
          )));
        }
      }
    }

    Ok(Property::from(SetProperty(items)))
  }
}
