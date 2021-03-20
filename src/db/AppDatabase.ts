import { Dexie } from 'dexie';
import { ArmorPaintjobNames } from 'data/armor';
import { Framework } from 'data/frameworks';
import {
  PickaxeSets,
  PickaxeParts,
  PickaxeUniquePartNames,
} from 'data/pickaxes';
import { Miner, MinerWithAllClass } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

export class AppDatabase extends Dexie {
  overclocks: Dexie.Table<OverclockEntry, number>;
  frameworks: Dexie.Table<FrameworkEntry, number>;
  pickaxes: Dexie.Table<PickaxeEntry, number>;
  pickaxeUniques: Dexie.Table<PickaxeUniquePartEntry, number>;
  armorPaintjobs: Dexie.Table<ArmorPaintjobEntry, number>;

  constructor() {
    super('DRG-Completionist');
    this.version(3).stores({
      overclocks: '[weapon+name], weapon',
      frameworks: '[weapon+name], weapon',
      pickaxes: '[part+name], name',
      pickaxeUniques: 'name',
      armorPaintjobs: '[miner+name], name',
    });

    this.overclocks = this.table('overclocks');
    this.frameworks = this.table('frameworks');
    this.pickaxes = this.table('pickaxes');
    this.pickaxeUniques = this.table('pickaxeUniques');
    this.armorPaintjobs = this.table('armorPaintjobs');
  }

  /** Async call to clear all current IndexedDB tables completely. */
  clearAll = () => Promise.all(this.tables.map((t) => t.clear()));
}

export type OverclockEntry = {
  weapon: MinerWeapon<Miner>;
  name: string;
  isForged: boolean;
};

export type FrameworkEntry = { weapon: MinerWeapon<Miner>; name: Framework };

export type PickaxeEntry = {
  name: typeof PickaxeSets[number];
  part: PickaxeParts;
};

export type PickaxeUniquePartEntry = {
  name: typeof PickaxeUniquePartNames[number];
};

export type ArmorPaintjobEntry = {
  miner: MinerWithAllClass;
  name: typeof ArmorPaintjobNames[MinerWithAllClass][number];
};
