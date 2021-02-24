use serde::{Serialize, Serializer};
use std::fmt::{Debug, Display, Formatter};

#[derive(PartialEq, Hash, Eq)]
pub struct Guid(pub [u8; 16]);

impl Serialize for Guid {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
    S: Serializer,
  {
    serializer.serialize_str(hex::encode_upper(self.0).as_str())
  }
}

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
