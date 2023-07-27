export default function nullthrows<T>(value: T): NonNullable<T> {
  if (value === null || value === undefined) {
    throw new TypeError("Unexpected null or undefined value");
  }
  return value;
}
