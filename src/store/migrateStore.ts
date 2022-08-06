import {
  PropSchema,
  createSimpleSchema,
  custom,
  deserialize,
  map as serializrMap,
} from 'serializr';
import { Framework } from 'data/frameworks';
import { Miner } from 'data/miner';
import type { MinerWeapon } from 'data/weapons';
import type { AppDatabase } from 'db/AppDatabase';

type State = Readonly<{
  unforgedOverclocks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<string>>;
  overclocks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<string>>;
  frameworks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<Framework>>;
}>;

const STORAGE_KEY = 'data';

/**
 * Sets are serialized as an array, and deserialized back from the array
 */
function set(): PropSchema {
  return custom(
    (v) => Array.from(v),
    (v) => new Set(v)
  );
}

/**
 * Serializr converts javascript maps to objects for serializtion but does
 * not do the inverse transform. This is a thin wrapper around their serializer
 * that does that.
 */
function map(valueSerializer: PropSchema) {
  return serializrMap(valueSerializer, {
    beforeDeserialize: (callback, v) => {
      if (v === undefined) {
        callback(null, {});
      } else {
        callback(null, v);
      }
    },
    afterDeserialize: (callback, _, n) => {
      callback(null, new Map(Object.entries(n)));
    },
  });
}

const schema = createSimpleSchema<State>({
  overclocks: map(set()),
  frameworks: map(set()),
  unforgedOverclocks: map(set()),
});

/**
 * If we have an entry in local storage, we need to migrate it to IndexedDB.
 * This does that migration and then removes the entry from local storage.
 */
export default function migrateStore(db: AppDatabase) {
  const item = window.localStorage.getItem(STORAGE_KEY);
  if (item === null) {
    return;
  }
  const oldStore = deserialize(schema, JSON.parse(item));
  oldStore.frameworks.forEach((frameworks, weapon) => {
    const f = Array.from(frameworks.values()).map((f) => ({
      name: f,
      weapon: weapon,
    }));
    db.frameworks.bulkAdd(f);
  });
  oldStore.overclocks.forEach((overclocks, weapon) => {
    const o = Array.from(overclocks.values()).map((o) => ({
      name: o,
      weapon: weapon,
      isForged: true,
    }));
    db.overclocks.bulkAdd(o);
  });
  oldStore.unforgedOverclocks.forEach((overclocks, weapon) => {
    const o = Array.from(overclocks.values()).map((o) => ({
      name: o,
      weapon: weapon,
      isForged: false,
    }));
    db.overclocks.bulkAdd(o);
  });
  window.localStorage.removeItem(STORAGE_KEY);
}
