import { useCallback } from 'react';
import useStore from 'data/useStore';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner } from 'utils/miner';
import MinerOverclocks from './MinerOverclocks';
import { overclocks } from './OverclockData';

export default function Overclocks() {
  const [acquiredOverclocks] = useStore('overclocks');
  const getProgress = useCallback(
    (miner: Miner) => {
      return (
        acquiredOverclocks[miner].length /
        Object.values(overclocks[miner]).flat().length
      );
    },
    [acquiredOverclocks]
  );
  return (
    <MinerPageLayout getProgress={getProgress}>
      {(miner) => <MinerOverclocks miner={miner} />}
    </MinerPageLayout>
  );
}
