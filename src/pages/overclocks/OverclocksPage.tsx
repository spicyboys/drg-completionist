import { useCallback } from 'react';
import { Overclocks } from 'data/overclocks';
import type { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner } from 'utils/miner';
import { MinerWeapons } from 'utils/weapons';
import MinerOverclocks from './MinerOverclocks';

export default function OverclocksPage() {
  const getProgress = useCallback(async (db: AppDatabase, miner: Miner) => {
    const forgedOverclocks = await db.overclocks
      .where('weapon')
      .anyOf(MinerWeapons[miner])
      .filter((o) => o.isForged)
      .count();
    return forgedOverclocks / Object.values(Overclocks[miner]).flat().length;
  }, []);
  return (
    <MinerPageLayout getProgress={getProgress}>
      {(miner) => <MinerOverclocks miner={miner} />}
    </MinerPageLayout>
  );
}
