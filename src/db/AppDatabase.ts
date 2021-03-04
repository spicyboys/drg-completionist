import { Dexie } from 'dexie';
import { Framework } from 'data/frameworks';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

export class AppDatabase extends Dexie {
  overclocks: Dexie.Table<OverclockEntry, number>;
  frameworks: Dexie.Table<FrameworkEntry, number>;

  constructor() {
    super('DRG-Completionist');
    this.version(1).stores({
      overclocks: '[weapon+name], weapon',
      frameworks: '[weapon+name], weapon',
    });

    this.overclocks = this.table('overclocks');
    this.frameworks = this.table('frameworks');
  }
}

export type OverclockEntry = {
  weapon: MinerWeapon<Miner>;
  name: string;
  isForged: boolean;
};

export type FrameworkEntry = { weapon: MinerWeapon<Miner>; name: Framework };
