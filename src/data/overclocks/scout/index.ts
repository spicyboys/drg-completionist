import type { Miner } from 'data/miner';
import type { MinerWeapon } from 'data/weapons';
import type { Overclock } from 'types/overclock';
import AssaultRifleOverclocks from './weapons/assaultrifle';
import BoomstickOverclocks from './weapons/boomstick';
import CrossbowOverclocks from './weapons/crossbow';
import M1000Overclocks from './weapons/m1000';
import PlasmaCarbineOverclocks from './weapons/plasmacarbine';
import ZhukovOverclocks from './weapons/zhukov';

const ScoutOverclocks: Record<MinerWeapon<Miner.Scout>, Overclock[]> = {
  'Deepcore GK2': AssaultRifleOverclocks,
  'M1000 Classic': M1000Overclocks,
  'Jury-Rigged Boomstick': BoomstickOverclocks,
  'Zhukov NUK17': ZhukovOverclocks,
  'DRAK-25 Plasma Carbine': PlasmaCarbineOverclocks,
  'Nishanka Boltshark X-80': CrossbowOverclocks,
};

export default ScoutOverclocks;
