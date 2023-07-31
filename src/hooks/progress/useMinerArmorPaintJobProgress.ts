import { useLiveQuery } from "dexie-react-hooks";
import { useDB } from "../db";
import { graphql } from "gatsby";
import { type ProgressFooterProps } from "../../components/ProgressFooter";

export default function useMinerArmorPaintJobProgress(
  miner: Queries.MinerArmorPaintJobProgressMinerFragment
): ProgressFooterProps | undefined {
  const db = useDB();
  const acquiredArmorPaintJobs = useLiveQuery(
    () => db.armorPaintjobs.where("miner").equals(miner.name).toArray(),
    [miner.name]
  );

  if (acquiredArmorPaintJobs === undefined) {
    return undefined;
  }

  return {
    totalItems: miner.armorPaintJobs.length,
    completedItems: acquiredArmorPaintJobs.length,
  };
}

export const query = graphql`
  fragment MinerArmorPaintJobProgressMiner on MinersJson {
    name
    armorPaintJobs {
      name
    }
  }
`;
