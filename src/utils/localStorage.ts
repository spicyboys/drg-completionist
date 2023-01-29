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
  allKeys: string[]
) {
  if (typeof openKeys === 'string') openKeys = [openKeys];

  // we remove the localStorage entry when the the Collapse is opened
  openKeys.forEach((openCategory) => removeItem(openCategory));

  // we set a localStorage entry if a specific Collapse is closed
  allKeys
    .filter((c) => !openKeys.includes(c))
    .forEach((closed) => setItem(closed, 'closed'));
}

/**
 * Returns an array of component keys that should be open.
 * Use this in the "defaultActiveKey" CollapseProp.
 *
 * @param allKeys The keys of all items in this Collapse component.
 * @returns The keys of all items in this Collapse component that should be open.
 */
export function getOpenCategories(allKeys: string[]): string[] {
  return allKeys.filter((c) => !getItem(c));
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
