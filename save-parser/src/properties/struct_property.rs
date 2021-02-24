use crate::properties::{ArrayProperty, GuidProperty, Property};
use crate::utils::{error::ParseError, peek::peek, read_string::*};
use byteorder::{LittleEndian, ReadBytesExt};
use serde::{ser::SerializeMap, Serialize, Serializer};
use std::char;
use std::io::{Cursor, Read};

#[derive(Debug)]
pub struct StructProperty {
  pub name: String,
  pub property: Box<Property>,
}

impl Serialize for StructProperty {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
    S: Serializer,
  {
    let mut map = serializer.serialize_map(Some(1))?;
    map.serialize_entry(&self.name, &self.property)?;
    map.end()
  }
}

impl StructProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    let struct_type = reader.read_string()?;
    // 16-byte empty GUID + 1-byte termination
    reader.read_exact(&mut [0u8; 17])?;
    StructProperty::parse_property(reader, struct_type.as_str())
  }

  pub fn parse_property(
    reader: &mut Cursor<Vec<u8>>,
    struct_type: &str,
  ) -> Result<Property, ParseError> {
    match struct_type {
      "Guid" => Ok(GuidProperty::new(reader)?),
      _ => Ok(Property::from(StructProperty {
        name: struct_type.to_string(),
        property: Box::new(StructProperty::parse_property_array(reader)?),
      })),
    }
  }

  pub fn parse_property_array(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    let mut properties = Vec::new();
    loop {
      if char::from_u32(peek(reader)?).is_none() {
        break;
      }
      let inner_property_name = reader.read_string()?;
      if inner_property_name == "None" {
        break;
      }
      let inner_property_type = reader.read_string()?;
      let _inner_length = reader.read_i64::<LittleEndian>()?;
      let property = Property::new(inner_property_type.as_str(), reader)?;
      properties.push(Property::from(StructProperty {
        name: inner_property_name,
        property: Box::new(property),
      }));
    }
    if properties.len() == 1 {
      Ok(properties.remove(0))
    } else {
      let mut boxed_properties = Vec::new();
      for property in properties {
        boxed_properties.push(Box::new(property));
      }
      Ok(Property::from(ArrayProperty(boxed_properties)))
    }
  }
}
