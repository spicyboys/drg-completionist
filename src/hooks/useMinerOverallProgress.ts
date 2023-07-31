import { graphql } from "gatsby";
import useMinerOverclockProgress from "./useMinerOverclockProgress";
import useMinerWeaponPaintJobProgress from "./useMinerWeaponPaintJobProgress";
import { type ProgressFooterProps } from "../components/ProgressFooter";

type OverallProgress = Readonly<{
  overallProgress: ForgeProgress;
  overclockProgress: ForgeProgress;
  weaponPaintProgress: ForgeProgress;
}>;

type ForgeProgress = Readonly<{
  acquired: number;
  forged: number;
  unforged: number;
  count: number;
}>;

const getPercent = (
  numerators: readonly (number | undefined)[],
  denominators: readonly number[]
) => {
  const numerator = numerators.reduce<number>((p, c) => p + (c ?? 0), 0);
  const denominator = denominators.reduce((p, c) => p + c);

  return Number(((numerator / denominator) * 100).toFixed(1));
};

const getPercentageFromProgress = (
  progress: ProgressFooterProps
): ForgeProgress => ({
  acquired: getPercent(
    [progress.completedItems, progress.unforgedItems],
    [progress.totalItems]
  ),
  forged: getPercent([progress.completedItems], [progress.totalItems]),
  unforged: getPercent([progress.unforgedItems], [progress.totalItems]),
  count: progress.totalItems,
});

const getOverallPercentage = (
  ...progresses: readonly ProgressFooterProps[]
): ForgeProgress => {
  const totalItems = progresses.map((p) => p.totalItems);
  return {
    acquired: getPercent(
      [
        ...progresses.map((p) => p.completedItems),
        ...progresses.map((p) => p.unforgedItems),
      ],
      totalItems
    ),
    forged: getPercent(
      progresses.map((p) => p.completedItems),
      totalItems
    ),
    unforged: getPercent(
      progresses.map((p) => p.unforgedItems),
      totalItems
    ),
    count: progresses.reduce((p, c) => p + c.totalItems, 0),
  };
};

export default function useMinerOverallProgress(
  miner: Queries.MinerOverallProgressMinerFragment
): OverallProgress | undefined {
  const overclockProgress = useMinerOverclockProgress(miner!);
  const weaponPaintProgress = useMinerWeaponPaintJobProgress(miner!);

  if (!overclockProgress || !weaponPaintProgress) {
    return undefined;
  }

  return {
    overallProgress: getOverallPercentage(
      overclockProgress,
      weaponPaintProgress
    ),
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
