import type { Overclock } from 'types/overclock';

const RevolverOverclocks: Overclock[] = [
  {
    name: 'Chain Hit',
    id: '5885A33B15AE844591A66B65A2E5494E',
    icon: 'Ricochet',
    type: 'Clean',
    price: {
      credits: 7300,
      enorPearl: 80,
      jadiz: 110,
      magnite: 120,
    },
    effects: {
      buffs: ['+75% Weakpoint Ricochet Chance'],
      nerfs: [],
    },
    description:
      'Any shot that hits a weakspot has a chance to ricochet into a nearby enemy.',
  },
  {
    name: 'Homebrew Powder',
    id: 'CD6993F938E27C49AC69293BF942A8F0',
    icon: 'Chance',
    type: 'Balanced',
    price: {
      credits: 7350,
      croppa: 135,
      enorPearl: 105,
      magnite: 70,
    },
    effects: {
      buffs: ['+Randomized Damage (75% to 200%)'],
      nerfs: [],
    },
    description: "More damage on average, but it's a bit inconsistent.",
  },
  {
    name: 'Volatile Bullets',
    id: 'D1306CBC8421B248A4B95B332DF3E056',
    icon: 'Heat',
    type: 'Balanced',
    price: {
      credits: 7350,
      croppa: 130,
      jadiz: 110,
      magnite: 60,
    },
    effects: {
      buffs: ['+300% Damage vs. Burning'],
      nerfs: ['-10 Damage'],
    },
    description:
      'Fuel on the fire! These rounds are extremely effective against burning targets, but at the cost of direct damage dealt to unaffected creatures.',
  },
  {
    name: 'Six Shooter',
    id: 'A937DC3938DEE8418CD0641CCE19B46A',
    icon: 'ClipSize',
    type: 'Balanced',
    price: {
      credits: 7750,
      bismor: 120,
      croppa: 60,
      magnite: 100,
    },
    effects: {
      buffs: ['+2 Magazine Size', '+6 Max Ammo', '+2 Rate of Fire'],
      nerfs: ['+0.5s Reload Time', '+50% Base Spread'],
    },
    description:
      'An updated casing profile lets you squeeze two more rounds into the cylinder and take a few more rounds with you, but all that filling and drilling has compromised the accuracy of the weapon, and it takes longer to reload.',
  },
  {
    name: 'Elephant Rounds',
    id: 'D53F94FBC05E0448B57BC9DF6846267B',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7300,
      enorPearl: 140,
      magnite: 90,
      umanite: 65,
    },
    effects: {
      buffs: ['+100% Damage', '-50% Base Spread'],
      nerfs: [
        '-12 Max Ammo',
        '-1 Magazine Size',
        '+0.5s Reload Time',
        '+150% Recoil',
        '+71% Spread per Shot',
      ],
    },
    description:
      "Heavy tweaking has made it possible to use modified autocannon rounds in the revolver! The damage is crazy, but so is the recoil, and you can't carry very many rounds. Also, only three rounds fit in the gun, and reload time is a bit slower, but base accuracy is improved.",
  },
  {
    name: 'Magic Bullets',
    id: 'DB02B4E77D43BF44A4749982C0879B77',
    icon: 'Ricochet',
    type: 'Unstable',
    price: {
      credits: 8750,
      croppa: 105,
      magnite: 130,
      umanite: 75,
    },
    effects: {
      buffs: ['+Magic Bullets', '+8 Max Ammo'],
      nerfs: ['-20 Damage'],
    },
    description:
      'Smaller, bouncy bullets ricochet off hard surfaces, hitting nearby enemies like magic! Overall, the damage of the weapon is reduced, but you can carry a few more rounds due to their compact size.',
  },
];

export default RevolverOverclocks;
