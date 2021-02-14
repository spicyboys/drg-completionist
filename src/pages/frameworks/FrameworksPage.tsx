import useStore from "data/useStore";
import MinerPageLayout from "pages/MinerPageLayout";
import { useCallback } from "react";
import Miner from "types/miner";
import { Frameworks } from "./FrameworkData";
import MinerFrameworks from "./MinerFrameworks";

export default function FrameworksPage() {
  const [acquiredFrameworks] = useStore("frameworks");
  const getProgress = useCallback(
    (miner: Miner) => {
      return (
        Object.values(acquiredFrameworks[miner]).flat().length /
        Frameworks.length
      );
    },
    [acquiredFrameworks]
  );
  return (
    <MinerPageLayout getProgress={getProgress}>
      {(miner) => <MinerFrameworks miner={miner} />}
    </MinerPageLayout>
  );
}
