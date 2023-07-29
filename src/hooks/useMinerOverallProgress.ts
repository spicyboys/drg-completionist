import { graphql } from 'gatsby';
import useMinerOverclockProgress from './useMinerOverclockProgress';
import useMinerWeaponPaintJobProgress from './useMinerWeaponPaintJobProgress';

type OverallProgress = {
  overallProgress: Percentages;
  overclockProgress: Percentages;
  weaponPaintProgress: Percentages;
};

type Percentages = { acquired: number; forged: number };

const getPercent = (
  numerators: (number | undefined)[],
  denominators: number[]
) => {
  const numerator = numerators.reduce<number>((p, c) => p + (c ?? 0), 0);
  const denominator = denominators.reduce((p, c) => p + c);

  return Math.ceil((numerator / denominator) * 100);
};

export default function useMinerOverallProgress(
  miner: Queries.MinerOverallProgressMinerFragment
): OverallProgress | undefined {
  const overclockProgress = useMinerOverclockProgress(miner!);
  const weaponPaintProgress = useMinerWeaponPaintJobProgress(miner!);

  if (!overclockProgress || !weaponPaintProgress) {
    return undefined;
  }

  const overallPercent: Percentages = {
    acquired: getPercent(
      [
        overclockProgress.completedItems,
        overclockProgress.unforgedItems,
        weaponPaintProgress.completedItems,
        weaponPaintProgress.unforgedItems,
      ],
      [overclockProgress.totalItems, weaponPaintProgress.totalItems]
    ),
    forged: getPercent(
      [overclockProgress.completedItems, weaponPaintProgress.completedItems],
      [overclockProgress.totalItems, weaponPaintProgress.totalItems]
    ),
  };

  const overclockPercent: Percentages = {
    acquired: getPercent(
      [overclockProgress.completedItems, overclockProgress.unforgedItems],
      [overclockProgress.totalItems]
    ),
    forged: getPercent(
      [overclockProgress.completedItems],
      [overclockProgress.totalItems]
    ),
  };

  const weaponPaintPercent: Percentages = {
    acquired: getPercent(
      [weaponPaintProgress.completedItems, weaponPaintProgress.unforgedItems],
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
