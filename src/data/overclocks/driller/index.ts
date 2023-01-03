import type { Miner } from 'data/miner';
import type { MinerWeapon } from 'data/weapons';
import type { Overclock } from 'types/overclock';
import CryoCannonOverclocks from './weapons/cryocannon';
import EPCOverclocks from './weapons/epc';
import FlamethrowerOverclocks from './weapons/flamethrower';
import SludgePumpOverclocks from './weapons/sludgepump';
import SubataOverclocks from './weapons/subata';
import WaveCookerOverclocks from './weapons/wavecooker';

const DrillerOverclocks: Record<MinerWeapon<Miner.Driller>, Overclock[]> = {
  'CRSPR Flamethrower': FlamethrowerOverclocks,
  'Cryo Cannon': CryoCannonOverclocks,
  'Corrosive Sludge Pump': SludgePumpOverclocks,
  'Subata 120': SubataOverclocks,
  'Experimental Plasma Charger': EPCOverclocks,
  'Colette Wave Cooker': WaveCookerOverclocks,
};

export default DrillerOverclocks;
