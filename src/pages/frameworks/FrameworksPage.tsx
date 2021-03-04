import { useCallback } from 'react';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner } from 'utils/miner';
import { MinerWeapons } from 'utils/weapons';
import MinerFrameworks from './MinerFrameworks';

export default function FrameworksPage() {
  const getProgress = useCallback((db: AppDatabase, miner: Miner) => {
    return db.frameworks.where('weapon').anyOf(MinerWeapons[miner]).count();
  }, []);
  return (
    <MinerPageLayout getProgress={getProgress}>
      {(miner) => <MinerFrameworks miner={miner} />}
    </MinerPageLayout>
  );
}
