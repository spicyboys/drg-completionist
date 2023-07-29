import { graphql } from 'gatsby';
import useMinerOverclockProgress from './useMinerOverclockProgress';
import useMinerWeaponPaintJobProgress from './useMinerWeaponPaintJobProgress';

export type OverallProgress = {
  overallProgress: { acquired: number; forged: number };
  overclockProgress?: { acquired: number; forged: number };
  weaponPaintProgress?: { acquired: number; forged: number };
};

export default function useMinerOverallProgress(
  miner: Queries.MinerOverallProgressMinerFragment
): OverallProgress | undefined {
  const overclockProgress = useMinerOverclockProgress(miner!);
  const weaponPaintProgress = useMinerWeaponPaintJobProgress(miner!);

  if (!overclockProgress || !weaponPaintProgress) {
    return undefined;
  }

  const getPercent = (numerators: number[], denominators: number[]) => {
    const numerator = numerators.reduce((p, c) => p + c);
    const denominator = denominators.reduce((p, c) => p + c);

    return Math.ceil((numerator / denominator) * 100);
  };

  const overallPercent: OverallProgress['overallProgress'] = {
    acquired: getPercent(
      [
        overclockProgress.completedItems,
        overclockProgress.unforgedItems ?? 0,
        weaponPaintProgress.completedItems,
        weaponPaintProgress.unforgedItems ?? 0,
      ],
      [overclockProgress.totalItems, weaponPaintProgress.totalItems]
    ),
    forged: getPercent(
      [overclockProgress.completedItems, weaponPaintProgress.completedItems],
      [overclockProgress.totalItems, weaponPaintProgress.totalItems]
    ),
  };

  const overclockPercent: OverallProgress['overclockProgress'] = {
    acquired: getPercent(
      [overclockProgress.completedItems, overclockProgress.unforgedItems ?? 0],
      [overclockProgress.totalItems]
    ),
    forged: getPercent(
      [overclockProgress.completedItems],
      [overclockProgress.totalItems]
    ),
  };

  const weaponPaintPercent: OverallProgress['overallProgress'] = {
    acquired: getPercent(
      [
        weaponPaintProgress.completedItems,
        weaponPaintProgress.unforgedItems ?? 0,
      ],
      [weaponPaintProgress.totalItems]
    ),
    forged: getPercent(
      [weaponPaintProgress.completedItems],
      [weaponPaintProgress.totalItems]
    ),
  };

  return {
    overallProgress: overallPercent,
    overclockProgress: overclockPercent,
    weaponPaintProgress: weaponPaintPercent,
  };
}

export const query = graphql`
  fragment MinerOverallProgressMiner on MinersJson {
    ...MinerOverclockProgressMiner
    ...MinerWeaponPaintJobProgressMiner
  }
`;
