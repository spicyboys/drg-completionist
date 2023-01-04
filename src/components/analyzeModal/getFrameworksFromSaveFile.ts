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

    const all_weapon_frameworks = FrameworkIDs[weapon];

    const frameworks: Framework[] = [];
    for (const frameworkID of frameworkIDs) {
      for (const [framework, id] of Object.entries(all_weapon_frameworks)) {
        if (id === frameworkID) {
          frameworks.push(framework as Framework)
        }
      }
    }
    
    for (const framework of frameworks) {
      acquiredFrameworks.push({ weapon: weapon, name: framework });
    }
  });
  return acquiredFrameworks;
};
