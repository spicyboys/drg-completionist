import { graphql, useStaticQuery } from 'gatsby';
import { type FrameworkEntry } from '../db/AppDatabase';
import { useCallback } from 'react';
import { type SaveFile } from './useParseSaveFile';

export default function useGetWeaponFrameworksFromSaveFile(): (
  saveFile: SaveFile,
) => FrameworkEntry[] {
  const {
    allMinersJson: { nodes: miners },
  } = useStaticQuery<Queries.GetWeaponFrameworksFromSaveFileQuery>(graphql`
    query GetWeaponFrameworksFromSaveFile {
      allMinersJson {
        nodes {
          name
          weapons {
            name
            saveId
            frameworks {
              saveId
              framework {
                name
              }
            }
          }
        }
      }
    }
  `);

  return useCallback(
    ({ UnlockedItemSkins: unlockedItemSkins }: SaveFile) => {
      const acquiredFrameworks: FrameworkEntry[] = [];
      for (const miner of miners) {
        for (const weapon of miner.weapons) {
          for (const framework of weapon.frameworks) {
            if (
              unlockedItemSkins[weapon.saveId]?.Skins.includes(framework.saveId)
            ) {
              acquiredFrameworks.push({
                weapon: weapon.name,
                name: framework.framework.name,
              });
            }
          }
        }
      }

      return acquiredFrameworks;
    },
    [miners],
  );
}
