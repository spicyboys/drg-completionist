use crate::properties::Property;
use crate::utils::{error::ParseError, guid::Guid, read_guid::ReadGuid};
use serde::Serialize;
use std::io::Cursor;

#[derive(Debug, Serialize)]
pub struct GuidProperty(Guid);

impl GuidProperty {
  pub fn new(reader: &mut Cursor<Vec<u8>>) -> Result<Property, ParseError> {
    Ok(Property::from(GuidProperty(reader.read_guid()?)))
  }
}
