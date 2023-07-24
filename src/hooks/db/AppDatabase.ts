import Dexie, { Table } from "dexie";

export type OverclockEntry = {
  weapon: Queries.MinersJson["name"];
  name: Queries.WeaponsJsonOverclocks["name"];
  isForged: boolean;
};

export class AppDatabase extends Dexie {
  overclocks!: Table<OverclockEntry, number>;

  constructor() {
    super("drg-completionist");
    this.version(1).stores({
      overclocks: "[weapon+name], weapon",
    });
  }

  /** Async call to clear all current IndexedDB tables completely. */
  clearAll = () => Promise.all(this.tables.map((t) => t.clear()));
}
