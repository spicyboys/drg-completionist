import { useCallback } from 'react';
import useStore from 'data/useStore';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner } from 'utils/miner';
import { MinerWeapons, MinerWeapon } from 'utils/weapons';
import { Frameworks } from './FrameworkData';
import MinerFrameworks from './MinerFrameworks';

export default function FrameworksPage() {
  const [acquiredFrameworks] = useStore('frameworks');
  const getProgress = useCallback(
    (miner: Miner) => {
      const weapons = (MinerWeapons[miner] as unknown) as MinerWeapon<Miner>;
      const minerFrameworks = Array.from(acquiredFrameworks.entries())
        .filter(([weapon]) => weapons.includes(weapon))
        .map(([, frameworks]) => frameworks);
      return (
        minerFrameworks.reduce((p, c) => p + c.size, 0) /
        (Frameworks.length * weapons.length)
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
