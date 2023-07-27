import Dexie, { Table } from "dexie";

export type OverclockEntry = {
  weapon: Queries.MinersJson["name"];
  name: Queries.WeaponsJsonOverclocks["name"];
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

export class AppDatabase extends Dexie {
  overclocks!: Table<OverclockEntry, number>;
  armorPaintjobs!: Dexie.Table<ArmorPaintJobEntry, number>;
  weaponPaintjobs!: Dexie.Table<WeaponPaintJobEntry, number>;

  constructor() {
    super("drg-completionist");
    this.version(3).stores({
      overclocks: "[weapon+name], weapon",
      armorPaintjobs: "[miner+name], miner",
      weaponPaintjobs: "[miner+name], miner",
    });
  }

  /** Async call to clear all current IndexedDB tables completely. */
  clearAll = () => Promise.all(this.tables.map((t) => t.clear()));
}
