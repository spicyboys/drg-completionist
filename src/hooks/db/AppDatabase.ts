import Dexie, { Table } from "dexie";

export type OverclockEntry = {
  weapon: Queries.MinersJson["name"];
  name: Queries.WeaponsJsonOverclocks["name"];
  isForged: boolean;
};

export type ArmorPaintjobEntry = {
  miner: Queries.MinersJson["name"];
  name: Queries.MinersJsonArmorPaintJobs["name"];
};

export class AppDatabase extends Dexie {
  overclocks!: Table<OverclockEntry, number>;
  armorPaintjobs!: Dexie.Table<ArmorPaintjobEntry, number>;

  constructor() {
    super("drg-completionist");
    this.version(2).stores({
      overclocks: "[weapon+name], weapon",
      armorPaintjobs: "[miner+name], miner",
    });
  }

  /** Async call to clear all current IndexedDB tables completely. */
  clearAll = () => Promise.all(this.tables.map((t) => t.clear()));
}
