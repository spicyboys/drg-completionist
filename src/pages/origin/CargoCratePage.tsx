import { RightOutlined } from '@ant-design/icons';
import { Row, Divider, Collapse } from 'antd';
import React, { useCallback } from 'react';
import WeaponDivider from 'components/WeaponDivider';
import {
  BoscoFrameworkNames,
  BoscoFrameworks as BoscoFrameworksList,
} from 'data/bosco';
import { Framework, Frameworks } from 'data/frameworks';
import { Miner } from 'data/miner';
import { CommonVictoryPoses } from 'data/victoryPoses';
import { MinerWeapons } from 'data/weapons';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import BoscoFrameworks from 'pages/bosco/BoscoFrameworks';
import FrameworkCard from 'pages/frameworks/FrameworkCard';
import CommonVictoryPoseCard from 'pages/victoryPoses/CommonVictoryPosesCard';
import { ItemSource } from 'types/itemSource';
import { getOpenCategories, updateOpenCategories } from 'utils/localStorage';

export default function CargoCratePage() {
  const getCargoCrateProgress = useCallback(
    async (db: AppDatabase, miner: Miner) => {
      const weapons = MinerWeapons[miner as Miner];
      const acquiredFrameworks = await db.frameworks
        .where('weapon')
        .anyOf(weapons)
        .toArray();
      const minerCargoCrateFrameworks: Framework[] = weapons
        .map((w) => Frameworks[w])
        .flat();
      const cargoCrateFrameworks = minerCargoCrateFrameworks
        .filter((f) => f.itemSource === ItemSource.CargoCrate)
        .map((f) => f.name);
      const acquiredCargoCrateFrameworks = acquiredFrameworks.filter((f) =>
        cargoCrateFrameworks.includes(f.name)
      ).length;

      const acquiredVictoryPoses = await db.commonVictoryPoses
        .where('miner')
        .anyOf(miner)
        .toArray();
      const cargoCrateVictoryPoses = CommonVictoryPoses.filter(
        (v) => v.itemSource === ItemSource.CargoCrate
      ).map((v) => v.name);
      const acquiredCargoCrateVictoryPoses = acquiredVictoryPoses.filter((v) =>
        cargoCrateVictoryPoses.includes(v.name)
      ).length;

      return {
        obtained: acquiredCargoCrateFrameworks + acquiredCargoCrateVictoryPoses,
        total: cargoCrateFrameworks.length + cargoCrateVictoryPoses.length,
      };
    },
    []
  );

  const getBoscoFrameworkProgress = useCallback(async (db: AppDatabase) => {
    const acquiredBoscoFrameworks = await db.boscoFrameworks
      .where('name')
      .anyOf(BoscoFrameworkNames)
      .toArray();
    const cargoCrateBoscoFrameworks = BoscoFrameworksList.filter(
      (f) => f.itemSource === ItemSource.CargoCrate
    ).map((f) => f.name);
    const acquiredCargoCrateBoscoFrameworks = acquiredBoscoFrameworks.filter(
      (f) => cargoCrateBoscoFrameworks.includes(f.name)
    ).length;
    return {
      obtained: acquiredCargoCrateBoscoFrameworks,
      total: cargoCrateBoscoFrameworks.length,
    };
  }, []);

  const categories = ['cargo-bosco-frameworks'];

  return (
    <>
      <MinerPageLayout
        category="CargoCrates"
        getProgress={getCargoCrateProgress}
      >
        {(miner) => (
          <>
            {MinerWeapons[miner].map((weapon) => (
              <React.Fragment key={weapon}>
                <WeaponDivider weapon={weapon} />
                <Row gutter={[16, 16]}>
                  {Frameworks[weapon]
                    .filter((f) => f.itemSource === ItemSource.CargoCrate)
                    .map((framework) => (
                      <FrameworkCard
                        key={framework.name}
                        miner={miner}
                        weapon={weapon}
                        framework={framework}
                      />
                    ))}
                </Row>
              </React.Fragment>
            ))}

            <Divider />

            <Row gutter={[16, 16]}>
              {Object.values(CommonVictoryPoses)
                .filter((v) => v.itemSource === ItemSource.CargoCrate)
                .map((commonVictoryPose) => (
                  <CommonVictoryPoseCard
                    key={miner + commonVictoryPose.name}
                    miner={miner}
                    commonVictoryPose={commonVictoryPose}
                  />
                ))}
            </Row>
          </>
        )}
      </MinerPageLayout>
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
          key="cargo-bosco-frameworks"
          frameworks={BoscoFrameworksList.filter(
            (f) => f.itemSource === ItemSource.CargoCrate
          )}
          getProgress={getBoscoFrameworkProgress}
        />
      </Collapse>
    </>
  );
}
