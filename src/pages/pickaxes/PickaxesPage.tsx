import { RightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { useCallback } from 'react';
import { PickaxePaintjobNames, Pickaxes, PickaxeSets } from 'data/pickaxes';
import { AppDatabase } from 'db/AppDatabase';
import PickaxePaintjobs from './PickaxePaintjobs';
import PickaxeParts from './PickaxeParts';

export default function PickaxesPage() {
  /** Get total count for all acquired pickaxe parts EXCEPT Paintjobs. */
  const getPartProgress = useCallback(async (db: AppDatabase) => {
    const acquiredPickaxes = await db.pickaxes
      .where('name')
      .anyOf(PickaxeSets)
      .and((p) => p.part !== 'Paintjob')
      .count();
    // 6 Total Pickaxe Parts - 1 Paintjob Part = 5 Remaining Parts
    return acquiredPickaxes / (PickaxeSets.length * 5);
  }, []);

  /** Get total count for all pickaxe Paintjob parts ONLY. */
  const getPaintjobProgress = useCallback(async (db: AppDatabase) => {
    const acquiredPaintjobs = await db.pickaxes
      .where('name')
      .anyOf(PickaxePaintjobNames)
      .and((p) => p.part === 'Paintjob')
      .count();
    // 6 Total Pickaxe Parts - 1 Paintjob Part = 5 Remaining Parts
    return acquiredPaintjobs / PickaxePaintjobNames.length;
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
      <PickaxeParts pickaxes={Pickaxes} getProgress={getPartProgress} />
      <PickaxePaintjobs
        paintjobs={PickaxePaintjobNames}
        getProgress={getPaintjobProgress}
      />
    </Collapse>
  );
}
