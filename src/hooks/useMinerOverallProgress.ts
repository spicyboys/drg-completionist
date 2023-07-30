import { graphql } from "gatsby";
import useMinerOverclockProgress from "./useMinerOverclockProgress";
import useMinerWeaponPaintJobProgress from "./useMinerWeaponPaintJobProgress";
import { type ProgressFooterProps } from "../components/ProgressFooter";

type OverallProgress = Readonly<{
  overallProgress: Percentages;
  overclockProgress: Percentages;
  weaponPaintProgress: Percentages;
}>;

type Percentages = Readonly<{ acquired: number; forged: number }>;

const getPercent = (
  numerators: readonly (number | undefined)[],
  denominators: readonly number[]
) => {
  const numerator = numerators.reduce<number>((p, c) => p + (c ?? 0), 0);
  const denominator = denominators.reduce((p, c) => p + c);

  return Math.ceil((numerator / denominator) * 100);
};

const getPercentageFromProgress = (
  progress: ProgressFooterProps
): Percentages => ({
  acquired: getPercent(
    [progress.completedItems, progress.unforgedItems],
    [progress.totalItems]
  ),
  forged: getPercent([progress.completedItems], [progress.totalItems]),
});

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

  return {
    overallProgress: overallPercent,
    overclockProgress: getPercentageFromProgress(overclockProgress),
    weaponPaintProgress: getPercentageFromProgress(weaponPaintProgress),
  };
}

export const query = graphql`
  fragment MinerOverallProgressMiner on MinersJson {
    ...MinerOverclockProgressMiner
    ...MinerWeaponPaintJobProgressMiner
  }
`;
