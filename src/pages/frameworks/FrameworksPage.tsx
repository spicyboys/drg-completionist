import useStore from 'data/useStore';
import MinerPageLayout from 'pages/MinerPageLayout';
import { useCallback } from 'react';
import { Miner } from 'utils/miner';
import { MinerWeapons } from 'utils/weapons';
import { Frameworks } from './FrameworkData';
import MinerFrameworks from './MinerFrameworks';

export default function FrameworksPage() {
  const [acquiredFrameworks] = useStore('frameworks');
  const getProgress = useCallback(
    (miner: Miner) => {
      return (
        Object.values(acquiredFrameworks[miner]).reduce(
          (p, c) => p + c.length,
          0
        ) /
        (Frameworks.length * MinerWeapons[miner].length)
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
