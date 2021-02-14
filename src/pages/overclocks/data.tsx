type Driller = {
  class: 'Driller',
  weapon: 'Flamethrower' | 'Cryo Cannon' | 'Pistol' | 'EPC'
};

type Engineer = {
  class: 'Engineer',
  weapon: 'Shotgun' | 'SMG' | 'Grenade Launcher' | 'Breach Cutter'
};

type Gunner = {
  class: 'Gunner',
  weapon: 'Minigun' | 'Autocannon' | 'Revolver' | 'Burst Rifle'
};

type Scout = {
  class: 'Scout',
  weapon: 'Assualt Rifle' | 'M1000' | 'Boomstick' | 'Zhukovs'
};

const Icons: { [k: string]: Promise<typeof import('*.png')> } = {
  aim: import('assets/overclocks/icons/aim.png'),
  ammo: import('assets/overclocks/icons/ammo.png'),
  area: import('assets/overclocks/icons/area.png'),
  areaDamage: import('assets/overclocks/icons/areaDamage.png'),
  chance: import('assets/overclocks/icons/chance.png'),
  chargeUp: import('assets/overclocks/icons/chargeUp.png'),
  clipSize: import('assets/overclocks/icons/clipSize.png'),
  cold: import('assets/overclocks/icons/cold.png'),
  cooldown: import('assets/overclocks/icons/cooldown.png'),
  damage: import('assets/overclocks/icons/damage.png'),
  distance: import('assets/overclocks/icons/distance.png'),
  duration: import('assets/overclocks/icons/duration.png'),
  durationHourglass: import('assets/overclocks/icons/durationHourglass.png'),
  electricity: import('assets/overclocks/icons/electricity.png'),
  explosion: import('assets/overclocks/icons/explosion.png'),
  explosionJump: import('assets/overclocks/icons/explosionJump.png'),
  fireRate: import('assets/overclocks/icons/fireRate.png'),
  fuel: import('assets/overclocks/icons/fuel.png'),
  heat: import('assets/overclocks/icons/heat.png'),
  movementSpeed: import('assets/overclocks/icons/movementSpeed.png'),
  neuro: import('assets/overclocks/icons/neuro.png'),
  projectileSpeed: import('assets/overclocks/icons/projectileSpeed.png'),
  ricochet: import('assets/overclocks/icons/ricochet.png'),
  shotgunJump: import('assets/overclocks/icons/shotgunJump.png'),
  shotgunPellet: import('assets/overclocks/icons/shotgunPellet.png'),
  slowdown: import('assets/overclocks/icons/slowdown.png'),
  smallBullets: import('assets/overclocks/icons/smallBullets.png'),
  special: import('assets/overclocks/icons/special.png'),
  specialMagazine: import('assets/overclocks/icons/specialMagazine.png'),
  speed: import('assets/overclocks/icons/speed.png'),
  stun: import('assets/overclocks/icons/stun.png'),
} as const;

export type Overclock = {
  name: string,
  type: 'Clean' | 'Balanced' | 'Unstable',
  icon: keyof typeof Icons,
  price?: string[],
  effects?: string[],
  description?: string,
} & (Driller | Engineer | Gunner | Scout);

export const overclocks: Overclock[] = [
  {
    name: 'Lighter Tanks',
    class: 'Driller',
    icon: 'area',
    weapon: 'Flamethrower',
    type: 'Clean',
  },

]
