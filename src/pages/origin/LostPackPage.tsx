import { RightOutlined } from '@ant-design/icons';
import { Collapse, Row } from 'antd';
import { useCallback } from 'react';
import { ArmorPaintjobs } from 'data/armor';
import { BoscoPaintjobs as BoscoPaintjobsList } from 'data/bosco';
import { Miner } from 'data/miner';
import {
  Pickaxes,
  PickaxePaintjobNames,
  PickaxeSets,
  PickaxeUniquePartNames,
  UniqueParts,
  PickaxePaintjobName,
} from 'data/pickaxes';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import ArmorPaintjobCard from 'pages/armor/ArmorPaintjobCard';
import BoscoPaintjobs from 'pages/bosco/BoscoPaintjobs';
import PickaxePaintjobs from 'pages/pickaxes/PickaxePaintjobs';
import PickaxeParts from 'pages/pickaxes/PickaxeParts';
import { ItemSource } from 'types/itemSource';
import { getOpenCategories, updateOpenCategories } from 'utils/localStorage';

export default function LostPackPage() {
  const getLostPackProgress = useCallback(
    async (db: AppDatabase, miner: Miner) => {
      const acquiredArmorPaintjobs = await db.armorPaintjobs
        .where('miner')
        .anyOf(miner)
        .toArray();
      const lostPackArmorPaintjobs = ArmorPaintjobs[miner]
        .filter((p) => p.itemSource === ItemSource.LostPack)
        .map((p) => p.name);
      const acquiredLostPackArmorPaintjobs = acquiredArmorPaintjobs.filter(
        (p) => lostPackArmorPaintjobs.includes(p.name)
      ).length;

      return acquiredLostPackArmorPaintjobs / lostPackArmorPaintjobs.length;
    },
    []
  );

  const getLostPackBoscoPaintjobProgress = useCallback(
    async (db: AppDatabase) => {
      const acquiredBoscoPaintjobs = await db.boscoPaintjobs.toArray();
      const lostPackBoscoPaintjobs = BoscoPaintjobsList.filter(
        (p) => p.itemSource === ItemSource.LostPack
      ).map((p) => p.name);
      const acquiredLostPackBoscoPaintjobs = acquiredBoscoPaintjobs.filter(
        (p) => lostPackBoscoPaintjobs.includes(p.name)
      ).length;

      return acquiredLostPackBoscoPaintjobs / lostPackBoscoPaintjobs.length;
    },
    []
  );

  const getLostPackPickaxePartProgress = useCallback(
    async (db: AppDatabase) => {
      const acquiredPickaxes = await db.pickaxes
        .where('name')
        .anyOf(PickaxeSets)
        .and((p) => p.part !== 'Paintjob')
        .toArray();
      const lostPackPickaxes = Pickaxes.filter(
        (p) => p.source === ItemSource.LostPack
      ).map((p) => p.name);
      const acquiredLostPackPickaxes = acquiredPickaxes.filter((p) =>
        lostPackPickaxes.includes(p.name)
      ).length;

      const acquiredUniques = await db.pickaxeUniques
        .where('name')
        .anyOf(PickaxeUniquePartNames)
        .count();
      // Denominator: 6 Total Pickaxe Parts - 1 Paintjob Part = 5 Non-Paintjob Parts
      return (
        (acquiredLostPackPickaxes + acquiredUniques) /
        (lostPackPickaxes.length * 5 + UniqueParts.length)
      );
    },
    []
  );

  const getLostPackPickaxePaintjobProgress = useCallback(
    async (db: AppDatabase) => {
      const acquiredPaintjobs = await db.pickaxes
        .where('name')
        .anyOf(PickaxePaintjobNames)
        .and((p) => p.part === 'Paintjob')
        .toArray();
      const lostPackPickaxePaintjobs = Pickaxes.filter(
        (p) => p.source === ItemSource.LostPack
      ).map((p) => p.name);
      const acquiredLostPackPickaxePaintjobs = acquiredPaintjobs.filter((p) =>
        lostPackPickaxePaintjobs.includes(p.name)
      ).length;
      // 6 Total Pickaxe Parts - 1 Paintjob Part = 5 Remaining Parts
      return acquiredLostPackPickaxePaintjobs / lostPackPickaxePaintjobs.length;
    },
    []
  );

  const lostPackPickaxePaintjobs: PickaxePaintjobName[] = Pickaxes.filter(
    (p) => p.source === ItemSource.LostPack
  ).map((p) => p.name);

  const boscoCategories = ['lostpack-bocso-paintjobs']
  const pickaxeCategories = ['lostpack-pickaxe-paintjobs', 'lostpack-pickaxe-parts']

  return (
    <>
      <MinerPageLayout category="LostPack" getProgress={getLostPackProgress}>
        {(miner) => (
          <Row gutter={[16, 16]}>
            {ArmorPaintjobs[miner]
              .filter((p) => p.itemSource === ItemSource.LostPack)
              .map((paintjob) => (
                <ArmorPaintjobCard
                  key={miner + paintjob.name}
                  miner={miner}
                  paintjob={paintjob}
                />
              ))}
          </Row>
        )}
      </MinerPageLayout>
      <Collapse
        className="unselectable"
        expandIconPosition="right"
        defaultActiveKey={getOpenCategories(boscoCategories)}
        onChange={(open) => updateOpenCategories(open, boscoCategories)}
        expandIcon={(p) => (
          <RightOutlined
            style={{ marginTop: 16 }}
            rotate={p.isActive ? 90 : undefined}
          />
        )}
      >
        <BoscoPaintjobs
          forceRender
          key="lostpack-bocso-paintjobs"
          paintjobs={BoscoPaintjobsList.filter(
            (p) => p.itemSource === ItemSource.LostPack
          )}
          getProgress={getLostPackBoscoPaintjobProgress}
        />
      </Collapse>
      <Collapse
        className="unselectable"
        expandIconPosition="right"
        defaultActiveKey={getOpenCategories(pickaxeCategories)}
        onChange={(open) => updateOpenCategories(open, pickaxeCategories)}
        expandIcon={(p) => (
          <RightOutlined
            style={{ marginTop: 16 }}
            rotate={p.isActive ? 90 : undefined}
          />
        )}
      >
        <PickaxeParts
          forceRender
          key="lostpack-pickaxe-parts"
          pickaxes={Pickaxes.filter((p) => p.source === ItemSource.LostPack)}
          getProgress={getLostPackPickaxePartProgress}
        />
        <PickaxePaintjobs
          forceRender
          key="lostpack-pickaxe-paintjobs"
          paintjobs={lostPackPickaxePaintjobs}
          getProgress={getLostPackPickaxePaintjobProgress}
        />
      </Collapse>
    </>
  );
}
