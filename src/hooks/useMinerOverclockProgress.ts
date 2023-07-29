import { useLiveQuery } from "dexie-react-hooks";
import { useDB } from "./db";
import { graphql } from "gatsby";
import { type ProgressFooterProps } from "../components/ProgressFooter";

export default function useMinerOverclockProgress(
  miner: Queries.MinerOverclockProgressMinerFragment
): ProgressFooterProps | undefined {
  const db = useDB();
  const acquiredOverclocks = useLiveQuery(() =>
    db.overclocks
      .where("weapon")
      .anyOf(miner.weapons.map((weapon) => weapon.name))
      .toArray()
  );

  if (acquiredOverclocks === undefined) {
    return undefined;
  }

  const totalItems = miner.weapons.flatMap((weapon) => weapon.overclocks)
    ?.length;
  const completedItems = acquiredOverclocks.filter(
    (overclock) => overclock.isForged
  ).length;
  const unforgedItems = acquiredOverclocks.length - completedItems;

  return {
    totalItems,
    completedItems,
    unforgedItems,
  };
}

export const query = graphql`
  fragment MinerOverclockProgressMiner on MinersJson {
    weapons {
      name
      overclocks {
        name
      }
    }
  }
`;
