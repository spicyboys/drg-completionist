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
import { getOpenCategories, updateOpenCategories } from 'utils/localStorage';
import BoscoFrameworks from './BoscoFrameworks';
import BoscoPaintjobs from './BoscoPaintjobs';

export default function BoscoPage() {
  const getPaintjobProgress = useCallback(async (db: AppDatabase) => {
    const acquiredPaintjobs = await db.boscoPaintjobs
      .where('name')
      .anyOf(BoscoPaintjobNames)
      .count();
    return {
      obtained: acquiredPaintjobs,
      total: BoscoPaintjobsList.length,
    };
  }, []);

  const getFrameworkProgress = useCallback(async (db: AppDatabase) => {
    const acquiredFrameworks = await db.boscoFrameworks
      .where('name')
      .anyOf(BoscoFrameworkNames)
      .count();
    return {
      obtained: acquiredFrameworks,
      total: BoscoFrameworksList.length,
    };
  }, []);

  const categories = ['bosco-frameworks', 'bosco-paintjobs'];

  return (
    <Collapse
      className="unselectable"
      expandIconPosition="right"
      defaultActiveKey={getOpenCategories(categories)}
      onChange={(open) => updateOpenCategories(open, categories)}
      expandIcon={(p) => (
        <RightOutlined
          style={{ marginTop: 16 }}
          rotate={p.isActive ? 90 : undefined}
        />
      )}
    >
      <BoscoFrameworks
        forceRender
        key="bosco-frameworks"
        frameworks={BoscoFrameworksList}
        getProgress={getFrameworkProgress}
      />
      <BoscoPaintjobs
        forceRender
        key="bosco-paintjobs"
        paintjobs={BoscoPaintjobsList}
        getProgress={getPaintjobProgress}
      />
    </Collapse>
  );
}
