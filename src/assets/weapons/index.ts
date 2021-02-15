const weapons = <M extends { [k: string]: Promise<typeof import("*.png")> }>(
  things: M
) => things;

export default weapons({
  flamethrower: import("./driller/images/FlameThrower.png"),
  cryoCannon: import("./driller/images/CryoCannon.png"),
  subata: import("./driller/images/Subata120.png"),
  epc: import("./driller/images/ExperimentalPlasmaCharger.png"),
  warthogShotgun: import("./engineer/images/WarthogShotgun.png"),
  stubbySMG: import("./engineer/images/StubbyVoltaicSMG.png"),
  grenadeLauncher: import("./engineer/images/DeepcoreGrenadeLauncher.png"),
  breachCutter: import("./engineer/images/BreachCutter.png"),
  minigun: import("./gunner/images/LeadStormMinigun.png"),
  autocannon: import("./gunner/images/ThunderheadAutoCannon.png"),
  revolver: import("./gunner/images/BulldogRevolver.png"),
  burstFireGun: import("./gunner/images/BurstFireGun.png"),
  assaultRifle: import("./scout/images/DeepcoreAssaultRifle.png"),
  m1000: import("./scout/images/M1000SniperRifle.png"),
  boomstick: import("./scout/images/SawedOffShotgun.png"),
  zhukovs: import("./scout/images/ZhukovMachinePistols.png")
});
