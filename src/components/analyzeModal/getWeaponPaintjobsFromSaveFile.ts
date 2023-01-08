import type { SaveFile } from 'drg-save-parser';
import { Miner } from 'data/miner';
import {
  CommonWeaponPaintjob,
  CommonWeaponPaintjobs,
  MatrixWeaponPaintjob,
  MatrixWeaponPaintjobs,
  UniqueWeaponPaintjob,
  UniqueWeaponPaintjobs,
} from 'data/weaponPaintjobs';
import { MinerWeapons, WeaponIDs } from 'data/weapons';
import type {
  CommonWeaponPaintjobEntry,
  MatrixWeaponPaintjobEntry,
  UniqueWeaponPaintjobEntry,
} from 'db/AppDatabase';
import { flipObject } from 'utils/object';

export const getUniqueWeaponPaintjobsFromSaveFile = ({
  UnlockedItemSkins: unlockedItemSkins,
}: SaveFile): UniqueWeaponPaintjobEntry[] => {
  const acquiredPaintjobs: UniqueWeaponPaintjobEntry[] = [];
  const weaponIDs = flipObject(WeaponIDs);

  Object.entries(unlockedItemSkins).forEach(([weaponID, painjobIDs]) => {
    const weapon = weaponIDs[weaponID];
    if (weapon === undefined) {
      return;
    }

    const uniquePaintjobs = Object.values(UniqueWeaponPaintjobs)
      .filter((paintjob) => painjobIDs.includes(paintjob.id))
      .map(
        (paintjob) => paintjob as UniqueWeaponPaintjob
      ) as UniqueWeaponPaintjob[];

    for (const paintjob of uniquePaintjobs) {
      acquiredPaintjobs.push({ weapon: weapon, name: paintjob.name });
    }
  });

  return acquiredPaintjobs;
};

export const getMatrixWeaponPaintjobsFromSaveFile = ({
  SchematicSave: {
    SchematicSave: {
      OwnedSchematics: unforgedSchematics,
    },
  },
  UnlockedItemSkins: unlockedItemSkins,
}: SaveFile): MatrixWeaponPaintjobEntry[] => {
  const acquiredPaintjobs: MatrixWeaponPaintjobEntry[] = [];

  // Check for unforged matrix core
  Object.values(MatrixWeaponPaintjobs).forEach((paintjob) => {
    for (const miner of Object.values(Miner)) {
      if (
        unforgedSchematics &&
        unforgedSchematics.some((f) => paintjob.matrixCoreIds[miner] === f)
      ) {
        acquiredPaintjobs.push({
          miner: miner,
          name: paintjob.name,
          isForged: false,
        });
      }
    }
  });

  // We can't just check ForgedSchematics from the save file, since you could
  // get past season weapon paintjobs through the performance pass and not
  // from matrix cores like you would when you get them after the season ends.
  // This way they dont show up in ForgedSchematics and we can just check if a
  // player has the weapon paintjob available to them. This will cover both cases
  // of getting them through the performance pass and cosmetic matrix cores.
  const weaponIDs = flipObject(WeaponIDs);
  Object.entries(unlockedItemSkins).forEach(([weaponID, painjobIDs]) => {
    const weapon = weaponIDs[weaponID];
    if (weapon === undefined) {
      return;
    }

    const weaponToMiner = Object.fromEntries(
      Object.entries(MinerWeapons).flatMap(([miner, weapons]) => {
        return weapons.map((w) => [w, miner]);
      })
    );
    const miner = weaponToMiner[weapon] as Miner;

    const matrixPaintjobs = Object.values(MatrixWeaponPaintjobs)
      .filter((paintjob) => painjobIDs.includes(paintjob.id))
      .map(
        (paintjob) => paintjob as MatrixWeaponPaintjob
      ) as MatrixWeaponPaintjob[];

    for (const paintjob of matrixPaintjobs) {
      // We need to check for duplicates since they can occur if a matrix core weapon paintjob is already
      // added for another weapon of this miner.
      if (!acquiredPaintjobs.some((p) => p.miner === miner && p.name === paintjob.name)) {
        acquiredPaintjobs.push({ miner: miner, name: paintjob.name, isForged: true });
      }
    }
  });

  return acquiredPaintjobs;
};

export const getCommonWeaponPaintjobsFromSaveFile = ({
  UnlockedItemSkins: unlockedItemSkins,
}: SaveFile): CommonWeaponPaintjobEntry[] => {
  const acquiredPaintjobs: CommonWeaponPaintjobEntry[] = [];
  const weaponIDs = flipObject(WeaponIDs);

  Object.entries(unlockedItemSkins).forEach(([weaponID, painjobIDs]) => {
    const weapon = weaponIDs[weaponID];
    if (weapon === undefined) {
      return;
    }

    const weaponToMiner = Object.fromEntries(
      Object.entries(MinerWeapons).flatMap(([miner, weapons]) => {
        return weapons.map((w) => [w, miner]);
      })
    );
    const miner = weaponToMiner[weapon] as Miner;

    const matrixPaintjobs = Object.values(CommonWeaponPaintjobs)
      .filter((paintjob) => painjobIDs.includes(paintjob.id))
      .map(
        (paintjob) => paintjob as CommonWeaponPaintjob
      ) as CommonWeaponPaintjob[];

    for (const paintjob of matrixPaintjobs) {
      // We need to check for duplicates since they can occur if a common weapon paintjob is already
      // added for another weapon of this miner.
      if (
        !acquiredPaintjobs.some(
          (p) => p.miner === miner && p.name === paintjob.name
        )
      ) {
        acquiredPaintjobs.push({ miner: miner, name: paintjob.name });
      }
    }
  });

  return acquiredPaintjobs;
};
