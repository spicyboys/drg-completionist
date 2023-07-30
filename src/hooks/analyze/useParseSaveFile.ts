import { type RcFile } from "antd/lib/upload";
import { useCallback } from "react";
import useGetOverclocksFromSaveFile from "./useGetOverclocksFromSaveFile";
import init, { parse_save_file } from "drg-save-parser";
import { useDB } from "../db";
import { z } from "zod";
import useGetWeaponPaintJobsFromSaveFile from "./useGetWeaponPaintJobsFromSaveFile";

// Wasm-bindgen doesn't support Vec<String>, so we have to throw the whole
// object back untyped. Since working with untyped data is error-prone, we
// assert the type back in JS. The schema only includes the fields we're
// currently using but the whole save file is available to us.
const SaveFileSchema = z.object({
  properties: z.object({
    SchematicSave: z.object({
      SchematicSave: z.object({
        ForgedSchematics: z.array(z.string()).optional(),
        OwnedSchematics: z.array(z.string()).optional(),
      }),
    }),
    UnlockedItemSkins: z.record(
      z.string(),
      z.object({
        Skins: z.array(z.string()),
      })
    ),
    UnlockedPickaxeParts: z.array(z.string()).optional(),
    CharacterSaves: z.array(
      z.object({
        CharacterSave: z.object({
          Vanity: z.object({
            CharacterVanitySave: z.object({
              UnLockedVanityItemIDs: z.array(z.string()),
            }),
          }),
          VictoryPose: z.object({
            VictoryPoseSave: z.object({
              UnlockedVictoryPoses: z.array(z.string()),
            }),
          }),
          SavegameID: z.string(),
        }),
      })
    ),
  }),
});
export type SaveFile = z.infer<typeof SaveFileSchema>["properties"];

export default function useParseSaveFile() {
  const db = useDB();
  const getOverclocksFromSaveFile = useGetOverclocksFromSaveFile();
  const getWeaponPaintJobsFromSaveFile = useGetWeaponPaintJobsFromSaveFile();
  return useCallback(
    async (f: RcFile): Promise<void> => {
      try {
        // Parse the save file using the WASM library
        await init();
        const saveFile = SaveFileSchema.parse(
          await parse_save_file(f)
        ).properties;

        // Extract the relevant information from the parsed save file
        const overclocks = getOverclocksFromSaveFile(saveFile);
        const weaponPaintJobs = getWeaponPaintJobsFromSaveFile(saveFile);

        // Update the store with the new save file data
        await db.transaction("rw", db.tables, async () => {
          await db.clearAll();
          await db.overclocks.bulkAdd(overclocks);
          await db.weaponPaintjobs.bulkAdd(weaponPaintJobs);
        });
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    [db, getOverclocksFromSaveFile, getWeaponPaintJobsFromSaveFile]
  );
}
