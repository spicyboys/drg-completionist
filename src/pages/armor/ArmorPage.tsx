import { Row } from 'antd';
import { useCallback } from 'react';
import { ArmorPaintjobs } from 'data/armor';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner, MinerWithAllClass } from 'utils/miner';
import ArmorPaintjobCard from './ArmorPaintjobCard';

export default function ArmorPage() {
  const getProgress = useCallback(
    async (db: AppDatabase, miner: Miner | MinerWithAllClass) => {
      const paintjobs = ArmorPaintjobs[miner];
      const acquiredPaintjobs = await db.armorPaintjobs
        .where('miner')
        .anyOf(miner)
        .count();
      return acquiredPaintjobs / paintjobs.length;
    },
    []
  );

  return (
    <MinerPageLayout allClass category="Armor" getProgress={getProgress}>
      {(miner) => (
        <Row gutter={[16, 16]}>
          {ArmorPaintjobs[miner].map((paintjob) => (
            <ArmorPaintjobCard
              key={miner + paintjob.name}
              miner={miner as MinerWithAllClass}
              paintjob={paintjob}
            />
          ))}
        </Row>
      )}
    </MinerPageLayout>
  );
}
