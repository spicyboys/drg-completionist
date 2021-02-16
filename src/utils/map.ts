export function updateKey<TKey, TVal>(
  map: ReadonlyMap<TKey, TVal>,
  key: TKey,
  val: TVal
): ReadonlyMap<TKey, TVal> {
  const m = new Map(map.entries());
  return m.set(key, val);
}
