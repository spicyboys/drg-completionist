import { Framework } from 'data/frameworks';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

export type State = Readonly<{
  unforgedOverclocks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<string>>;
  overclocks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<string>>;
  frameworks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<Framework>>;
}>;

export const INITIAL_STATE: State = {
  unforgedOverclocks: new Map(),
  overclocks: new Map(),
  frameworks: new Map(),
};
