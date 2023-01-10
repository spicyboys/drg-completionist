import type { SaveFile } from 'drg-save-parser';
import { CosmeticMatrixItems } from 'data/cosmetics';
import { Miner } from 'data/miner';
import { CosmeticMatrixItemEntry } from 'db/AppDatabase';

export const getCosmeticMatrixItemFromSaveFile = ({
  SchematicSave: {
    SchematicSave: {
      ForgedSchematics: forgedSchematics,
      OwnedSchematics: unforgedSchematics,
    },
  },
}: SaveFile): CosmeticMatrixItemEntry[] => {
  const acquiredCosmeticMatrixItem: CosmeticMatrixItemEntry[] = [];
  CosmeticMatrixItems.forEach((item) => {
    for (const miner of Object.values(Miner)) {
      if (
        forgedSchematics !== undefined &&
        forgedSchematics.some((f) => item.matrixCoreIds[miner] === f)
      ) {
        acquiredCosmeticMatrixItem.push({
          miner: miner as Miner,
          name: item.name,
          isForged: true,
        });
      }
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
  return acquiredCosmeticMatrixItem;
};
