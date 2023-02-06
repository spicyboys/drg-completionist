import { RightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { useCallback } from 'react';
import {
  PickaxePaintjobNames,
  Pickaxes,
  PickaxeSets,
  PickaxeUniquePartNames,
} from 'data/pickaxes';
import { AppDatabase } from 'db/AppDatabase';
import { getOpenCategories, updateOpenCategories } from 'utils/localStorage';
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
    const acquiredUniques = await db.pickaxeUniques
      .where('name')
      .anyOf(PickaxeUniquePartNames)
      .count();
    // Denominator: 6 Total Pickaxe Parts - 1 Paintjob Part = 5 Non-Paintjob Parts
    return {
      obtained: acquiredPickaxes + acquiredUniques,
      total: PickaxeSets.length * 5 + PickaxeUniquePartNames.length,
    };
  }, []);

  /** Get total count for all pickaxe Paintjob parts ONLY. */
  const getPaintjobProgress = useCallback(async (db: AppDatabase) => {
    const acquiredPaintjobs = await db.pickaxes
      .where('name')
      .anyOf(PickaxePaintjobNames)
      .and((p) => p.part === 'Paintjob')
      .count();
    // 6 Total Pickaxe Parts - 1 Paintjob Part = 5 Remaining Parts
    return {
      obtained: acquiredPaintjobs,
      total: PickaxePaintjobNames.length,
    };
  }, []);

  const categories = ['pickaxe-parts', 'pickaxe-paintjobs'];

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
      <PickaxeParts
        forceRender
        key="pickaxe-parts"
        pickaxes={Pickaxes}
        getProgress={getPartProgress}
      />
      <PickaxePaintjobs
        forceRender
        key="pickaxe-paintjobs"
        paintjobs={Object.values(PickaxePaintjobNames)}
        getProgress={getPaintjobProgress}
      />
    </Collapse>
  );
}
