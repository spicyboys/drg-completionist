import { Overclocks, Overclock } from 'data/overclocks';
import { Miner } from 'utils/miner';
import { SaveFile } from 'utils/save-parser';
import { MinerWeapon } from 'utils/weapons';

/**
 * The save file just contains a list of GUIDs of the acquired overclocks ("schematics").
 * We need to translate that into the weapon / overclock name pair we use to track progress.
 */
export const getOverclocksFromSaveFile = ({
  SchematicSave: {
    SchematicSave: { ForgedSchematics: forgedSchematics },
  },
}: SaveFile): Map<MinerWeapon<Miner>, Set<string>> => {
  const acquiredOverclocks: Map<MinerWeapon<Miner>, Set<string>> = new Map();
  Object.entries(
    Object.values(Overclocks).reduce(
      (p, c) => Object.assign(p, c),
      {}
    ) as Record<MinerWeapon<Miner>, Overclock[]>
  ).forEach(([weapon, overclocks]) => {
    for (const overclock of overclocks) {
      if (forgedSchematics.some((f) => overclock.id === f)) {
        let acquiredWeaponOverclocks = acquiredOverclocks.get(
          weapon as MinerWeapon<Miner>
        );
        if (acquiredWeaponOverclocks === undefined) {
          acquiredWeaponOverclocks = new Set();
        }
        acquiredWeaponOverclocks.add(overclock.name);
        acquiredOverclocks.set(
          weapon as MinerWeapon<Miner>,
          acquiredWeaponOverclocks
        );
      }
    }
  });
  return acquiredOverclocks;
};

export const getUnforgedOverclocksFromSaveFile = ({
  SchematicSave: {
    SchematicSave: { OwnedSchematics: unforgedSchematics },
  },
}: SaveFile): Map<MinerWeapon<Miner>, Set<string>> => {
  const unforgedOverclocks: Map<MinerWeapon<Miner>, Set<string>> = new Map();
  Object.entries(
    Object.values(Overclocks).reduce(
      (p, c) => Object.assign(p, c),
      {}
    ) as Record<MinerWeapon<Miner>, Overclock[]>
  ).forEach(([weapon, overclocks]) => {
    for (const overclock of overclocks) {
      if (unforgedSchematics.some((f) => overclock.id === f)) {
        let unforgedWeaponOverclocks = unforgedOverclocks.get(
          weapon as MinerWeapon<Miner>
        );
        if (unforgedWeaponOverclocks === undefined) {
          unforgedWeaponOverclocks = new Set();
        }
        unforgedWeaponOverclocks.add(overclock.name);
        unforgedOverclocks.set(
          weapon as MinerWeapon<Miner>,
          unforgedWeaponOverclocks
        );
      }
    }
  });
  return unforgedOverclocks;
};
