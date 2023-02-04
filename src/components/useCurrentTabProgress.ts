import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useMemo } from 'react';
import { TabName } from 'App';
import { ArmorPaintjobs, CommonArmorPaintjobs } from 'data/armor';
import { BoscoFrameworks, BoscoPaintjobs } from 'data/bosco';
import { CosmeticMatrixItems } from 'data/cosmetics';
import { Frameworks } from 'data/frameworks';
import { Miner } from 'data/miner';
import { Overclocks } from 'data/overclocks';
import {
  PickaxePaintjobNames,
  Pickaxes,
  PickaxeSets,
  PickaxeUniquePartNames,
  UniqueParts,
} from 'data/pickaxes';
import { CommonVictoryPoses, MatrixVictoryPoses } from 'data/victoryPoses';
import {
  CommonWeaponPaintjobs,
  MatrixWeaponPaintjobs,
  UniqueWeaponPaintjobs,
} from 'data/weaponPaintjobs';
import { MinerWeapons } from 'data/weapons';
import { AppDatabase } from 'db/AppDatabase';
import useDB from 'db/useDB';
import { ItemSource } from 'types/itemSource';

type TabProgress = {
  progress: number;
  partialProgress: number | null;
  acquiredItems: number;
  totalItems: number;
};

function getAmountMatrixCoreItems(): number {
  return (
    Object.values(Overclocks)
      .flatMap((w) => Object.values(w))
      .flat().length +
    Object.values(ArmorPaintjobs)
      .flatMap((w) => Object.values(w))
      .flat()
      .filter((paintjob) => paintjob.itemSource === ItemSource.MatrixCore)
      .length +
    MatrixWeaponPaintjobs.length * Object.values(Miner).length +
    Object.values(MatrixVictoryPoses).flatMap((p) => Object.values(p)).length +
    CosmeticMatrixItems.length * Object.values(Miner).length
  );
}

function getAmountCargoCrateItems(): number {
  return (
    Object.values(Frameworks)
      .flat()
      .filter((f) => f.itemSource === ItemSource.CargoCrate).length +
    BoscoFrameworks.filter((f) => f.itemSource === ItemSource.CargoCrate)
      .length +
    CommonVictoryPoses.filter((v) => v.itemSource === ItemSource.CargoCrate)
      .length *
      Object.values(Miner).length
  );
}

function getAmountLostPackItems(): number {
  return (
    Object.values(ArmorPaintjobs)
      .flat()
      .filter((p) => p.itemSource === ItemSource.LostPack).length +
    BoscoPaintjobs.filter((p) => p.itemSource === ItemSource.LostPack).length + 
    Pickaxes.filter((p) => p.source === ItemSource.LostPack).length * 6 + UniqueParts.length
  );
}

async function getAmountAcquiredCargoCrateItems(
  db: AppDatabase
): Promise<number> {
  const acquiredFrameworks = await db.frameworks.toArray();
  const cargoCrateFrameworks = Object.values(Frameworks)
    .flat()
    .filter((f) => f.itemSource === ItemSource.CargoCrate)
    .map((f) => f.name);
  const acquiredCargoCrateFrameworks = acquiredFrameworks.filter((f) =>
    cargoCrateFrameworks.includes(f.name)
  ).length;

  const acquiredVictoryPoses = await db.commonVictoryPoses.toArray();
  const cargoCrateVictoryPoses = CommonVictoryPoses.filter(
    (v) => v.itemSource === ItemSource.CargoCrate
  ).map((f) => f.name);
  const acquiredCargoCrateVictroyPoses = acquiredVictoryPoses.filter((v) =>
    cargoCrateVictoryPoses.includes(v.name)
  ).length;

  const acquiredBoscoFrameworks = await db.boscoFrameworks.toArray();
  const cargoCrateBoscoFrameworks = BoscoFrameworks.filter(
    (f) => f.itemSource === ItemSource.CargoCrate
  ).map((f) => f.name);
  const acquiredCargoCrateBoscoFrameworks = acquiredBoscoFrameworks.filter(
    (f) => cargoCrateBoscoFrameworks.includes(f.name)
  ).length;

  return (
    acquiredCargoCrateFrameworks +
    acquiredCargoCrateVictroyPoses +
    acquiredCargoCrateBoscoFrameworks
  );
}

async function getAmountAcquiredLostPackItems(
  db: AppDatabase
): Promise<number> {
  const acquiredArmorPaintjobs = await db.armorPaintjobs.toArray();
  const lostPackArmorPaintjobs = Object.values(ArmorPaintjobs)
    .flat()
    .filter((p) => p.itemSource === ItemSource.LostPack)
    .map((p) => p.name);
  const acquiredLostPackArmorPaintjobs = acquiredArmorPaintjobs.filter((p) =>
    lostPackArmorPaintjobs.includes(p.name)
  ).length;

  const acquiredBoscoPaintjobs = await db.boscoPaintjobs.toArray();
  const lostPackBoscoPaintjobs = BoscoPaintjobs.filter(
    (p) => p.itemSource === ItemSource.LostPack
  ).map((p) => p.name);
  const acquiredLostPackBoscoPaintjobs = acquiredBoscoPaintjobs.filter((p) =>
    lostPackBoscoPaintjobs.includes(p.name)
  ).length;

  const acquiredPickaxePaintjobs = await db.pickaxes
    .where('name')
    .anyOf(PickaxePaintjobNames)
    .and((p) => p.part === 'Paintjob')
    .toArray();
  const lostPackPickaxePaintjobs = Pickaxes.filter(
    (p) => p.source === ItemSource.LostPack
  ).map((p) => p.name);
  const acquiredLostPackPickaxePaintjobs = acquiredPickaxePaintjobs.filter(
    (p) => lostPackPickaxePaintjobs.includes(p.name)
  ).length;

  const acquiredUniquePickaxeParts = await db.pickaxeUniques
    .where('name')
    .anyOf(PickaxeUniquePartNames)
    .count();

  const acquiredPickaxeParts = await db.pickaxes
    .where('name')
    .anyOf(PickaxeSets)
    .and((p) => p.part !== 'Paintjob')
    .toArray();

  const lostPackPickaxeParts = Pickaxes.filter((p) => p.source === ItemSource.LostPack).map((p) => p.name);
  const acquiredLostPackPickaxeParts = acquiredPickaxeParts.filter((p) => lostPackPickaxeParts.includes(p.name)).length;

  return (
    acquiredLostPackArmorPaintjobs +
    acquiredLostPackBoscoPaintjobs +
    acquiredLostPackPickaxePaintjobs +
    acquiredUniquePickaxeParts +
    acquiredLostPackPickaxeParts
  );
}

async function getAmountAcquiredMatrixCoreItems(
  db: AppDatabase
): Promise<[number, number]> {
  const acquiredOverclocks = await db.overclocks.toArray();
  const matrixCoresForged = acquiredOverclocks.filter((o) => o.isForged).length;
  const matrixCoresUnforged = acquiredOverclocks.filter((o) => !o.isForged)
    .length;

  const acquiredMatrixPaintjobs = await db.matrixWeaponPaintjobs.toArray();
  const weaponPaintjobsForged = acquiredMatrixPaintjobs.filter(
    (p) => p.isForged
  ).length;
  const weaponPaintjobsUnforged = acquiredMatrixPaintjobs.filter(
    (p) => !p.isForged
  ).length;

  const acquiredMatrixVictoryPoses = await db.matrixVictoryPoses.toArray();
  const victoryPosesForged = acquiredMatrixVictoryPoses.filter(
    (p) => p.isForged
  ).length;
  const victoryPosesUnforged = acquiredMatrixVictoryPoses.filter(
    (pose) => !pose.isForged
  ).length;

  const acquiredCosmetics = await db.cosmeticMatrixItems.toArray();
  const cosmeticsForged = acquiredCosmetics.filter((item) => item.isForged)
    .length;
  const cosmeticsUnforged = acquiredCosmetics.filter((item) => !item.isForged)
    .length;

  const numForged =
    matrixCoresForged +
    weaponPaintjobsForged +
    victoryPosesForged +
    cosmeticsForged;
  const numUnforged =
    matrixCoresUnforged +
    weaponPaintjobsUnforged +
    victoryPosesUnforged +
    cosmeticsUnforged;

  return [numForged, numUnforged];
}

export default function useCurrentTabProgress(
  currentTab: TabName
): TabProgress {
  const db = useDB();
  getAmountCargoCrateItems;
  const totalItems = useMemo(() => {
    switch (currentTab) {
      case 'frameworks':
        return Object.values(Frameworks).flatMap((w) => Object.values(w))
          .length;
      case 'overclocks':
        return Object.values(Overclocks)
          .flatMap((w) => Object.values(w))
          .flat().length;
      case 'armor':
        return (
          Object.values(ArmorPaintjobs)
            .flatMap((w) => Object.values(w))
            .flat().length + CommonArmorPaintjobs.length
        );
      case 'weaponPaintjobs':
        return (
          UniqueWeaponPaintjobs.length *
            Object.values(MinerWeapons).flatMap((w) => Object.values(w))
              .length +
          MatrixWeaponPaintjobs.length * Object.values(Miner).length +
          CommonWeaponPaintjobs.length * Object.values(Miner).length
        );
      case 'pickaxes':
        return (
          PickaxeSets.length * 5 +
          PickaxePaintjobNames.length +
          PickaxeUniquePartNames.length
        );
      case 'victoryPoses':
        return (
          Object.values(MatrixVictoryPoses).flatMap((p) => Object.values(p))
            .length +
          CommonVictoryPoses.length * Object.values(Miner).length
        );
      case 'cosmetics':
        return CosmeticMatrixItems.length * Object.values(Miner).length;
      case 'bosco':
        return BoscoFrameworks.length + BoscoPaintjobs.length;
      case 'matrixCore':
        return getAmountMatrixCoreItems();
      case 'cargoCrate':
        return getAmountCargoCrateItems();
      case 'lostPack':
        return getAmountLostPackItems();
    }
  }, [currentTab]) as number;

  const p = useLiveQuery(
    async () => {
      switch (currentTab) {
        case 'frameworks': {
          const acquiredFrameworks = await db.frameworks.count();
          return {
            progress: (acquiredFrameworks / totalItems) * 100,
            partialProgress: null,
            acquiredItems: acquiredFrameworks,
            totalItems: totalItems,
          };
        }
        case 'overclocks': {
          const acquiredOverclocks = await db.overclocks.toArray();
          return {
            progress:
              (acquiredOverclocks.filter((o) => o.isForged).length /
                totalItems) *
              100,
            partialProgress:
              (acquiredOverclocks.filter((o) => !o.isForged).length /
                totalItems) *
              100,
            acquiredItems: acquiredOverclocks,
            totalItems: totalItems,
          };
        }
        case 'armor': {
          const acquiredArmorPaintjobs = await db.armorPaintjobs.count();
          const acquiredCommonArmorPaintJobs = await db.commonArmorPaintjobs.count();
          return {
            progress:
              ((acquiredArmorPaintjobs + acquiredCommonArmorPaintJobs) /
                totalItems) *
              100,
            partialProgress: null,
            acquiredItems:
              acquiredArmorPaintjobs + acquiredCommonArmorPaintJobs,
            totalItems: totalItems,
          };
        }
        case 'weaponPaintjobs': {
          const acquiredMatrixPaintjobs = await db.matrixWeaponPaintjobs.toArray();
          const acquiredUniquePaintjobs = await db.uniqueWeaponPaintjobs.toArray();
          const acquiredCommonPaintjobs = await db.commonWeaponPaintjobs.toArray();
          const progress =
            ((acquiredCommonPaintjobs.length +
              acquiredUniquePaintjobs.length +
              acquiredMatrixPaintjobs.filter((p) => p.isForged).length) /
              totalItems) *
            100;
          const partialProgress =
            (acquiredMatrixPaintjobs.filter((p) => !p.isForged).length /
              totalItems) *
            100;
          return {
            progress: progress,
            partialProgress: partialProgress,
            acquiredItems:
              acquiredCommonPaintjobs.length +
              acquiredUniquePaintjobs.length +
              acquiredMatrixPaintjobs.length,
            totalItems: totalItems,
          };
        }
        case 'pickaxes': {
          const acquiredPickaxeParts = await db.pickaxes.count();
          const acquiredPickaxeUniques = await db.pickaxeUniques.count();
          return {
            progress:
              ((acquiredPickaxeParts + acquiredPickaxeUniques) / totalItems) *
              100,
            partialProgress: null,
            acquiredItems: acquiredPickaxeParts + acquiredPickaxeUniques,
            totalItems: totalItems,
          };
        }
        case 'victoryPoses': {
          const acquiredCommonVictoryPoses = await db.commonVictoryPoses.toArray();
          const acquiredMatrixVictoryPoses = await db.matrixVictoryPoses.toArray();
          const progress =
            ((acquiredCommonVictoryPoses.length +
              acquiredMatrixVictoryPoses.filter((pose) => pose.isForged)
                .length) /
              totalItems) *
            100;
          const partialProgress =
            (acquiredMatrixVictoryPoses.filter((pose) => !pose.isForged)
              .length /
              totalItems) *
            100;
          return {
            progress: progress,
            partialProgress: partialProgress,
            acquiredItems:
              acquiredCommonVictoryPoses.length +
              acquiredMatrixVictoryPoses.length,
            totalItems: totalItems,
          };
        }
        case 'cosmetics': {
          const acquiredCosmetics = await db.cosmeticMatrixItems.toArray();
          return {
            progress:
              (acquiredCosmetics.filter((item) => item.isForged).length /
                totalItems) *
              100,
            partialProgress:
              (acquiredCosmetics.filter((item) => !item.isForged).length /
                totalItems) *
              100,
          };
        }
        case 'bosco': {
          const acquiredBoscoFrameworks = await db.boscoFrameworks.count();
          const acquiredBoscoPaintjobs = await db.boscoPaintjobs.count();
          return {
            progress:
              ((acquiredBoscoFrameworks + acquiredBoscoPaintjobs) /
                totalItems) *
              100,
            partialProgress: null,
            acquiredItems: acquiredBoscoFrameworks + acquiredBoscoPaintjobs,
            totalItems: totalItems,
          };
        }
        case 'matrixCore': {
          const [
            numForged,
            numUnforged,
          ] = await getAmountAcquiredMatrixCoreItems(db);
          return {
            progress: (numForged / totalItems) * 100,
            partialProgress: (numUnforged / totalItems) * 100,
            acquiredItems: numForged + numUnforged,
            totalItems: totalItems,
          };
        }
        case 'cargoCrate': {
          const numAcquired = await getAmountAcquiredCargoCrateItems(db);
          return {
            progress: (numAcquired / totalItems) * 100,
            partialProgress: null,
            acquiredItems: numAcquired,
            totalItems: totalItems,
          };
        }
        case 'lostPack': {
          const numAcquired = await getAmountAcquiredLostPackItems(db);
          return {
            progress: (numAcquired / totalItems) * 100,
            partialProgress: null,
            acquiredItems: numAcquired,
            totalItems: totalItems,
          };
        }
      }
    },
    [currentTab],
    {
      progress: 0,
      partialProgress: null,
      acquiredItems: 0,
      totalItems: 0,
    }
  ) as { progress: number; partialProgress: number, acquiredItems: number, totalItems: number };

  useEffect(() => {
    gtag('event', `progress`, {
      event_category: 'tab_progress',
      event_label: currentTab,
      value: Math.floor(p.progress),
    });
  }, [p.progress, currentTab]);

  return {
    progress: Math.floor(p.progress),
    partialProgress:
      p.partialProgress === null ? null : Math.round(p.partialProgress),
    acquiredItems: p.acquiredItems,
    totalItems: p.totalItems,
  };
}
