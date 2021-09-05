import type { SaveFile } from 'drg-save-parser';
import { ArmorPaintjobs } from 'data/armor';
import type { ArmorPaintjobEntry } from 'db/AppDatabase';

export const getArmorPaintJobsFromSaveFile = ({
  CharacterSaves,
}: SaveFile): ArmorPaintjobEntry[] => {
  const acquiredArmorPaintjobs: ArmorPaintjobEntry[] = [];

  // We only have a list of IDs, so translate our map of armor paint jobs
  // to key off of the ID
  const idToEntry = Object.fromEntries(
    Object.entries(ArmorPaintjobs).flatMap(([miner, paintJobs]) => {
      return paintJobs.map((paintJob) => [
        paintJob.partID,
        {
          miner,
          name: paintJob.name,
        } as ArmorPaintjobEntry,
      ]);
    })
  );

  for (const {
    Vanity: {
      CharacterVanitySave: { UnLockedVanityItemIDs: ids },
    },
  } of CharacterSaves) {
    for (const id of ids) {
      const entry = idToEntry[id];

      // Make sure we this ID is actually an armor paint job, and then make
      // sure we haven't already seen it because there can be duplicates
      if (entry != null && !acquiredArmorPaintjobs.includes(entry)) {
        acquiredArmorPaintjobs.push(entry);
      }
    }
  }

  return acquiredArmorPaintjobs;
};
