#[derive(Debug)]
pub struct ParseError {
  message: String,
}

impl std::fmt::Display for ParseError {
  fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
    write!(f, "{}", self.message)
  }
}

impl ParseError {
  pub fn new(message: String) -> Self {
    Self { message }
  }
}

impl From<std::io::Error> for ParseError {
  fn from(error: std::io::Error) -> ParseError {
    ParseError::new(format!("File Error: {}", error))
  }
}
