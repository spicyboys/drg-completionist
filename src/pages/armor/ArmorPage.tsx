import { RightOutlined } from '@ant-design/icons';
import { Collapse, Row } from 'antd';
import { useCallback } from 'react';
import { PlayerRankIcon } from 'assets/other';
import Image from 'components/Image';
import ProgressCard from 'components/progressCard/ProgressCard';
import { ArmorPaintjobs, CommonArmorPaintjobs } from 'data/armor';
import { AppDatabase } from 'db/AppDatabase';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import MinerPageLayout from 'pages/MinerPageLayout';
import { Miner } from 'utils/miner';
import ArmorPaintjobCard from './ArmorPaintjobCard';
import CommonArmorPaintjobCard from './CommonArmorPaintjobCard';

export default function ArmorPage() {
  const getProgress = useCallback(async (db: AppDatabase, miner: Miner) => {
    const paintjobs = ArmorPaintjobs[miner];
    const acquiredPaintjobs = await db.armorPaintjobs
      .where('miner')
      .anyOf(miner)
      .count();
    return acquiredPaintjobs / paintjobs.length;
  }, []);

  const db = useDB();
  const acquiredCommonArmorPaintJobs = useSuspendedLiveQuery(
    () => db.commonArmorPaintjobs.count(),
    []
  );

  return (
    <MinerPageLayout category="Armor" getProgress={getProgress}>
      {(miner) => (
        <Row gutter={[16, 16]}>
          {ArmorPaintjobs[miner].map((paintjob) => (
            <ArmorPaintjobCard
              key={miner + paintjob.name}
              miner={miner}
              paintjob={paintjob}
            />
          ))}
        </Row>
      )}

      {/* Add the "common" armor paint jobs at the bottom */}
      <Collapse
        className="unselectable"
        expandIconPosition="right"
        defaultActiveKey="common"
        expandIcon={(p) => (
          <RightOutlined
            style={{ marginTop: 16 }}
            rotate={p.isActive ? 90 : undefined}
          />
        )}
      >
        <ProgressCard
          title="Common"
          key="common"
          avatar={
            <Image
              src={PlayerRankIcon}
              alt="Common Armor Components"
              style={{ height: 64, width: 64 }}
            />
          }
          progress={{
            percentage:
              (acquiredCommonArmorPaintJobs / CommonArmorPaintjobs.length) *
              100,
            initialStrokeColor: '#A8A8A8',
          }}
        >
          <Row gutter={[16, 16]}>
            {CommonArmorPaintjobs.map((paintjob) => (
              <CommonArmorPaintjobCard
                key={paintjob.name}
                paintjob={paintjob}
              />
            ))}
          </Row>
        </ProgressCard>
      </Collapse>
    </MinerPageLayout>
  );
}
