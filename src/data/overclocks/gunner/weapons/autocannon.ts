import type { Overclock } from 'types/overclock';

const AutocannonOverclocks: Overclock[] = [
  {
    name: 'Composite Drums',
    id: '01E23067CBB9A6428AE4394C99F1D2BB',
    icon: 'Ammo',
    type: 'Clean',
    price: {
      credits: 7850,
      croppa: 135,
      enorPearl: 70,
      magnite: 105,
    },
    effects: {
      buffs: ['+110 Max Ammo', '-0.5s Reload Time'],
      nerfs: [],
    },
    description: 'Lighter-weight materials mean you can carry even more ammo!',
  },
  {
    name: 'Splintering Shells',
    id: 'CB83FD6C13C63F4982DC87B9796311C8',
    icon: 'Area',
    type: 'Clean',
    price: {
      credits: 7300,
      croppa: 95,
      jadiz: 125,
      magnite: 65,
    },
    effects: {
      buffs: ['+1 Area Damage', '+0.3m Effect Radius'],
      nerfs: [],
    },
    description:
      'Specially designed shells splinter into smaller pieces, increasing the splash damage range.',
  },
  {
    name: 'Carpet Bomber',
    id: '8C0142A687637A4EA4CC8A7F84B9610A',
    icon: 'AreaDamage',
    type: 'Balanced',
    price: {
      credits: 7350,
      croppa: 120,
      magnite: 105,
      umanite: 70,
    },
    effects: {
      buffs: ['+3 Area Damage', '+0.6m Effect Radius'],
      nerfs: ['-7 Damage'],
    },
    description:
      'A few tweaks here and there, and the autocannon can now shoot HE rounds! Direct damage is lower, but the increased splash damage and range lets you saturate an area like no other weapon can.',
  },
  {
    name: 'Combat Mobility',
    id: '3DD5E8141C483E43AA3E0708CE75D663',
    icon: 'MovementSpeed',
    type: 'Balanced',
    price: {
      credits: 7650,
      croppa: 70,
      jadiz: 120,
      magnite: 95,
    },
    effects: {
      buffs: [
        '+35% Movement Speed While Using',
        '-30% Base Spread',
        '+50% Rate of Fire Scaling',
        '0.9 Starting Rate of Fire',
      ],
      nerfs: ['-50% Magazine Size'],
    },
    description:
      'Fancy custom ammo drums improve weapon balance, making it more accurate and easier to handle on the move while the improved feed motor increases the speed with which the max fire rate is reached. All this, however, comes at the cost of magazine capacity.',
  },
  {
    name: 'Big Bertha',
    id: '86AA0DD13FD37E43B2FBF176EE5DE815',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 8400,
      bismor: 125,
      croppa: 105,
      umanite: 80,
    },
    effects: {
      buffs: ['+12 Damage', '-30% Base Spread'],
      nerfs: ['-50% Magazine Size', '-110 Max Ammo', '-1.5 Top Rate of Fire'],
    },
    description:
      'Extensive tweaks give a huge bump in raw damage at the cost of ammo capacity and fire rate.',
  },
  {
    name: 'Neurotoxin Payload',
    id: '32654E9478165E4DA3F0DBD33B180341',
    icon: 'Neuro',
    type: 'Unstable',
    price: {
      credits: 8100,
      croppa: 100,
      jadiz: 75,
      magnite: 135,
    },
    effects: {
      buffs: ['+Neurotoxin Payload (50% Chance)', '+0.6m Effect Radius'],
      nerfs: ['-2 Damage', '-5 Area Damage'],
    },
    description:
      'Channel your inner war criminal by mixing some neurotoxin into the explosive compound. The rounds deal less direct damage and splash damage, but affected bugs move slower and take lots of damage over time.',
  },
];

export default AutocannonOverclocks;
