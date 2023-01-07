import { Row } from 'antd';
import { useCallback } from 'react';
import { Miner } from 'data/miner';
import { CommonVictoryPoses, MatrixVictoryPoses } from 'data/victoryPoses';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import CommonVictoryPoseCard from './CommonVictoryPosesCard';
import MatrixVictoryPoseCard from './MatrixVictoryPoseCard';

export default function VictoryPosePage() {
  const getProgress = useCallback(async (db: AppDatabase, miner: Miner) => {
    const matrixVictoryPoses = MatrixVictoryPoses[miner];
    const acquiredMatrixVictoryPoses = await db.matrixVictoryPoses
      .where('miner')
      .anyOf(miner)
      .filter((pose) => pose.isForged)
      .count();

    const commonVictoryPoses = CommonVictoryPoses;
    const acquiredCommonVictoryPoses = await db.commonVictoryPoses
      .where('miner')
      .anyOf(miner)
      .count();
    return (
      (acquiredMatrixVictoryPoses + acquiredCommonVictoryPoses) /
      (matrixVictoryPoses.length + commonVictoryPoses.length)
    );
  }, []);

  return (
    <MinerPageLayout category="VictoryPose" getProgress={getProgress}>
      {(miner) => (
        <Row gutter={[16, 16]}>
          {Object.values(MatrixVictoryPoses[miner]).map((matrixVictoryPose) => (
            <MatrixVictoryPoseCard
              key={miner + matrixVictoryPose}
              miner={miner}
              victoryPose={matrixVictoryPose}
            />
          ))}
          {Object.values(CommonVictoryPoses).map((commonVictoryPose) => (
            <CommonVictoryPoseCard
              key={miner + commonVictoryPose}
              miner={miner}
              commonVictoryPose={commonVictoryPose}
            />
          ))}
        </Row>
      )}
    </MinerPageLayout>
  );
}
