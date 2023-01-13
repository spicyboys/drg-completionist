import type { SaveFile } from 'drg-save-parser';
import { CosmeticMatrixItems } from 'data/cosmetics';
import { Miner, MinerIDs } from 'data/miner';
import { CosmeticMatrixItemEntry } from 'db/AppDatabase';
import { flipObject } from 'utils/object';

export const getCosmeticMatrixItemFromSaveFile = ({
  SchematicSave: {
    SchematicSave: { OwnedSchematics: unforgedSchematics },
  },
  CharacterSaves,
}: SaveFile): CosmeticMatrixItemEntry[] => {
  const acquiredCosmeticMatrixItem: CosmeticMatrixItemEntry[] = [];
  CosmeticMatrixItems.forEach((item) => {
    for (const miner of Object.values(Miner)) {
      // unforged cosmetic matrix cores
      if (
        unforgedSchematics !== undefined &&
        unforgedSchematics.some((f) => item.matrixCoreIds[miner] === f)
      ) {
        acquiredCosmeticMatrixItem.push({
          miner: miner as Miner,
          name: item.name,
          isForged: false,
        });
      }
    }
  });

  // We can't just check ForgedSchematics from the save file, since you could
  // get past season cosmetic items through the performance pass and not
  // from matrix cores like you would when you get them after the season ends.
  // This way they dont show up in ForgedSchematics and we can just check if a
  // player has the cosmetic item available to them. This will cover both cases
  // of getting them through the performance pass and cosmetic matrix cores.
  for (const {
    Vanity: {
      CharacterVanitySave: { UnLockedVanityItemIDs: unlockedVanityItemIds },
    },
    SavegameID: minerId,
  } of CharacterSaves) {
    const miner = flipObject(MinerIDs)[minerId];
    for (const itemId of unlockedVanityItemIds) {
      CosmeticMatrixItems.filter((item) => item.id === itemId).forEach(
        (item) => {
          // avoid duplicates
          if (
            !acquiredCosmeticMatrixItem.some(
              (entry) => entry.name === item.name && entry.miner === miner
            )
          ) {
            acquiredCosmeticMatrixItem.push({
              miner: miner,
              name: item.name,
              isForged: true,
            });
          }
        }
      );
    }
  }

  return acquiredCosmeticMatrixItem;
};
