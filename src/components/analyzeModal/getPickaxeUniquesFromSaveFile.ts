import type { SaveFile } from 'drg-save-parser';
import { PickaxeUniquePartNames, UniqueParts } from 'data/pickaxes';
import type { PickaxeUniquePartEntry } from 'db/AppDatabase';

/**
 * The save file just contains a list of GUIDs of the acquired pickaxe parts.
 * This one is simple and simply checks the GUIDs in the save file's
 * UnlockedPickaxeParts[] against all the GUIDs in data/pickaxes.ts
 */
export const getPickaxeUniquesFromSaveFile = ({
  UnlockedPickaxeParts: unlockedPickaxeParts,
}: SaveFile): PickaxeUniquePartEntry[] => {
  const acquiredUniques: PickaxeUniquePartEntry[] = [];
  Object.values(unlockedPickaxeParts).forEach((unlockedPartId) => {
    if (unlockedPartId === undefined) return;

    for (const unique of UniqueParts) {
      if (unique.id === unlockedPartId) {
        acquiredUniques.push({
          name: unique.name as typeof PickaxeUniquePartNames[number],
        });
      }
    }
  });
  return acquiredUniques;
};
