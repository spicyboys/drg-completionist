import type { SaveFile } from 'drg-save-parser';
import { Miner } from 'data/miner';
import { Overclocks } from 'data/overclocks';
import { MinerWeapon } from 'data/weapons';
import type { OverclockEntry } from 'db/AppDatabase';
import type { Overclock } from 'types/overclock';

/**
 * The save file just contains a list of GUIDs of the acquired overclocks ("schematics").
 * We need to translate that into the weapon / overclock name pair we use to track progress.
 */
export const getOverclocksFromSaveFile = ({
  SchematicSave: {
    SchematicSave: {
      ForgedSchematics: forgedSchematics,
      OwnedSchematics: unforgedSchematics,
    },
  },
}: SaveFile): OverclockEntry[] => {
  const acquiredOverclocks: OverclockEntry[] = [];
  Object.entries(
    Object.values(Overclocks).reduce(
      (p, c) => Object.assign(p, c),
      {}
    ) as Record<MinerWeapon<Miner>, Overclock[]>
  ).forEach(([weapon, overclocks]) => {
    for (const overclock of overclocks) {
      if (
        forgedSchematics !== undefined &&
        forgedSchematics.some((f) => overclock.id === f)
      ) {
        acquiredOverclocks.push({
          weapon: weapon as MinerWeapon<Miner>,
          name: overclock.name,
          isForged: true,
        });
      }
      if (
        unforgedSchematics !== undefined &&
        unforgedSchematics.some((f) => overclock.id === f)
      ) {
        acquiredOverclocks.push({
          weapon: weapon as MinerWeapon<Miner>,
          name: overclock.name,
          isForged: false,
        });
      }
    }
  });
  return acquiredOverclocks;
};
