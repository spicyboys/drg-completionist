use crate::properties::Property;
use crate::utils::error::ParseError;
use crate::utils::read_guid::*;
use std::io::Cursor;

#[derive(Debug)]
pub struct GuidProperty(Guid);

impl GuidProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    Ok(Property::from(GuidProperty(reader.read_guid()?)))
  }
}
