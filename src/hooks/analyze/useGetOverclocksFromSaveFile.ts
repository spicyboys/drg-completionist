import { graphql, useStaticQuery } from "gatsby";
import { type OverclockEntry } from "../db/AppDatabase";
import { useCallback } from "react";
import { type SaveFile } from "./useParseSaveFile";

export default function useGetOverclocksFromSaveFile(): (
  saveFile: SaveFile,
) => OverclockEntry[] {
  const {
    allMinersJson: { nodes: miners },
  } = useStaticQuery<Queries.GetOverclocksFromSaveFileQuery>(graphql`
    query GetOverclocksFromSaveFile {
      allMinersJson {
        nodes {
          name
          weapons {
            name
            overclocks {
              saveId
              name
            }
          }
        }
      }
    }
  `);

  return useCallback(
    ({
      SchematicSave: {
        SchematicSave: {
          ForgedSchematics: forgedSchematics,
          OwnedSchematics: unforgedSchematics,
        },
      },
    }: SaveFile) => {
      if (forgedSchematics === undefined && unforgedSchematics === undefined) {
        return [];
      }

      const acquiredOverclocks: OverclockEntry[] = [];
      for (const miner of miners) {
        for (const weapon of miner.weapons) {
          for (const overclock of weapon.overclocks) {
            if (forgedSchematics?.includes(overclock.saveId)) {
              acquiredOverclocks.push({
                weapon: weapon.name,
                name: overclock.name,
                isForged: true,
              });
            } else if (unforgedSchematics?.includes(overclock.saveId)) {
              acquiredOverclocks.push({
                weapon: weapon.name,
                name: overclock.name,
                isForged: false,
              });
            }
          }
        }
      }

      return acquiredOverclocks;
    },
    [miners],
  );
}
