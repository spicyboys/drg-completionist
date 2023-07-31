import { useLiveQuery } from "dexie-react-hooks";
import { useDB } from "../db";
import { graphql } from "gatsby";
import { type ProgressFooterProps } from "../../components/ProgressFooter";

export default function useMinerWeaponFrameworkProgress(
  miner: Queries.MinerWeaponFrameworkProgressMinerFragment
): ProgressFooterProps | undefined {
  const db = useDB();
  const acquiredFrameworks = useLiveQuery(() =>
    db.frameworks
      .where("weapon")
      .anyOf(miner.weapons.map((weapon) => weapon.name))
      .toArray()
  );

  if (acquiredFrameworks === undefined) {
    return undefined;
  }

  return {
    totalItems: miner.weapons.flatMap((weapon) => weapon.frameworks).length,
    completedItems: acquiredFrameworks.length,
  };
}

export const query = graphql`
  fragment MinerWeaponFrameworkProgressMiner on MinersJson {
    weapons {
      name
      frameworks {
        framework {
          name
        }
      }
    }
  }
`;
