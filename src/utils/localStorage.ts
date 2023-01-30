import assert from "assert";

/**
 * Updates the localStorage to remeber closed and open Collapse components.
 * Use this in the "onChange" CollapseProp callback function, which gives you
 * an array of keys of all currently open items in the Collapse (pretty convenient).
 *
 * @param open The keys of the currently open items this Collapse components.
 * @param allKeys The keys of all items in this Collapse component.
 */
export function updateOpenCategories(
  openKeys: string | string[],
  allKeys: string[],
  localStoragePrefix?: string
) {
  if (typeof openKeys === 'string') openKeys = openKeys.split(" ");

  // add localStorage prefix for indexing
  if (localStoragePrefix) {
    allKeys = allKeys.map((key) => localStoragePrefix + key);
    openKeys = openKeys.map((key) => localStoragePrefix + key);
  }

  // we remove the localStorage entry when a Collapse item is opened
  openKeys.forEach((key) => removeItem(key));

  // we set a localStorage entry if a Collapse item is closed
  allKeys
    .filter((key) => !openKeys.includes(key))
    .forEach((closed) => setItem(closed, 'closed'));
}

/**
 * Returns an array of component keys that should be open.
 * Use this in the "defaultActiveKey" CollapseProp.
 *
 * @param allKeys The keys of all items in this Collapse component.
 * @returns The keys of all items in this Collapse component that should be open.
 */
export function getOpenCategories(
  allKeys: string[],
  localStoragePrefix?: string
): string[] {
  const originalAllKeys = allKeys;

  // add localStoragePrefix for indexing
  if (localStoragePrefix)
    allKeys = allKeys.map((key) => localStoragePrefix + key);

  let openKeys = allKeys.filter((key) => !getItem(key));

  // remove localStoragePrefix so we return the correct keys
  if (localStoragePrefix)
    openKeys = openKeys.map((key) => key.replace(localStoragePrefix, ""));

  // we will only return keys that were passed in
  assert(openKeys.filter((key) => originalAllKeys.includes(key)).length == openKeys.length);

  return openKeys;
}

function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

function getItem(key: string): string | null {
  return localStorage.getItem(key);
}

function removeItem(key: string) {
  localStorage.removeItem(key);
}
