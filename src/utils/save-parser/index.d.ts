/* tslint:disable */
/* eslint-disable */
/**
* @param {File} file
* @returns {Promise<SaveFile>}
*/
export function parse_save_file(file: File): Promise<SaveFile>;

/**
 * Technically, we're returning the whole save file, but that feels like a 
 * nightmare to write out here so I'm not doing to do it. If you need another
 * type in the future, console.log the return from the parser, figure out the
 * type, and add it here later.
 *
 * Or complain to future Robert, this is past Robert's fault anyways.
 */
export type SaveFile = {
  "SchematicSave": {
    "SchematicSave": {
      "ForgedSchematics": string[],
      "OwnedSchematics": string[],
    },
  },
}; 


