import { Framework, FrameworkIDs } from 'data/frameworks';
import type { FrameworkEntry } from 'db/AppDatabase';
import { flipObject } from 'utils/object';
import type { SaveFile } from 'utils/save-parser';
import { WeaponIDs } from 'utils/weapons';

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
