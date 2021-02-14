import frames from './frames';
import icons from './icons';

type Driller = {
  class: 'Driller';
  weapon: 'Flamethrower' | 'Cryo Cannon' | 'Pistol' | 'EPC';
};

type Engineer = {
  class: 'Engineer';
  weapon: 'Shotgun' | 'SMG' | 'Grenade Launcher' | 'Breach Cutter';
};

type Gunner = {
  class: 'Gunner';
  weapon: 'Minigun' | 'Autocannon' | 'Revolver' | 'Burst Rifle';
};

type Scout = {
  class: 'Scout';
  weapon: 'Assualt Rifle' | 'M1000' | 'Boomstick' | 'Zhukovs';
};

type Price = {
  credits: number,
  bismor?: number,
  croppa?: number,
  enorPearl?: number,
  jadiz?: number,
  magnite?: number,
  umanite?: number,
}

type Effects = {
  buffs: string[],
  nerfs: string[],
};

export type Overclock<T extends (Driller | Engineer | Gunner | Scout)> = {
  name: string;
  type: keyof typeof frames;
  icon: keyof typeof icons;
  price: Price,
  effects: Effects,
  description: string;
} & T;

type Overclocks = {
  driller: Overclock<Driller>[],
  engineer: Overclock<Engineer>[],
  gunner: Overclock<Gunner>[],
  scout: Overclock<Scout>[],
}

export const overclocks: Overclocks = {
  driller: [
    {
      name: '',
      class: 'Driller',
      icon: '',
      weapon: '',
      type: '',
      price: {
        credits: ,
        bismor: ,
        croppa: ,
        enorPearl: ,
        jadiz: ,
        magnite: ,
        umanite: ,
      },
      effects: {
        buffs: [],
        nerfs: []
      },
      description: '',
    },
    {
      name: 'Lighter Tanks',
      class: 'Driller',
      icon: 'ammo',
      weapon: 'Flamethrower',
      type: 'clean',
      price: {
        credits: 7500,
        bismor: 125,
        croppa: 75,
        umanite: 90,
      },
      effects: {
        buffs: ['+75 Max Fuel'],
        nerfs: []
      },
      description: 'Lighter weight gear means more fuel and sandwiches.',
    },
    {
      name: 'Sticky Additive',
      class: 'Driller',
      icon: 'durationHourglass',
      weapon: 'Flamethrower',
      type: 'clean',
      price: {
        credits: 8250,
        bismor: 80,
        jadiz: 130,
        magnite: 100
      },
      effects: {
        buffs: ['+1 Damage', '+1s Sticky Flame Duration'],
        nerfs: []
      },
      description: 'Special additive compound extends the Sticky Flame duration and increases direct damage.',
    },
    {
      name: 'Compact Feed Valves',
      class: 'Driller',
      icon: 'clipSize',
      weapon: 'Flamethrower',
      type: 'balanced',
      price: {
        credits: 7350,
        bismor: 70,
        jadiz: 90,
        umanite: 130,
      },
      effects: {
        buffs: ['+25 Tank Size'],
        nerfs: ['-2m Flame Reach']
      },
      description: 'The smaller mechanism leaves room to increase tank capacity at the cost of operational range.',
    },
    {
      name: 'Fuel Stream Diffuser',
      class: 'Driller',
      icon: 'distance',
      weapon: 'Flamethrower',
      type: 'balanced',
      price: {
        credits: 7100,
        bismor: 100,
        enorPearl: 80,
        jadiz: 125,
      },
      effects: {
        buffs: ['+5m Flame Reach'],
        nerfs: ['-20% Fuel Flow Rate']
      },
      description: 'Increases operation range but decreases the fuel flow rate.',
    },
    {
      name: 'Face Melter',
      class: 'Driller',
      icon: 'damage',
      weapon: 'Flamethrower',
      type: 'unstable',
      price: {
        credits: 7000,
        croppa: 130,
        enorPearl: 70,
        magnite: 90,
      },
      effects: {
        buffs: ['+2 Damage', '+30% Rate of Fire'],
        nerfs: ['-75 Max Fuel', 'x0.5 Movement Speed While Using']
      },
      description: 'This crazy bit of tweaking will give a boost in damage but at the cost of both mobility and fuel.',
    },
    {
      name: 'Sticky Fuel',
      class: 'Driller',
      icon: 'durationHourglass',
      weapon: 'Flamethrower',
      type: 'unstable',
      price: {
        credits: 8800,
        enorPearl: 110,
        jadiz: 140,
        magnite: 75,
      },
      effects: {
        buffs: ['+5 Sticky Flame Damage', '+6s Sticky Flame Duration'],
        nerfs: ['-25 Tank Size', '-75 Max Fuel']
      },
      description: 'Special fuel mixture extends the duration and damage of Sticky Flames but at the cost of tank capacity and total fuel.',
    },
    {
      name: 'Improved Thermal Efficiency',
      class: 'Driller',
      icon: 'clipSize',
      weapon: 'Cryo Cannon',
      type: 'clean',
      price: {
        credits: 8350,
        croppa: 125,
        enorPearl: 70,
        magnite: 110,
      },
      effects: {
        buffs: ['+25 Tank Capacity', 'x0.75 Pressure Drop Rate'],
        nerfs: []
      },
      description: 'Get all you can from your fuel and lose pressure slower from the main chamber.',
    },
    {
      name: 'Perfectly Tuned Cooler',
      class: 'Driller',
      icon: 'cold',
      weapon: 'Cryo Cannon',
      type: 'clean',
      price: {
        credits: 8750,
        bismor: 110,
        magnite: 65,
        umanite: 130,
      },
      effects: {
        buffs: ['+1 Freezing Power', '+10% Flow Rate'],
        nerfs: []
      },
      description: 'Freeze things faster, no strings attached.',
    },
    {
      name: 'Flow Rate Expansion',
      class: 'Driller',
      icon: 'duration',
      weapon: 'Cryo Cannon',
      type: 'balanced',
      price: {
        credits: 8900,
        enorPearl: 70,
        jadiz: 100,
        magnite: 125,
      },
      effects: {
        buffs: ['x2.7 Pressure Gain Rate', '+10% Flow Rate'],
        nerfs: ['x2.25 Pressure Drop Rate']
      },
      description: 'A low volume high pressure chamber paired with a high power pump increase the flow rate and repressurization speed but lower the max duration of sustained flow.',
    },
    {
      name: 'Ice Spear',
      class: 'Driller',
      icon: 'projectileSpeed',
      weapon: 'Cryo Cannon',
      type: 'balanced',
      price: {
        credits: ,
        bismor: ,
        croppa: ,
        enorPearl: ,
        jadiz: ,
        magnite: ,
        umanite: ,
      },
      effects: {
        buffs: [],
        nerfs: []
      },
      description: '',
    },
    {
      name: '',
      class: 'Driller',
      icon: '',
      weapon: 'Cryo Cannon',
      type: '',
      price: {
        credits: ,
        bismor: ,
        croppa: ,
        enorPearl: ,
        jadiz: ,
        magnite: ,
        umanite: ,
      },
      effects: {
        buffs: [],
        nerfs: []
      },
      description: '',
    },
    {
      name: '',
      class: 'Driller',
      icon: '',
      weapon: 'Cryo Cannon',
      type: '',
      price: {
        credits: ,
        bismor: ,
        croppa: ,
        enorPearl: ,
        jadiz: ,
        magnite: ,
        umanite: ,
      },
      effects: {
        buffs: [],
        nerfs: []
      },
      description: '',
    },

  ],
  engineer: [],
  gunner: [],
  scout: []
};
