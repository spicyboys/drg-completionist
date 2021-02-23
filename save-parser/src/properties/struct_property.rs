use crate::properties::{ArrayProperty, GuidProperty, Property};
use crate::utils::{error::ParseError, peek::peek, read_string::*};
use byteorder::{LittleEndian, ReadBytesExt};
use std::char;
use std::io::{Cursor, Read};

#[derive(Debug)]
pub struct StructProperty {
  pub name: String,
  pub property: Box<Property>,
}

impl StructProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    let struct_type = reader.read_string()?;
    // 16-byte empty GUID + 1-byte termination
    reader.read_exact(&mut [0u8; 17])?;
    let struct_property = StructProperty::parse_property(reader, struct_type.as_str())?;
    Ok(Property::Struct(struct_property))
  }

  pub fn parse_property(
    reader: &mut Cursor<Vec<u8>>,
    struct_type: &str,
  ) -> Result<StructProperty, ParseError> {
    match struct_type {
      "Guid" => Ok(StructProperty {
        name: "guid".to_string(),
        property: Box::new(GuidProperty::new(reader)?),
      }),
      _ => StructProperty::parse_property_array(reader, struct_type),
    }
  }

  fn parse_property_array(
    reader: &mut Cursor<Vec<u8>>,
    struct_type: &str,
  ) -> Result<StructProperty, ParseError> {
    let mut properties = Vec::new();
    loop {
      if char::from_u32(peek(reader)?).is_none() {
        break;
      }
      let inner_property_name = reader.read_string()?;
      if inner_property_name == "None" {
        continue;
      }
      let inner_property_type = reader.read_string()?;
      let _inner_length = reader.read_i64::<LittleEndian>()?;
      let property = Property::new(inner_property_type.as_str(), reader)?;
      properties.push(Box::new(Property::Struct(StructProperty {
        name: inner_property_name,
        property: Box::new(property),
      })));
    }
    Ok(StructProperty {
      name: struct_type.to_string(),
      property: Box::new(Property::Array(ArrayProperty(properties))),
    })
  }
}
