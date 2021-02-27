import { Framework } from 'data/frameworks';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

export type State = Readonly<{
  acquiredOverclocks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<string>>;
  forgedOverclocks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<string>>;
  frameworks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<Framework>>;
}>;

export const INITIAL_STATE: State = {
  acquiredOverclocks: new Map(),
  forgedOverclocks: new Map(),
  frameworks: new Map(),
};
