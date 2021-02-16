import { Framework } from "pages/frameworks/FrameworkData";
import { Miner } from "utils/miner";
import { MinerWeapon } from "utils/weapons";

export type State = Readonly<{
  overclocks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<string>>;
  frameworks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<Framework>>;
}>;

export const INITIAL_STATE: State = {
  overclocks: new Map(),
  frameworks: new Map(),
};
