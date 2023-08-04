import { useLiveQuery } from "dexie-react-hooks";
import { useDB } from "../db";
import { graphql } from "gatsby";
import { type ProgressFooterProps } from "../../components/ProgressFooter";

export default function useMinerWeaponPaintJobProgress(
  miner: Queries.MinerWeaponPaintJobProgressMinerFragment
): ProgressFooterProps | undefined {
  const db = useDB();
  const acquiredWeaponPaintJobs = useLiveQuery(
    () => db.weaponPaintjobs.where("miner").equals(miner.name).toArray(),
    [miner.name]
  );

  if (acquiredWeaponPaintJobs === undefined) {
    return undefined;
  }

  const totalItems =
    miner.commonWeaponPaintJobs.length + miner.uniqueWeaponPaintJobs.length;
  const completedItems = acquiredWeaponPaintJobs.filter(
    (weaponPaintJob) => weaponPaintJob.isForged
  ).length;
  const unforgedItems = acquiredWeaponPaintJobs.length - completedItems;

  return {
    totalItems,
    completedItems,
    unforgedItems,
  };
}

export const query = graphql`
  fragment MinerWeaponPaintJobProgressMiner on MinersJson {
    name
    commonWeaponPaintJobs {
      weaponPaintJob {
        name
      }
    }
    uniqueWeaponPaintJobs {
      name
    }
  }
`;
