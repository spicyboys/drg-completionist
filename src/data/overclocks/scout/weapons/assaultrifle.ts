import type { Overclock } from 'types/overclock';

const AssaultRifleOverclocks: Overclock[] = [
  {
    name: 'Compact Ammo',
    id: 'AF945B93A7B9D64CA6DD00683627BC80',
    icon: 'ClipSize',
    type: 'Clean',
    price: {
      credits: 7250,
      bismor: 125,
      enorPearl: 80,
      jadiz: 105,
    },
    effects: {
      buffs: ['+5 Magazine Size', '-30% Recoil'],
      nerfs: [],
    },
    description:
      'Stuff a few more of these compact rounds into each magazine, and they have a bit less recoil as well.',
  },
  {
    name: 'Gas Rerouting',
    id: 'F6E2E547F2EB674DBDA591F47DE6D017',
    icon: 'FireRate',
    type: 'Clean',
    price: {
      credits: 7800,
      croppa: 60,
      jadiz: 125,
      magnite: 105,
    },
    effects: {
      buffs: ['+1 Rate of Fire'],
      nerfs: ['-16% Reload Time'],
    },
    description:
      "Increases the weapon's rate of fire without affecting performance, and helps with magazine ejection as well.",
  },
  {
    name: 'Homebrew Powder',
    id: '4CDF41F3A0F8E4499D1BAC6168347799',
    icon: 'Chance',
    type: 'Clean',
    price: {
      credits: 8100,
      bismor: 95,
      jadiz: 140,
      umanite: 65,
    },
    effects: {
      buffs: ['+Randomized Damage (80% to 140%)'],
      nerfs: [],
    },
    description: "More damage on average, but it's a bit inconsistent.",
  },
  {
    name: 'Overclocked Firing Mechanism',
    id: 'C3060324CE482C4AB6DC44ED498CBA39',
    icon: 'FireRate',
    type: 'Balanced',
    price: {
      credits: 7950,
      bismor: 95,
      enorPearl: 120,
      magnite: 65,
    },
    effects: {
      buffs: ['+3 Rate of Fire'],
      nerfs: ['+100% Recoil'],
    },
    description: 'More bullets faster, and it kicks like a mule.',
  },
  {
    name: 'Bullets of Mercy',
    id: '7306221F1264B04B8C025DB4DE9D1667',
    icon: 'Damage',
    type: 'Balanced',
    price: {
      credits: 8100,
      bismor: 90,
      croppa: 80,
      magnite: 125,
    },
    effects: {
      buffs: ['+50% Damage vs. Status-Afflicted Targets'],
      nerfs: ['-40% Magazine Size'],
    },
    description:
      'Deal bonus damage to burning, stunned, electrocuted, frozen, or poisoned targets.',
  },
  {
    name: 'AI Stability Engine',
    id: '11F123E174103140957957506BD576D7',
    icon: 'Aim',
    type: 'Unstable',
    price: {
      credits: 8250,
      croppa: 60,
      enorPearl: 125,
      umanite: 100,
    },
    effects: {
      buffs: [
        'No Recoil',
        '+800% Spread Recovery Speed',
        '+40% Weakpoint Damage Bonus',
      ],
      nerfs: ['-1 Damage', '-2 Rate of Fire'],
    },
    description:
      "It's like it knows what you are going to do before you do it, compensating for all recoil and bullet spread. The system requires a lower rate of fire and the fin-stabilized rounds do less direct damage, but give a bonus to weakpoint hits.",
  },
  {
    name: 'Electrifying Reload',
    id: 'FF94B9E7834D774292DACCCA3EA023B9',
    icon: 'SpecialMagazine',
    type: 'Unstable',
    price: {
      credits: 7750,
      bismor: 105,
      magnite: 65,
      umanite: 135,
    },
    effects: {
      buffs: ['+Electric Reload (100% Chance)'],
      nerfs: ['-60 Max Ammo', '-10 Magazine Size'],
    },
    description:
      'Embedded capacitors electrocute targets from the inside when you reload. However, all that tech reduces the raw damage of the bullets and takes up some space in the magazines.',
  },
];

export default AssaultRifleOverclocks;
