import { Dexie } from 'dexie';
import { ArmorPaintjobNames, CommonArmorPaintjobNames } from 'data/armor';
import { CosmeticMatrixItemNames } from 'data/cosmetics';
import { FrameworkNames } from 'data/frameworks';
import { Miner } from 'data/miner';
import {
  PickaxeSets,
  PickaxeParts,
  PickaxeUniquePartNames,
} from 'data/pickaxes';
import {
  CommonVictoryPoseNames,
  MatrixVictoryPoseNames,
} from 'data/victoryPoses';
import {
  CommonWeaponPaintjobNames,
  MatrixWeaponPaintjobNames,
  UniqueWeaponPaintjobNames,
} from 'data/weaponPaintjobs';
import { MinerWeapon } from 'data/weapons';

export class AppDatabase extends Dexie {
  overclocks: Dexie.Table<OverclockEntry, number>;
  frameworks: Dexie.Table<FrameworkEntry, number>;
  pickaxes: Dexie.Table<PickaxeEntry, number>;
  pickaxeUniques: Dexie.Table<PickaxeUniquePartEntry, number>;
  armorPaintjobs: Dexie.Table<ArmorPaintjobEntry, number>;
  commonArmorPaintjobs: Dexie.Table<CommonArmorPaintjobEntry, number>;
  matrixWeaponPaintjobs: Dexie.Table<MatrixWeaponPaintjobEntry, number>;
  uniqueWeaponPaintjobs: Dexie.Table<UniqueWeaponPaintjobEntry, number>;
  commonWeaponPaintjobs: Dexie.Table<CommonWeaponPaintjobEntry, number>;
  commonVictoryPoses: Dexie.Table<CommonVictoryPoseEntry, number>;
  matrixVictoryPoses: Dexie.Table<MatrixVictoryPoseEntry, number>;
  cosmeticMatrixItems: Dexie.Table<CosmeticMatrixItemEntry, number>;

  constructor() {
    super('DRG-Completionist');
    this.version(7).stores({
      overclocks: '[weapon+name], weapon',

      frameworks: '[weapon+name], weapon',

      pickaxes: '[part+name], name',
      pickaxeUniques: 'name',

      armorPaintjobs: '[miner+name], miner',
      commonArmorPaintjobs: 'name',

      uniqueWeaponPaintjobs: '[weapon+name], weapon',
      matrixWeaponPaintjobs: '[miner+name], miner',
      commonWeaponPaintjobs: '[miner+name], miner',

      commonVictoryPoses: '[miner+name], miner',
      matrixVictoryPoses: '[miner+name], miner',

      cosmeticMatrixItems: '[miner+name], miner',
    });

    this.overclocks = this.table('overclocks');

    this.frameworks = this.table('frameworks');

    this.pickaxes = this.table('pickaxes');
    this.pickaxeUniques = this.table('pickaxeUniques');

    this.armorPaintjobs = this.table('armorPaintjobs');
    this.commonArmorPaintjobs = this.table('commonArmorPaintjobs');

    this.matrixWeaponPaintjobs = this.table('matrixWeaponPaintjobs');
    this.uniqueWeaponPaintjobs = this.table('uniqueWeaponPaintjobs');
    this.commonWeaponPaintjobs = this.table('commonWeaponPaintjobs');

    this.commonVictoryPoses = this.table('commonVictoryPoses');
    this.matrixVictoryPoses = this.table('matrixVictoryPoses');

    this.cosmeticMatrixItems = this.table('cosmeticMatrixItems');
  }

  /** Async call to clear all current IndexedDB tables completely. */
  clearAll = () => Promise.all(this.tables.map((t) => t.clear()));
}

export type OverclockEntry = {
  weapon: MinerWeapon<Miner>;
  name: string;
  isForged: boolean;
};

export type FrameworkEntry = {
  name: typeof FrameworkNames[number];
  weapon: MinerWeapon<Miner>;
};

export type PickaxeEntry = {
  name: typeof PickaxeSets[number];
  part: PickaxeParts;
};

export type PickaxeUniquePartEntry = {
  name: typeof PickaxeUniquePartNames[number];
};

export type ArmorPaintjobEntry = {
  miner: Miner;
  name: typeof ArmorPaintjobNames[Miner][number];
};

export type CommonArmorPaintjobEntry = {
  name: typeof CommonArmorPaintjobNames[number];
};

export type MatrixWeaponPaintjobEntry = {
  miner: Miner;
  name: typeof MatrixWeaponPaintjobNames[number];
  isForged: boolean;
};

export type UniqueWeaponPaintjobEntry = {
  weapon: MinerWeapon<Miner>;
  name: typeof UniqueWeaponPaintjobNames[number];
};

export type CommonWeaponPaintjobEntry = {
  miner: Miner;
  name: typeof CommonWeaponPaintjobNames[number];
};

export type CommonVictoryPoseEntry = {
  miner: Miner;
  name: typeof CommonVictoryPoseNames[number];
};

export type MatrixVictoryPoseEntry = {
  miner: Miner;
  name: typeof MatrixVictoryPoseNames[number];
  isForged: boolean;
};

export type CosmeticMatrixItemEntry = {
  miner: Miner;
  name: typeof CosmeticMatrixItemNames[number];
  isForged: boolean;
};
