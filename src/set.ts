/**
 * Adds value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value added.
 */
export function add<T>(set: ReadonlySet<T>, value: T): ReadonlySet<T> {
  const result = new Set(set);

  result.add(value);

  return result;
}

/**
 * Removes value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value removed.
 */
export function _delete<T>(set: ReadonlySet<T>, value: T): ReadonlySet<T> {
  const result = new Set(set);

  result.delete(value);

  return result;
}

export { _delete as delete };

/**
 * Checks that set has value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns _True_ if set has value, _false_ otherwise.
 */
export function has(set: ReadonlySet<unknown>, value: unknown): boolean {
  return set.has(value);
}
