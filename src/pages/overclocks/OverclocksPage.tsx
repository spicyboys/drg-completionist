import { useCallback } from 'react';
import useStore from 'data/useStore';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner } from 'utils/miner';
import { MinerWeapon, MinerWeapons } from 'utils/weapons';
import MinerOverclocks from './MinerOverclocks';
import { overclocks } from './OverclockData';

export default function Overclocks() {
  const [acquiredOverclocks] = useStore('overclocks');
  const getProgress = useCallback(
    (miner: Miner) => {
      const weapons = (MinerWeapons[miner] as unknown) as MinerWeapon<Miner>;
      const minerOverclocks = Array.from(acquiredOverclocks.entries())
        .filter(([weapon]) => weapons.includes(weapon))
        .map(([, overclocks]) => overclocks);
      return (
        minerOverclocks.reduce((p, c) => p + c.size, 0) /
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
