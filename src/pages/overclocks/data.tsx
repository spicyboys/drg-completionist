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
  area: import('assets/overclocks/Icon_Upgrade_Area.png'),
  aim: import('assets/overclocks/Icon_Upgrade_Aim.png'),
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
