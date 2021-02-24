use byteorder::{LittleEndian, ReadBytesExt};
use std::io::{Cursor, Result};

pub fn peek(reader: &mut Cursor<Vec<u8>>) -> Result<u32> {
  let pos = reader.position();
  let ret = reader.read_u32::<LittleEndian>()?;
  reader.set_position(pos);
  Ok(ret)
}
