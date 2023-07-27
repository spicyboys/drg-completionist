import { useLiveQuery } from "dexie-react-hooks";
import { useDB } from "./db";
import { graphql } from "gatsby";

type MinerOverclockProgress = {
  totalOverclocks: number;
  forgedOverclocks: number;
  unforegedOverclocks: number;
};

export default function useMinerOverclockProgress(
  miner: Queries.MinerOverclockProgressMinerFragment
): MinerOverclockProgress | undefined {
  const db = useDB();
  const acquiredOverclocks = useLiveQuery(() =>
    db.overclocks
      .where("weapon")
      .anyOf(miner.weapons.map((weapon) => weapon.name!))
      .toArray()
  );

  if (acquiredOverclocks === undefined) {
    return undefined;
  }

  const totalOverclocks = miner.weapons.flatMap((weapon) => weapon.overclocks)
    ?.length;
  const forgedOverclocks = acquiredOverclocks.filter(
    (overclock) => overclock.isForged
  ).length;
  const unforegedOverclocks = acquiredOverclocks.length - forgedOverclocks;

  return {
    totalOverclocks,
    forgedOverclocks,
    unforegedOverclocks,
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
