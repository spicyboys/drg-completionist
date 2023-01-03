import type { Miner } from 'data/miner';
import type { MinerWeapon } from 'data/weapons';
import type { Overclock } from 'types/overclock';
import CryoCannonOverclocks from './weapons/cryocannon';
import EPCOverclocks from './weapons/epc';
import FlamethrowerOverclocks from './weapons/flamethrower';
import SludgePumpOverclocks from './weapons/sludgepump';
import SubataOverclocks from './weapons/subata';

const DrillerOverclocks: Record<MinerWeapon<Miner.Driller>, Overclock[]> = {
  'CRSPR Flamethrower': FlamethrowerOverclocks,
  'Cryo Cannon': CryoCannonOverclocks,
  'Subata 120': SubataOverclocks,
  'Experimental Plasma Charger': EPCOverclocks,
  'Corrosive Sludge Pump': SludgePumpOverclocks,
};

export default DrillerOverclocks;
