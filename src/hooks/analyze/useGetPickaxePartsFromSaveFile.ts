import { graphql, useStaticQuery } from 'gatsby';
import { type PickaxePartEntry } from '../db/AppDatabase';
import { type SaveFile } from './useParseSaveFile';
import { useCallback } from 'react';

export default function useGetPickaxePartsFromSaveFile(): (
  saveFile: SaveFile,
) => PickaxePartEntry[] {
  const {
    allPickaxePartSetsJson: { nodes: pickaxePartSets },
    allPickaxePartsJson: { nodes: pickaxeParts },
  } = useStaticQuery<Queries.GetPickaxePartsFromSaveFileQuery>(graphql`
    query GetPickaxePartsFromSaveFile {
      allPickaxePartSetsJson {
        nodes {
          name
          saveIds {
            blades
            head
            handle
            shaft
            pommel
            paint_job
          }
        }
      }

      allPickaxePartsJson {
        nodes {
          name
          saveId
        }
      }
    }
  `);

  return useCallback(
    ({ UnlockedPickaxeParts: unlockedPickaxeParts }: SaveFile) => {
      if (unlockedPickaxeParts === undefined) {
        return [];
      }

      const acquiredPickaxeParts: PickaxePartEntry[] = [];

      //#region Pickaxe Part Sets
      for (const pickaxePartSet of pickaxePartSets) {
        if (unlockedPickaxeParts.includes(pickaxePartSet.saveIds.blades)) {
          acquiredPickaxeParts.push({
            name: pickaxePartSet.name,
            component: 'BLADES',
          });
        }

        if (unlockedPickaxeParts.includes(pickaxePartSet.saveIds.head)) {
          acquiredPickaxeParts.push({
            name: pickaxePartSet.name,
            component: 'HEAD',
          });
        }

        if (unlockedPickaxeParts.includes(pickaxePartSet.saveIds.handle)) {
          acquiredPickaxeParts.push({
            name: pickaxePartSet.name,
            component: 'HANDLE',
          });
        }

        if (unlockedPickaxeParts.includes(pickaxePartSet.saveIds.shaft)) {
          acquiredPickaxeParts.push({
            name: pickaxePartSet.name,
            component: 'SHAFT',
          });
        }

        if (unlockedPickaxeParts.includes(pickaxePartSet.saveIds.pommel)) {
          acquiredPickaxeParts.push({
            name: pickaxePartSet.name,
            component: 'POMMEL',
          });
        }

        if (
          pickaxePartSet.saveIds.paint_job !== null &&
          unlockedPickaxeParts.includes(pickaxePartSet.saveIds.paint_job)
        ) {
          acquiredPickaxeParts.push({
            name: pickaxePartSet.name,
            component: 'PAINT_JOB',
          });
        }
      }
      //#endregion

      //#region Unique Pickaxe Parts
      for (const pickaxePart of pickaxeParts) {
        if (unlockedPickaxeParts.includes(pickaxePart.saveId)) {
          acquiredPickaxeParts.push({
            name: pickaxePart.name,
            component: 'BLADES',
          });
        }
      }
      //#endregion

      return acquiredPickaxeParts;
    },
    [pickaxePartSets, pickaxeParts],
  );
}
