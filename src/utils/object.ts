export function filterObject<K extends string, V>(
  obj: Record<K, V>,
  predicate: (key: K, value: V) => boolean
): Record<K, V> {
  return Object.keys(obj)
    .filter((key) => predicate(key as K, obj[key as K] as V))
    .reduce(
      (res, key) => Object.assign(res, { [key]: obj[key as K] }),
      {}
    ) as Record<K, V>;
}

export function flipObject<K extends string, V extends string>(
  obj: Record<K, V>
): Record<V, K> {
  const ret: { [s: string]: string } = {};
  Object.keys(obj).forEach((key) => {
    ret[(obj as { [s: string]: string })[key] as string] = key;
  });
  return ret as Record<V, K>;
}
