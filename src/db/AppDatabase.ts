import { Dexie } from 'dexie';
import { Framework } from 'data/frameworks';
import {
  PickaxeSets,
  PickaxeParts,
  PickaxeUniquePartNames,
} from 'data/pickaxes';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

export class AppDatabase extends Dexie {
  overclocks: Dexie.Table<OverclockEntry, number>;
  frameworks: Dexie.Table<FrameworkEntry, number>;
  pickaxes: Dexie.Table<PickaxeEntry, number>;
  pickaxeUniqueParts: Dexie.Table<PickaxeUniquePartEntry, number>;

  constructor() {
    super('DRG-Completionist');
    this.version(2).stores({
      overclocks: '[weapon+name], weapon',
      frameworks: '[weapon+name], weapon',
      pickaxes: '[part+name], name',
      pickaxeUniques: 'name',
    });

    this.overclocks = this.table('overclocks');
    this.frameworks = this.table('frameworks');
    this.pickaxes = this.table('pickaxes');
    this.pickaxeUniqueParts = this.table('pickaxeUniques');
  }
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
