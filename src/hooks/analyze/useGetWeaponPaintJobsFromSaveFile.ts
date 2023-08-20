import { graphql, useStaticQuery } from 'gatsby';
import { type WeaponPaintJobEntry } from '../db/AppDatabase';
import { useCallback } from 'react';
import { type SaveFile } from './useParseSaveFile';

/**
 * Get the weapon paint jobs from a save file.
 *
 * Weapon paint jobs are unlocked in two ways:
 *   1. By acquiring & forging a schematic for the paint job (stored as a
 *      matrix core ID, which is unique for each miner)
 *   2. By unlocking the paint job directly (stored as the weapon paint job's
 *      ID, which is unique for each paint job, not for each miner)
 *
 * For both cases, paint jobs are unlocked at a miner level, not for an
 * individual weapon. Not all paint jobs all acquirable by a schematic, so not
 * all paint jobs have a corresponding matrix core ID, but all paint jobs have
 * a corresponding unique weapon paint job ID.
 */
export default function useGetWeaponPaintJobsFromSaveFile(): (
  saveFile: SaveFile,
) => WeaponPaintJobEntry[] {
  const {
    allMinersJson: { nodes: miners },
  } = useStaticQuery<Queries.GetWeaponPaintJobsFromSaveFileQuery>(graphql`
    query GetWeaponPaintJobsFromSaveFile {
      allMinersJson {
        nodes {
          name
          commonWeaponPaintJobs {
            weaponPaintJob {
              name
              saveId
            }
            saveId
          }
          uniqueWeaponPaintJobs {
            name
            saveId
          }
          weapons {
            saveId
          }
        }
      }
    }
  `);

  return useCallback(
    ({
      SchematicSave: {
        SchematicSave: {
          OwnedSchematics: unforgedSchematics,
          ForgedSchematics: forgedSchematics,
        },
      },
      UnlockedItemSkins: unlockedItemSkins,
    }: SaveFile) => {
      const acquiredWeaponPaintJobs: WeaponPaintJobEntry[] = [];
      for (const miner of miners) {
        for (const weaponPaintJob of miner.commonWeaponPaintJobs) {
          if (
            weaponPaintJob.saveId &&
            unforgedSchematics?.includes(weaponPaintJob.saveId)
          ) {
            acquiredWeaponPaintJobs.push({
              miner: miner.name,
              name: weaponPaintJob.weaponPaintJob.name,
              isForged: false,
            });
          } else if (
            weaponPaintJob.saveId &&
            forgedSchematics?.includes(weaponPaintJob.saveId)
          ) {
            acquiredWeaponPaintJobs.push({
              miner: miner.name,
              name: weaponPaintJob.weaponPaintJob.name,
              isForged: true,
            });
          } else if (
            // Weapon paint jobs are unlocked at a miner level, not for an
            // individual weapon, but when a paint job is unlocked, it's
            // unlocked for all weapons for that miner, so we just check the
            // first weapon.
            unlockedItemSkins[miner.weapons[0].saveId]?.Skins.includes(
              weaponPaintJob.weaponPaintJob.saveId,
            )
          ) {
            acquiredWeaponPaintJobs.push({
              miner: miner.name,
              name: weaponPaintJob.weaponPaintJob.name,
              isForged: true,
            });
          }
        }

        for (const weaponPaintJob of miner.uniqueWeaponPaintJobs) {
          if (
            unlockedItemSkins[miner.weapons[0].saveId]?.Skins.includes(
              weaponPaintJob.saveId,
            )
          ) {
            acquiredWeaponPaintJobs.push({
              miner: miner.name,
              name: weaponPaintJob.name,
              isForged: true,
            });
          }
        }
      }

      return acquiredWeaponPaintJobs;
    },
    [miners],
  );
}
