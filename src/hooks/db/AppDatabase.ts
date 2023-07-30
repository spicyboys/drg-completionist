import Dexie, { type Table } from "dexie";

export type OverclockEntry = {
  weapon: Queries.WeaponsJsonOverclocks["name"];
  name: Queries.MinersJson["name"];
  isForged: boolean;
};

export type ArmorPaintJobEntry = {
  miner: Queries.MinersJson["name"];
  name: Queries.MinersJsonArmorPaintJobs["name"];
};

export type WeaponPaintJobEntry = {
  miner: Queries.MinersJson["name"];
  name: Queries.WeaponPaintJobsJson["name"];
  isForged: boolean;
};

export type FrameworkEntry = {
  name: Queries.WeaponFrameworksJson["name"];
  weapon: Queries.WeaponsJsonOverclocks["name"];
};

export class AppDatabase extends Dexie {
  overclocks!: Table<OverclockEntry, number>;
  armorPaintjobs!: Dexie.Table<ArmorPaintJobEntry, number>;
  weaponPaintjobs!: Dexie.Table<WeaponPaintJobEntry, number>;
  frameworks!: Dexie.Table<FrameworkEntry, number>;

  constructor() {
    super("drg-completionist");
    this.version(4).stores({
      overclocks: "[weapon+name], weapon",
      armorPaintjobs: "[miner+name], miner",
      weaponPaintjobs: "[miner+name], miner",
      frameworks: "[weapon+name], weapon",
    });
  }

  /** Async call to clear all current IndexedDB tables completely. */
  clearAll = () => Promise.all(this.tables.map((t) => t.clear()));
}
