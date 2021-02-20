/* tslint:disable */
/* eslint-disable */
/**
* @param {File} file
* @returns {Promise<SaveFileData>}
*/
export function parse_save_file(file: File): Promise<SaveFileData>;
/**
*/
export class SaveFileData {
  free(): void;
/**
* @returns {ReadonlyMap<string, ReadonlySet<string>>}
*/
  readonly overclocks: ReadonlyMap<string, ReadonlySet<string>>;
}
