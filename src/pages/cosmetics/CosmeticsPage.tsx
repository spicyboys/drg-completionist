import { Row } from 'antd';
import { useCallback } from 'react';
import { CosmeticMatrixItems } from 'data/cosmetics';
import { Miner } from 'data/miner';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import CosmeticItemCard from './CosmeticItemCard';

export default function CosmeticMatrixCoreItemPage() {
  const getProgress = useCallback(async (db: AppDatabase, miner: Miner) => {
    const acquiredCosmetics = await db.cosmeticMatrixItems
      .where('miner')
      .anyOf(miner)
      .filter((item) => item.isForged)
      .count();
    return acquiredCosmetics / CosmeticMatrixItems.length;
  }, []);

  return (
    <MinerPageLayout category="Cosmetics" getProgress={getProgress}>
      {(miner) => (
        <Row gutter={[16, 16]}>
          {CosmeticMatrixItems.map((item) => (
            <CosmeticItemCard
              key={miner + item.name}
              miner={miner}
              item={item}
            />
          ))}
        </Row>
      )}
    </MinerPageLayout>
  );
}
