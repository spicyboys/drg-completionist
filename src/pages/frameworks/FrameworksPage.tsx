import { useCallback } from 'react';
import { Frameworks } from 'data/frameworks';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner, MinerWithAllClass } from 'utils/miner';
import { MinerWeapons } from 'utils/weapons';
import MinerFrameworks from './MinerFrameworks';

export default function FrameworksPage() {
  const getProgress = useCallback(
    async (db: AppDatabase, miner: Miner | MinerWithAllClass) => {
      const weapons = MinerWeapons[miner as Miner];
      const acquiredFrameworks = await db.frameworks
        .where('weapon')
        .anyOf(weapons)
        .count();
      return acquiredFrameworks / (Frameworks.length * weapons.length);
    },
    []
  );
  return (
    <MinerPageLayout category="WeaponFrameworks" getProgress={getProgress}>
      {(miner) => <MinerFrameworks miner={miner as Miner} />}
    </MinerPageLayout>
  );
}
