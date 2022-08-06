import { Miner } from 'data/miner';
import type { MinerWeapon } from 'data/weapons';
import type { Overclock } from 'types/overclock';
import DrillerOverclocks from './driller';
import EngineerOverclocks from './engineer';
import GunnerOverclocks from './gunner';
import ScoutOverclocks from './scout';

type Overclocks = {
  [K in Miner]: Record<MinerWeapon<K>, Overclock[]>;
};

export const Overclocks: Overclocks = {
  [Miner.Driller]: DrillerOverclocks,
  [Miner.Engineer]: EngineerOverclocks,
  [Miner.Gunner]: GunnerOverclocks,
  [Miner.Scout]: ScoutOverclocks,
};
