import { SaveFile } from 'drg-save-parser';
import { Miner, MinerIDs } from 'data/miner';
import { CommonVictoryPoses, MatrixVictoryPoses } from 'data/victoryPoses';
import { CommonVictoryPoseEntry, MatrixVictoryPoseEntry } from 'db/AppDatabase';
import { flipObject } from 'utils/object';

export const getMatrixVictoryPosesFromSaveFile = ({
  SchematicSave: {
    SchematicSave: {
      ForgedSchematics: forgedSchematics,
      OwnedSchematics: unforgedSchematics,
    },
  },
}: SaveFile): MatrixVictoryPoseEntry[] => {
  const acquiredMatrixVictoryPoses: MatrixVictoryPoseEntry[] = [];
  Object.entries(MatrixVictoryPoses).forEach(([miner, poses]) => {
    for (const pose of poses) {
      if (
        forgedSchematics !== undefined &&
        forgedSchematics.some((f) => pose.id === f)
      ) {
        acquiredMatrixVictoryPoses.push({
          miner: miner as Miner,
          name: pose.name,
          isForged: true,
        });
      }
      if (
        unforgedSchematics !== undefined &&
        unforgedSchematics.some((f) => pose.id === f)
      ) {
        acquiredMatrixVictoryPoses.push({
          miner: miner as Miner,
          name: pose.name,
          isForged: false,
        });
      }
    }
  });
  return acquiredMatrixVictoryPoses;
};

export const getCommonVictoryPosesFromSaveFile = ({
  CharacterSaves,
}: SaveFile): CommonVictoryPoseEntry[] => {
  const acquiredCommonVictoryPoses: CommonVictoryPoseEntry[] = [];
  for (const {
    VictoryPose: {
      VictoryPoseSave: { UnlockedVictoryPoses: unlockedVictoryPoses },
    },
    SavegameID: minerId,
  } of CharacterSaves) {
    const miner = flipObject(MinerIDs)[minerId];
    for (const unlockedVictoryPoseID of unlockedVictoryPoses) {
      CommonVictoryPoses.filter(
        (pose) => pose.id === unlockedVictoryPoseID
      ).forEach((pose) => {
        // avoid duplicates if any happen to come up in any way
        if (
          !acquiredCommonVictoryPoses.some(
            (entry) => entry.name === pose.name && entry.miner === miner
          )
        ) {
          acquiredCommonVictoryPoses.push({ miner: miner, name: pose.name });
        }
      });
    }
  }
  return acquiredCommonVictoryPoses;
};
