import { RightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { useCallback } from 'react';
import {
  BoscoFrameworkNames,
  BoscoFrameworks as BoscoFrameworksList,
  BoscoPaintjobNames,
  BoscoPaintjobs as BoscoPaintjobsList,
} from 'data/bosco';
import { AppDatabase } from 'db/AppDatabase';
import BoscoFrameworks from './BoscoFrameworks';
import BoscoPaintjobs from './BoscoPaintjobs';

export type ProgressQuery = (db: AppDatabase) => Promise<number>;

export default function BoscoPage() {
  const getPaintjobProgress = useCallback(async (db: AppDatabase) => {
    const acquiredPaintjobs = await db.boscoPaintjobs
      .where('name')
      .anyOf(BoscoPaintjobNames)
      .count();
    return acquiredPaintjobs / BoscoPaintjobsList.length;
  }, []);

  const getFrameworkProgress = useCallback(async (db: AppDatabase) => {
    const acquiredFrameworks = await db.boscoFrameworks
      .where('name')
      .anyOf(BoscoFrameworkNames)
      .count();
    return acquiredFrameworks / BoscoFrameworksList.length;
  }, []);

  return (
    <Collapse
      className="unselectable"
      expandIconPosition="right"
      defaultActiveKey={[0, 1]}
      expandIcon={(p) => (
        <RightOutlined
          style={{ marginTop: 16 }}
          rotate={p.isActive ? 90 : undefined}
        />
      )}
    >
      <BoscoFrameworks
        frameworks={BoscoFrameworksList}
        getProgress={getFrameworkProgress}
      />
      <BoscoPaintjobs
        paintjobs={BoscoPaintjobsList}
        getProgress={getPaintjobProgress}
      />
    </Collapse>
  );
}
