/**
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 * pickBy(object, isNumber);
 * => { 'a': 1, 'c': 3 }
 */
export function pickBy<T extends Record<string, any>>(
  object: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean,
): Partial<T> {
  return Object.fromEntries(
    Object.entries(object).filter(([k, v]) => predicate(v, k)),
  ) as Partial<T>
}
