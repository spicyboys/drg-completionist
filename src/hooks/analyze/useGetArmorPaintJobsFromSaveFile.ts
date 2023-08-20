import { graphql, useStaticQuery } from 'gatsby';
import { type ArmorPaintJobEntry } from '../db/AppDatabase';
import { useCallback } from 'react';
import { type SaveFile } from './useParseSaveFile';

export default function useGetArmorPaintJobsFromSaveFile(): (
  saveFile: SaveFile,
) => ArmorPaintJobEntry[] {
  const {
    allMinersJson: { nodes: miners },
  } = useStaticQuery<Queries.GetArmorPaintJobsFromSaveFileQuery>(graphql`
    query GetArmorPaintJobsFromSaveFile {
      allMinersJson {
        nodes {
          name
          saveId
          armorPaintJobs {
            name
            saveId
          }
        }
      }
    }
  `);

  return useCallback(
    ({ CharacterSaves: characterSaves }: SaveFile) => {
      const acquiredArmorPaintJobs: ArmorPaintJobEntry[] = [];
      for (const miner of miners) {
        const UnlockedVanityItemIDs = characterSaves.find(
          ({ CharacterSave }) => CharacterSave.SavegameID === miner.saveId,
        )?.CharacterSave.Vanity.CharacterVanitySave.UnLockedVanityItemIDs;

        if (UnlockedVanityItemIDs === undefined) {
          continue;
        }

        for (const armorPaintJob of miner.armorPaintJobs) {
          if (UnlockedVanityItemIDs.includes(armorPaintJob.saveId)) {
            acquiredArmorPaintJobs.push({
              miner: miner.name,
              name: armorPaintJob.name,
            });
          }
        }
      }

      return acquiredArmorPaintJobs;
    },
    [miners],
  );
}
