import { SaveFile } from 'drg-save-parser';
import { BoscoFrameworks, BoscoID, BoscoPaintjobs } from 'data/bosco';
import { BoscoFrameworkEntry, BoscoPaintjobEntry } from 'db/AppDatabase';

export const getBoscoFrameworksFromSaveFile = ({
  UnlockedItemSkins: unlockedItemSkins,
}: SaveFile): BoscoFrameworkEntry[] => {
  const acquiredBoscoFrameworks: BoscoFrameworkEntry[] = Object.values(
    BoscoFrameworks
  )
    .filter((framework) => unlockedItemSkins[BoscoID].includes(framework.id))
    .map(
      (framework) => framework as BoscoFrameworkEntry
    ) as BoscoFrameworkEntry[];

  return acquiredBoscoFrameworks;
};

export const getBoscoPaintjobsFromSaveFile = ({
  UnlockedItemSkins: unlockedItemSkins,
}: SaveFile): BoscoPaintjobEntry[] => {
  const acquiredBoscoPaintjobs: BoscoPaintjobEntry[] = Object.values(
    BoscoPaintjobs
  )
    .filter((paintjob) => unlockedItemSkins[BoscoID].includes(paintjob.id))
    .map((paintjob) => paintjob as BoscoPaintjobEntry) as BoscoPaintjobEntry[];

  return acquiredBoscoPaintjobs;
};
