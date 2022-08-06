import { useCallback } from 'react';
import { Miner } from 'data/miner';
import { Overclocks } from 'data/overclocks';
import { MinerWeapons } from 'data/weapons';
import type { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import MinerOverclocks from './MinerOverclocks';

export default function OverclocksPage() {
  const getProgress = useCallback(async (db: AppDatabase, miner: Miner) => {
    const forgedOverclocks = await db.overclocks
      .where('weapon')
      .anyOf(MinerWeapons[miner as Miner])
      .filter((o) => o.isForged)
      .count();
    return (
      forgedOverclocks / Object.values(Overclocks[miner as Miner]).flat().length
    );
  }, []);
  return (
    <MinerPageLayout category="Overclocks" getProgress={getProgress}>
      {(miner) => <MinerOverclocks miner={miner as Miner} />}
    </MinerPageLayout>
  );
}
