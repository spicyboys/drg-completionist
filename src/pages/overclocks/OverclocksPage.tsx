import { useCallback } from 'react';
import { Overclocks } from 'data/overclocks';
import type { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner, MinerWithAllClass } from 'utils/miner';
import { MinerWeapons } from 'utils/weapons';
import MinerOverclocks from './MinerOverclocks';

export default function OverclocksPage() {
  const getProgress = useCallback(
    async (db: AppDatabase, miner: Miner | MinerWithAllClass) => {
      const forgedOverclocks = await db.overclocks
        .where('weapon')
        .anyOf(MinerWeapons[miner as Miner])
        .filter((o) => o.isForged)
        .count();
      return (
        forgedOverclocks /
        Object.values(Overclocks[miner as Miner]).flat().length
      );
    },
    []
  );
  return (
    <MinerPageLayout category="Overclocks" getProgress={getProgress}>
      {(miner) => <MinerOverclocks miner={miner as Miner} />}
    </MinerPageLayout>
  );
}
