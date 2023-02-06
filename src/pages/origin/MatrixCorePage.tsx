import { Divider, Row } from 'antd';
import React, { useCallback } from 'react';
import WeaponDivider from 'components/WeaponDivider';
import { CosmeticMatrixItems } from 'data/cosmetics';
import { Miner } from 'data/miner';
import { Overclocks } from 'data/overclocks';
import { MatrixVictoryPoses } from 'data/victoryPoses';
import {
  MatrixWeaponPaintjobs,
  MatrixWeaponPaintjob,
} from 'data/weaponPaintjobs';
import { MinerWeapon, MinerWeapons } from 'data/weapons';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import {
  CosmeticHeadwears,
  CosmeticMoustaches,
  CosmeticBeards,
  CosmeticSideburns,
} from 'pages/cosmetics/CosmeticsPage';
import OverclockCard from 'pages/overclocks/OverclockCard';
import MatrixVictoryPoseCard from 'pages/victoryPoses/MatrixVictoryPoseCard';
import MatrixWeaponPaintjobCard from 'pages/weaponPaintjobs/MatrixWeaponPaintjobCard';
import { Overclock } from 'types/overclock';

export default function MatrixCorePage() {
  const getMatrixCoreProgress = useCallback(
    async (db: AppDatabase, miner: Miner) => {
      const forgedOverclocks = await db.overclocks
        .where('weapon')
        .anyOf(MinerWeapons[miner as Miner])
        .filter((o) => o.isForged)
        .count();
      const totalOverclocks = Object.values(Overclocks[miner as Miner]).flat()
        .length;

      const acquiredMatrixPaintjobs = await db.matrixWeaponPaintjobs
        .where('miner')
        .anyOf(miner)
        .filter((paintjob) => paintjob.isForged)
        .count();
      const totalMatrixPaintjobs = MatrixWeaponPaintjobs.length;

      const totalMatrixVictoryPoses = MatrixVictoryPoses[miner].length;
      const acquiredMatrixVictoryPoses = await db.matrixVictoryPoses
        .where('miner')
        .anyOf(miner)
        .filter((pose) => pose.isForged)
        .count();

      const totalCosmetics = CosmeticMatrixItems.length;
      const acquiredCosmetics = await db.cosmeticMatrixItems
        .where('miner')
        .anyOf(miner)
        .filter((item) => item.isForged)
        .count();

      return {
        obtained:
          forgedOverclocks +
          acquiredMatrixPaintjobs +
          acquiredMatrixVictoryPoses +
          acquiredCosmetics,
        total:
          totalOverclocks +
          totalMatrixPaintjobs +
          totalMatrixVictoryPoses +
          totalCosmetics,
      };
    },
    []
  );

  return (
    <MinerPageLayout category="MatrixCores" getProgress={getMatrixCoreProgress}>
      {(miner) => (
        <>
          {MinerWeapons[miner].map((weapon) => (
            <React.Fragment key={weapon}>
              <WeaponDivider weapon={weapon} />
              <Row gutter={[16, 16]}>
                {Object.values(
                  (Overclocks as Record<
                    Miner,
                    Record<MinerWeapon<Miner>, Overclock[]>
                  >)[miner][weapon]
                ).map((overclock) => (
                  <OverclockCard
                    key={overclock.name}
                    overclock={overclock}
                    miner={miner}
                    weapon={weapon as MinerWeapon<Miner>}
                  />
                ))}
              </Row>
            </React.Fragment>
          ))}

          <Divider />
          <Row gutter={[16, 16]}>
            {MatrixWeaponPaintjobs.map((paintjob) => (
              <MatrixWeaponPaintjobCard
                key={miner + paintjob.name + paintjob.id}
                miner={miner}
                weaponPaintjob={paintjob as MatrixWeaponPaintjob}
              />
            ))}
          </Row>

          <Divider />
          <Row gutter={[16, 16]}>
            {Object.values(MatrixVictoryPoses[miner]).map(
              (matrixVictoryPose) => (
                <MatrixVictoryPoseCard
                  key={miner + matrixVictoryPose.name}
                  miner={miner}
                  victoryPose={matrixVictoryPose}
                />
              )
            )}
          </Row>

          <CosmeticHeadwears miner={miner}></CosmeticHeadwears>
          <CosmeticMoustaches miner={miner}></CosmeticMoustaches>
          <CosmeticBeards miner={miner}></CosmeticBeards>
          <CosmeticSideburns miner={miner}></CosmeticSideburns>
        </>
      )}
    </MinerPageLayout>
  );
}
