import type { SaveFile } from 'drg-save-parser';
import { CommonArmorPaintjobs } from 'data/armor';
import type { CommonArmorPaintjobEntry } from 'db/AppDatabase';

export const getCommonArmorPaintJobsFromSaveFile = ({
  CharacterSaves,
}: SaveFile): CommonArmorPaintjobEntry[] => {
  const acquiredPaintjobs: CommonArmorPaintjobEntry[] = [];

  const idToEntry = Object.fromEntries(
    CommonArmorPaintjobs.map((paintjob) => [
      paintjob.partID,
      { name: paintjob.name },
    ])
  );

  for (const {
    Vanity: {
      CharacterVanitySave: { UnLockedVanityItemIDs: ids },
    },
  } of CharacterSaves) {
    for (const id of ids) {
      const entry = idToEntry[id];
      if (entry != null && !acquiredPaintjobs.includes(entry)) {
        acquiredPaintjobs.push(entry);
      }
    }
  }

  return acquiredPaintjobs;
};
