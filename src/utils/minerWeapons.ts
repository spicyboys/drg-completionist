import Miner from "types/miner";
// import weapons from "assets/weapons";

import flamethrower from "assets/weapons/driller/FlameThrower.png";
import cryoCannon from "assets/weapons/driller/CryoCannon.png";
import subata from "assets/weapons/driller/Subata120.png";
import epc from "assets/weapons/driller/ExperimentalPlasmaCharger.png";
import warthogShotgun from "assets/weapons/engineer/WarthogShotgun.png";
import stubbySMG from "assets/weapons/engineer/StubbyVoltaicSMG.png";
import grenadeLauncher from "assets/weapons/engineer/DeepcoreGrenadeLauncher.png";
import breachCutter from "assets/weapons/engineer/BreachCutter.png";
import minigun from "assets/weapons/gunner/LeadStormMinigun.png";
import autocannon from "assets/weapons/gunner/ThunderheadAutoCannon.png";
import revolver from "assets/weapons/gunner/BulldogRevolver.png";
import burstFireGun from "assets/weapons/gunner/BurstFireGun.png";
import assaultRifle from "assets/weapons/scout/DeepcoreAssaultRifle.png";
import m1000 from "assets/weapons/scout/M1000SniperRifle.png";
import boomstick from "assets/weapons/scout/SawedOffShotgun.png";
import zhukovs from "assets/weapons/scout/ZhukovMachinePistols.png";

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

export const MinerWeaponImages: Record<MinerWeapon<Miner>, string> = {
  "CRISPR Flamethrower": flamethrower,
  "Cryo Cannon": cryoCannon,
  "Subata 120": subata,
  "Experimental Plasma Charger": epc,
  '"Warthog" Auto 210': warthogShotgun,
  '"Stubby" Voltaic SMG': stubbySMG,
  "Deepcore 40mm PGL": grenadeLauncher,
  "Breach Cutter": breachCutter,
  '"Lead Storm" Powered Minigun': minigun,
  '"Thunderhead" Heavy Autocannon': autocannon,
  '"Bulldog" Heavy Revolver': revolver,
  "BRT7 Burst Fire Gun": burstFireGun,
  "Deepcore GK2": assaultRifle,
  "M1000 Classic": m1000,
  "Jury-Rigged Boomstick": boomstick,
  "Zhukov NUK17": zhukovs,
};

// export const MinerWeaponImages: Record<MinerWeapon<Miner>, Promise<typeof import("*.png")>> = {
//   "CRISPR Flamethrower": weapons.flamethrower,
//   "Cryo Cannon": weapons.cryoCannon,
//   "Subata 120": weapons.subata,
//   "Experimental Plasma Charger": weapons.epc,
//   '"Warthog" Auto 210': weapons.warthogShotgun,
//   '"Stubby" Voltaic SMG': weapons.stubbySMG,
//   "Deepcore 40mm PGL": weapons.grenadeLauncher,
//   "Breach Cutter": weapons.breachCutter,
//   '"Lead Storm" Powered Minigun': weapons.minigun,
//   '"Thunderhead" Heavy Autocannon': weapons.autocannon,
//   '"Bulldog" Heavy Revolver': weapons.revolver,
//   "BRT7 Burst Fire Gun": weapons.burstFireGun,
//   "Deepcore GK2": weapons.assaultRifle,
//   "M1000 Classic": weapons.m1000,
//   "Jury-Rigged Boomstick": weapons.boomstick,
//   "Zhukov NUK17": weapons.zhukovs,
// };
