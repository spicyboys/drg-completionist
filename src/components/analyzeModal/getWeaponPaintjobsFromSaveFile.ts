import type { SaveFile } from 'drg-save-parser';
import { CommonWeaponPaintjobIDs, WeaponPaintjob } from 'data/weaponPaintjobs';
import { WeaponIDs } from 'data/weapons';
import type { WeaponPaintjobEntry } from 'db/AppDatabase';
import { flipObject } from 'utils/object';

export const getWeaponPaintjobsFromSaveFile = ({
  UnlockedItemSkins: unlockedItemSkins,
}: SaveFile): WeaponPaintjobEntry[] => {
  const acquiredPaintjobs: WeaponPaintjobEntry[] = [];
  const weaponIDs = flipObject(WeaponIDs);

  Object.entries(unlockedItemSkins).forEach(([weaponID, painjobIDs]) => {
    const weapon = weaponIDs[weaponID];
    if (weapon === undefined) {
      return;
    }

    const paintjobs = Object.entries(CommonWeaponPaintjobIDs)
      // eslint-disable-next-line
      .filter(([paintjob, id]) => painjobIDs.includes(id))
      .map(
        // eslint-disable-next-line
        ([paintjob, id]) => paintjob as WeaponPaintjob
      ) as WeaponPaintjob[];


    for (const paintjob of paintjobs) {
      acquiredPaintjobs.push({ weapon: weapon, name: paintjob });
    }
  });

  return acquiredPaintjobs;
};
