import { Dexie } from 'dexie';
import { Framework } from 'data/frameworks';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

export class AppDatabase extends Dexie {
  overclocks: Dexie.Table<
    { weapon: MinerWeapon<Miner>; name: string; isForged: boolean },
    number
  >;
  frameworks: Dexie.Table<
    { weapon: MinerWeapon<Miner>; name: Framework },
    number
  >;

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
