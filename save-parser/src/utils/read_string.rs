use byteorder::{LittleEndian, ReadBytesExt};
use std::io::{Error, ErrorKind, Read, Result};
use std::str::from_utf8;

pub trait ReadString: Read {
  fn read_string(&mut self) -> Result<String> {
    let length = self.read_i32::<LittleEndian>()?;
    if length > 65536 || length < 0 {
      return Err(Error::new(
        ErrorKind::Other,
        format!(
          "String length of ({}) invalid, likely a read error.",
          length
        ),
      ));
    }
    if length == 0 {
      return Ok("".to_owned());
    }
    let mut fstr;
    let mut bytes = vec![0u8; length as usize];
    self.read_exact(&mut bytes)?;
    fstr = match from_utf8(&bytes) {
      Ok(s) => s.to_owned(),
      Err(e) => {
        return Err(Error::new(
          ErrorKind::Other,
          format!("Failed to parse string ({}).", e),
        ))
      }
    };
    fstr.pop();
    Ok(fstr)
  }
}

impl<R: Read + ?Sized> ReadString for R {}
