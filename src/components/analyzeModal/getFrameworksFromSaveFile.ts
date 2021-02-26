import { Framework, FrameworkIDs } from 'data/frameworks';
import { Miner } from 'utils/miner';
import { flipObject } from 'utils/object';
import { SaveFile } from 'utils/save-parser';
import { MinerWeapon, WeaponIDs } from 'utils/weapons';

export const getFrameworksFromSaveFile = ({
  UnlockedItemSkins: unlockedItemSkins,
}: SaveFile): Map<MinerWeapon<Miner>, Set<Framework>> => {
  const acquiredFrameworks: Map<MinerWeapon<Miner>, Set<Framework>> = new Map();
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
    console.log(frameworks);
    acquiredFrameworks.set(weapon, new Set(frameworks));
  });
  return acquiredFrameworks;
};
