import { MinerWeapon } from "utils/weapons";
import { Miner } from "utils/miner";

import flamethrower from "assets/weapons/driller/images/FlameThrower.png";
import cryoCannon from "assets/weapons/driller/images/CryoCannon.png";
import subata from "assets/weapons/driller/images/Subata120.png";
import epc from "assets/weapons/driller/images/ExperimentalPlasmaCharger.png";
import warthogShotgun from "assets/weapons/engineer/images/WarthogShotgun.png";
import stubbySMG from "assets/weapons/engineer/images/StubbyVoltaicSMG.png";
import grenadeLauncher from "assets/weapons/engineer/images/DeepcoreGrenadeLauncher.png";
import breachCutter from "assets/weapons/engineer/images/BreachCutter.png";
import minigun from "assets/weapons/gunner/images/LeadStormMinigun.png";
import autocannon from "assets/weapons/gunner/images/ThunderheadAutoCannon.png";
import revolver from "assets/weapons/gunner/images/BulldogRevolver.png";
import burstFireGun from "assets/weapons/gunner/images/BurstFireGun.png";
import assaultRifle from "assets/weapons/scout/images/DeepcoreAssaultRifle.png";
import m1000 from "assets/weapons/scout/images/M1000SniperRifle.png";
import boomstick from "assets/weapons/scout/images/SawedOffShotgun.png";
import zhukovs from "assets/weapons/scout/images/ZhukovMachinePistols.png";

import flamethrowerOutline from "assets/weapons/driller/outlines/Flamethrower.png";
import cryoCannonOutline from "assets/weapons/driller/outlines/CryoCannon.png";
import subataOutline from "assets/weapons/driller/outlines/Subata.png";
import epcOutline from "assets/weapons/driller/outlines/epc.png";
import warthogShotgunOutline from "assets/weapons/engineer/outlines/Shotgun.png";
import stubbySMGOutline from "assets/weapons/engineer/outlines/StubbySMG.png";
import grenadeLauncherOutline from "assets/weapons/engineer/outlines/GrenadeLauncher.png";
import breachCutterOutline from "assets/weapons/engineer/outlines/BreachCutter.png";
import minigunOutline from "assets/weapons/gunner/outlines/Minigun.png";
import autocannonOutline from "assets/weapons/gunner/outlines/Autocannon.png";
import revolverOutline from "assets/weapons/gunner/outlines/Revolver.png";
import burstFireGunOutline from "assets/weapons/gunner/outlines/BurstFireGun.png";
import assaultRifleOutline from "assets/weapons/scout/outlines/AssaultRifle.png";
import m1000Outline from "assets/weapons/scout/outlines/M1000.png";
import boomstickOutline from "assets/weapons/scout/outlines/Boomstick.png";
import zhukovsOutline from "assets/weapons/scout/outlines/Zhukov.png";

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

export const MinerWeaponOutlines: Record<MinerWeapon<Miner>, string> = {
  "CRISPR Flamethrower": flamethrowerOutline,
  "Cryo Cannon": cryoCannonOutline,
  "Subata 120": subataOutline,
  "Experimental Plasma Charger": epcOutline,
  '"Warthog" Auto 210': warthogShotgunOutline,
  '"Stubby" Voltaic SMG': stubbySMGOutline,
  "Deepcore 40mm PGL": grenadeLauncherOutline,
  "Breach Cutter": breachCutterOutline,
  '"Lead Storm" Powered Minigun': minigunOutline,
  '"Thunderhead" Heavy Autocannon': autocannonOutline,
  '"Bulldog" Heavy Revolver': revolverOutline,
  "BRT7 Burst Fire Gun": burstFireGunOutline,
  "Deepcore GK2": assaultRifleOutline,
  "M1000 Classic": m1000Outline,
  "Jury-Rigged Boomstick": boomstickOutline,
  "Zhukov NUK17": zhukovsOutline,
};

