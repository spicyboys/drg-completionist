export function removeFromSet<T>(
  set: ReadonlySet<T>,
  value: T
): ReadonlySet<T> {
  const s = new Set(set);
  if (s.has(value)) {
    s.delete(value);
  }
  return s;
}

export function addToSet<T>(set: ReadonlySet<T>, value: T): ReadonlySet<T> {
  const s = new Set(set);
  return s.add(value);
}
