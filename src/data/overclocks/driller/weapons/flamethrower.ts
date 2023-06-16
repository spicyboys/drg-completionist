import type { Overclock } from 'types/overclock';

const FlamethrowerOverclocks: Overclock[] = [
  {
    name: 'Lighter Tanks',
    id: 'C5057A9608CF5E4BA4AAB32AD613BA3E',
    icon: 'Ammo',
    type: 'Clean',
    price: {
      credits: 7500,
      bismor: 125,
      croppa: 75,
      umanite: 90,
    },
    effects: {
      buffs: ['+75 Max Fuel'],
      nerfs: [],
    },
    description: 'Lighter-weight gear means more fuel and sandwiches.',
  },
  {
    name: 'Sticky Additive',
    id: '415F1D83A77E7A448DBF60383103FD6C',
    icon: 'DurationHourglass',
    type: 'Clean',
    price: {
      credits: 8250,
      bismor: 80,
      jadiz: 130,
      magnite: 100,
    },
    effects: {
      buffs: ['+1 Damage', '+1.0s Sticky Flame Duration'],
      nerfs: [],
    },
    description:
      'Special additive compound extends the Sticky Flame duration and increases direct damage.',
  },
  {
    name: 'Compact Feed Valves',
    id: '71588D43A7589A4ABE61A8DE2EB449BF',
    icon: 'ClipSize',
    type: 'Balanced',
    price: {
      credits: 7350,
      bismor: 70,
      jadiz: 90,
      umanite: 130,
    },
    effects: {
      buffs: ['+25 Tank Size', '+75 Max Fuel'],
      nerfs: ['-2.0m Flame Reach', '+0.2s Reload Time'],
    },
    description:
      'The smaller mechanism allows for greater tank capacity and more fuel at the cost of reload speed and operational range.',
  },
  {
    name: 'Fuel Stream Diffuser',
    id: '19E85D1C3585B349B151779CBD7303D9',
    icon: 'Distance',
    type: 'Balanced',
    price: {
      credits: 7100,
      bismor: 100,
      enorPearl: 80,
      jadiz: 125,
    },
    effects: {
      buffs: ['+5.0m Flame Reach'],
      nerfs: ['-1.2 Fuel Flow Rate'],
    },
    description: 'Increases operation range, but decreases the fuel flow rate.',
  },
  {
    name: 'Face Melter',
    id: '6431A8DDEAA6894B90C57BAC7552A5FF',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7000,
      croppa: 130,
      enorPearl: 70,
      magnite: 90,
    },
    effects: {
      buffs: ['+4 Damage', '+1.8 Fuel Flow Rate'],
      nerfs: ['-3.0m Flame Reach', '-15 Tank Size'],
    },
    description:
      'This crazy bit of tweaking will give a big boost in damage and flow rate, but at the cost of operational range and tank capacity.',
  },
  {
    name: 'Sticky Fuel',
    id: 'F28C3EE38A960D48965E9F69F56B3F19',
    icon: 'DurationHourglass',
    type: 'Unstable',
    price: {
      credits: 8800,
      enorPearl: 110,
      jadiz: 140,
      magnite: 75,
    },
    effects: {
      buffs: ['+10 Sticky Flame Damage', '+6.0s Sticky Flame Duration'],
      nerfs: ['-25 Tank Size', '-75 Max Fuel'],
    },
    description:
      'Special fuel mixture extends the duration and damage of Sticky Flames, but at the cost of tank capacity and total fuel.',
  },
];

export default FlamethrowerOverclocks;
