use std::fmt::{Debug, Display, Formatter};
use std::io::{Read, Result};

#[derive(PartialEq, Hash, Eq)]
pub struct Guid([u8; 16]);

impl Display for Guid {
  fn fmt(&self, f: &mut Formatter) -> std::fmt::Result {
    write!(f, "{}", hex::encode_upper(self.0))
  }
}

impl Debug for Guid {
  fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
    write!(f, "{}", hex::encode_upper(self.0))
  }
}

pub trait ReadGuid: Read {
  fn read_guid(&mut self) -> Result<Guid> {
    let mut bytes = [0u8; 16];
    self.read_exact(&mut bytes)?;
    Ok(Guid(bytes))
  }
}

impl<R: Read + ?Sized> ReadGuid for R {}
