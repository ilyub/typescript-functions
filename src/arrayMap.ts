/**
 * Gets values from array map.
 *
 * @param key - Key.
 * @param map - Array map.
 * @returns Values.
 */
export function get<K extends PropertyKey, T>(
  key: K,
  map: ReadonlyMap<K, readonly T[]>
): readonly T[] {
  return map.get(key) ?? [];
}

/**
 * Gets values from array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param map - Array map.
 * @returns Values.
 */
export function get2<K extends PropertyKey, L extends PropertyKey, T>(
  key1: K,
  key2: L,
  map: ReadonlyMap<K, ReadonlyMap<L, readonly T[]>>
): readonly T[] {
  return map.get(key1)?.get(key2) ?? [];
}

/**
 * Pushes value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export function push<K extends PropertyKey, T>(
  key: K,
  value: T,
  mutableMap: Map<K, T[]>
): void {
  const arr = mutableMap.get(key);

  if (arr) arr.push(value);
  else mutableMap.set(key, [value]);
}

/**
 * Pushes value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export function push2<K extends PropertyKey, L extends PropertyKey, T>(
  key1: K,
  key2: L,
  value: T,
  mutableMap: Map<K, Map<L, T[]>>
): void {
  const map = mutableMap.get(key1);

  if (map) push(key2, value, map);
  else mutableMap.set(key1, new Map([[key2, [value]]]));
}

/**
 * Unshift value to array map.
 *
 * @param key - Key.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export function unshift<K extends PropertyKey, T>(
  key: K,
  value: T,
  mutableMap: Map<K, T[]>
): void {
  const arr = mutableMap.get(key);

  if (arr) arr.unshift(value);
  else mutableMap.set(key, [value]);
}

/**
 * Pushes value to array map.
 *
 * @param key1 - Key 1.
 * @param key2 - Key 2.
 * @param value - Value.
 * @param mutableMap - Array map.
 */
export function unshift2<K extends PropertyKey, L extends PropertyKey, T>(
  key1: K,
  key2: L,
  value: T,
  mutableMap: Map<K, Map<L, T[]>>
): void {
  const map = mutableMap.get(key1);

  if (map) unshift(key2, value, map);
  else mutableMap.set(key1, new Map([[key2, [value]]]));
}
