import { RightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { useCallback } from 'react';
import { PickaxePaintjobNames, Pickaxes, PickaxeSets } from 'data/pickaxes';
import { AppDatabase } from 'db/AppDatabase';
import PickaxePaintjobs from './PickaxePaintjobs';
import PickaxeParts from './PickaxeParts';

export default function PickaxesPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getProgress = useCallback(async (db: AppDatabase) => {
    const pickaxes = PickaxeSets;
    // TODO: Replace this random number with actual IndexedDB call
    const acquiredPickaxes = Math.round(pickaxes.length * Math.random());
    console.warn(
      'Setting Pickaxe Progress to random value. Fix me before going live!'
    );
    // const acquiredPickaxes = await db.pickaxes
    //   .where('pickaxes')
    //   .anyOf(pickaxes)
    //   .count();
    return acquiredPickaxes / pickaxes.length;
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
      <PickaxeParts pickaxes={Pickaxes} getProgress={getProgress} />
      <PickaxePaintjobs
        paintjobs={PickaxePaintjobNames}
        getProgress={getProgress}
      />
    </Collapse>
  );
}
