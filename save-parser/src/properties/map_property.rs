use crate::{
  properties::{FloatProperty, IntProperty, Property, StructProperty},
  utils::{error::ParseError, read_guid::ReadGuid, read_string::ReadString},
};
use byteorder::{LittleEndian, ReadBytesExt};
use serde::Serialize;
use std::collections::HashMap;
use std::io::{Cursor, Read};

#[derive(Debug, Serialize)]
pub struct MapProperty(pub HashMap<String, Box<Property>>);

impl MapProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    let key_type = reader.read_string()?;
    let value_type = reader.read_string()?;
    // Fortnite default dance dot emm pee four
    reader.read_exact(&mut [0u8; 5])?;

    let num_properties = reader.read_i32::<LittleEndian>()?;

    let mut properties = HashMap::new();
    for _ in 0..num_properties {
      let key = match key_type.as_str() {
        "StructProperty" => reader.read_guid()?.to_string(),
        _ => {
          return Err(ParseError::new(format!(
            "Unhandled map key type {}",
            key_type
          )))
        }
      };
      let value = match value_type.as_str() {
        "StructProperty" => StructProperty::parse_property_array(reader)?,
        "IntProperty" => Property::from(IntProperty(reader.read_i32::<LittleEndian>()?)),
        "FloatProperty" => Property::from(FloatProperty(reader.read_f32::<LittleEndian>()?)),
        _ => {
          return Err(ParseError::new(format!(
            "Unhandled map value type {}",
            value_type
          )))
        }
      };
      properties.insert(key, Box::new(value));
    }

    Ok(Property::from(MapProperty(properties)))
  }
}
