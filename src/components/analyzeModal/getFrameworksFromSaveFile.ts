import type { SaveFile } from 'drg-save-parser';
import { Framework, FrameworkIDs } from 'data/frameworks';
import { WeaponIDs } from 'data/weapons';
import type { FrameworkEntry } from 'db/AppDatabase';
import { flipObject } from 'utils/object';

export const getFrameworksFromSaveFile = ({
  UnlockedItemSkins: unlockedItemSkins,
}: SaveFile): FrameworkEntry[] => {
  const acquiredFrameworks: FrameworkEntry[] = [];
  const weaponIDs = flipObject(WeaponIDs);
  Object.entries(unlockedItemSkins).forEach(([weaponID, frameworkIDs]) => {
    const weapon = weaponIDs[weaponID];
    if (weapon === undefined) {
      return;
    }
    const frameworks = frameworkIDs
      .map(
        (frameworkID) =>
          flipObject(FrameworkIDs[weapon])[frameworkID] as Framework | undefined
      )
      .filter((f) => f !== undefined) as Framework[];
    for (const framework of frameworks) {
      acquiredFrameworks.push({ weapon: weapon, name: framework });
    }
  });
  return acquiredFrameworks;
};
