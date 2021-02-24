use crate::utils::guid::Guid;
use std::io::Read;

pub trait ReadGuid: Read {
  fn read_guid(&mut self) -> std::io::Result<Guid> {
    let mut bytes = [0u8; 16];
    self.read_exact(&mut bytes)?;
    Ok(Guid(bytes))
  }
}

impl<R: Read + ?Sized> ReadGuid for R {}
