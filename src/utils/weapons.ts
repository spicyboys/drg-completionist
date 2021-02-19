import { outlines } from 'assets/weapons';
import { Miner } from 'utils/miner';

export const MinerWeapons = {
  [Miner.Driller]: [
    'CRSPR Flamethrower',
    'Cryo Cannon',
    'Subata 120',
    'Experimental Plasma Charger',
  ],
  [Miner.Engineer]: [
    '"Warthog" Auto 210',
    '"Stubby" Voltaic SMG',
    'Deepcore 40mm PGL',
    'Breach Cutter',
  ],
  [Miner.Gunner]: [
    '"Lead Storm" Powered Minigun',
    '"Thunderhead" Heavy Autocannon',
    '"Bulldog" Heavy Revolver',
    'BRT7 Burst Fire Gun',
  ],
  [Miner.Scout]: [
    'Deepcore GK2',
    'M1000 Classic',
    'Jury-Rigged Boomstick',
    'Zhukov NUK17',
  ],
} as const;

export type MinerWeapon<T extends Miner> = typeof MinerWeapons[T][number];

export const WeaponOutlines: Record<MinerWeapon<Miner>, string> = {
  'CRSPR Flamethrower': outlines.driller.Flamethrower,
  'Cryo Cannon': outlines.driller.CryoCannon,
  'Subata 120': outlines.driller.Subata,
  'Experimental Plasma Charger': outlines.driller.Epc,
  '"Warthog" Auto 210': outlines.engineer.Shotgun,
  '"Stubby" Voltaic SMG': outlines.engineer.StubbySMG,
  'Deepcore 40mm PGL': outlines.engineer.GrenadeLauncher,
  'Breach Cutter': outlines.engineer.BreachCutter,
  '"Lead Storm" Powered Minigun': outlines.gunner.Minigun,
  '"Thunderhead" Heavy Autocannon': outlines.gunner.Autocannon,
  '"Bulldog" Heavy Revolver': outlines.gunner.Revolver,
  'BRT7 Burst Fire Gun': outlines.gunner.BurstFireGun,
  'Deepcore GK2': outlines.scout.AssaultRifle,
  'M1000 Classic': outlines.scout.M1000,
  'Jury-Rigged Boomstick': outlines.scout.Boomstick,
  'Zhukov NUK17': outlines.scout.Zhukov,
};
