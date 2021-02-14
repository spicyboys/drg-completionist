import Miner from "types/miner";

export const MinerWeapons = {
  [Miner.Driller]: [
    "CRISPR Flamethrower",
    "Cryo Cannon",
    "Subata 120",
    "Experimental Plasma Charger",
  ],
  [Miner.Engineer]: [
    '"Warthog" Auto 210',
    '"Stubby" Voltaic SMG',
    "Deepcore 40mm PGL",
    "Breach Cutter",
  ],
  [Miner.Gunner]: [
    '"Lead Storm" Powered Minigun',
    '"Thunderhead" Heavy Autocannon',
    '"Bulldog" Heavy Revolver',
    "BRT7 Burst Fire Gun",
  ],
  [Miner.Scout]: [
    "Deepcore GK2",
    "M1000 Classic",
    "Jury-Rigged Boomstick",
    "Zhukov NUK17",
  ],
} as const;

export type MinerWeapon<T extends Miner> = typeof MinerWeapons[T][number];
