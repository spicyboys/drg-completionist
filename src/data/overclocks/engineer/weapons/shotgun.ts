import type { Overclock } from 'types/overclock';

const ShotgunOverclocks: Overclock[] = [
  {
    name: 'Stunner',
    id: '338DD238332A2E4EA5490208AAD7F502',
    icon: 'Stun',
    type: 'Clean',
    price: {
      credits: 7350,
      bismor: 100,
      jadiz: 135,
      magnite: 60,
    },
    effects: {
      buffs: [
        '+Stun Chance Occurs on All Body Parts',
        '+30% Kinetic Damage vs. Stunned',
      ],
      nerfs: [],
    },
    description:
      'Heavier rounds allow for Stun chance on all body parts, not just weakpoints. Shooting already stunned enemies with this overclock will deal extra damage.',
  },
  {
    name: 'Light-Weight Magazines',
    id: 'CD4EEC38C029724E8317CCDC22D06057',
    icon: 'Ammo',
    type: 'Clean',
    price: {
      credits: 7250,
      croppa: 125,
      magnite: 105,
      umanite: 60,
    },
    effects: {
      buffs: ['+18 Max Ammo', '-0.4s Reload Time'],
      nerfs: [],
    },
    description:
      "It's amazing how much material can be removed without affecting anything, and lighter magazines means more magazines and faster reloading.",
  },
  {
    name: 'Magnetic Pellet Alignment',
    id: '07E9279956BF9C418EEA313E2DC59F8D',
    icon: 'Aim',
    type: 'Balanced',
    price: {
      credits: 7900,
      enorPearl: 120,
      jadiz: 105,
      umanite: 75,
    },
    effects: {
      buffs: ['-50% Base Spread', '+30% Weakpoint Damage Bonus'],
      nerfs: ['-25% Rate of Fire'],
    },
    description:
      'Electromagnets in the chamber greatly reduces shot spread and increases weakpoint damage at the cost of a slower rate of fire.',
  },
  {
    name: 'Cycle Overload',
    id: '70122BA2FBDABF4895DC09C90294E685',
    icon: 'FireRate',
    type: 'Unstable',
    price: {
      credits: 8050,
      bismor: 125,
      croppa: 100,
      umanite: 80,
    },
    effects: {
      buffs: ['+1 Damage', '+2 Rate of Fire'],
      nerfs: ['+0.5s Reload Time', '+50% Base Spread'],
    },
    description:
      "Heavy modification to the chamber greatly increases the maximum rate of fire and increases raw damage, but reduces the weapon's accuracy and reload speed as a consequence.",
  },
  {
    name: 'Mini Shells',
    id: '62D4C94C1367E8419691B677837DA4FB',
    icon: 'SmallBullets',
    type: 'Unstable',
    price: {
      credits: 7700,
      croppa: 125,
      enorPearl: 65,
      magnite: 90,
    },
    effects: {
      buffs: ['+78 Max Ammo', '+6 Magazine Size', '-50% Recoil'],
      nerfs: ['-2 Damage', '-10% Stun Chance', 'No Stun Duration'],
    },
    description:
      'Smaller shells designed around a new charge type reduce recoil and increase overall ammo and magazine capacity at the cost of raw damage.',
  },
];

export default ShotgunOverclocks;
