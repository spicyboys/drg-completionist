const weapons = <M extends { [k: string]: Promise<typeof import("*.png")> }>(
  things: M
) => things;

export default weapons({
  flamethrower: import("./driller/FlameThrower.png"),
  cryoCannon: import("./driller/CryoCannon.png"),
  subata: import("./driller/Subata120.png"),
  epc: import("./driller/ExperimentalPlasmaCharger.png"),
  warthogShotgun: import("./engineer/WarthogShotgun.png"),
  stubbySMG: import("./engineer/StubbyVoltaicSMG.png"),
  grenadeLauncher: import("./engineer/DeepcoreGrenadeLauncher.png"),
  breachCutter: import("./engineer/BreachCutter.png"),
  minigun: import("./gunner/LeadStormMinigun.png"),
  autocannon: import("./gunner/ThunderheadAutoCannon.png"),
  revolver: import("./gunner/BulldogRevolver.png"),
  burstFireGun: import("./gunner/BurstFireGun.png"),
  assaultRifle: import("./scout/DeepcoreAssaultRifle.png"),
  m1000: import("./scout/M1000SniperRifle.png"),
  boomstick: import("./scout/SawedOffShotgun.png"),
  zhukovs: import("./scout/ZhukovMachinePistols.png")
});
