import type { Overclock } from 'types/overclock';

const MinigunOverclocks: Overclock[] = [
  {
    name: 'A Little More Oomph!',
    id: 'B55D6170EEA5D743AC4B28293C0C4673',
    icon: 'Damage',
    type: 'Clean',
    price: {
      credits: 8700,
      bismor: 120,
      magnite: 95,
      umanite: 75,
    },
    effects: {
      buffs: ['+1 Damage', '-0.2s Spinup Time'],
      nerfs: [],
    },
    description:
      "Get the most out of each shot without compromising any of the gun's systems.",
  },
  {
    name: 'Thinned Drum Walls',
    id: '01D4653903832F498C50F7719D58E89B',
    icon: 'Cooldown',
    type: 'Clean',
    price: {
      credits: 7650,
      croppa: 75,
      enorPearl: 125,
      jadiz: 95,
    },
    effects: {
      buffs: ['+300 Max Ammo', '+0.5 Cooling Rate'],
      nerfs: [],
    },
    description:
      'Stuff more bullets into the ammo drum by thinning the material in non-critical areas.',
  },
  {
    name: 'Burning Hell',
    id: '63156673F2174F449F598F8729AC0C65',
    icon: 'Heat',
    type: 'Balanced',
    price: {
      credits: 8700,
      croppa: 110,
      magnite: 140,
      umanite: 65,
    },
    effects: {
      buffs: ['+Burning Hell'],
      nerfs: ['+150% Heat Generation'],
    },
    description:
      'Turn the area just in front of the minigun into an even worse place by venting all the combustion gasses forward. However, it does overheat rather quickly.',
  },
  {
    name: 'Compact Feed Mechanism',
    id: '2E9FBFB43B7B554FB3728780F1334824',
    icon: 'Ammo',
    type: 'Balanced',
    price: {
      credits: 7450,
      bismor: 70,
      croppa: 95,
      magnite: 130,
    },
    effects: {
      buffs: ['+800 Max Ammo'],
      nerfs: ['-2 Rate of Fire'],
    },
    description:
      'More space left for ammo at the cost of a reduced rate of fire.',
  },
  {
    name: 'Exhaust Vectoring',
    id: 'FBB1014758606A41888E378F69E3CD61',
    icon: 'Damage',
    type: 'Balanced',
    price: {
      credits: 7400,
      bismor: 140,
      croppa: 95,
      magnite: 65,
    },
    effects: {
      buffs: ['+2 Damage'],
      nerfs: ['+150% Base Spread'],
    },
    description: 'Increases damage at a cost to accuracy.',
  },
  {
    name: 'Bullet Hell',
    id: 'ED4036806A69E848BC72DDE3CDEAC456',
    icon: 'Ricochet',
    type: 'Unstable',
    price: {
      credits: 7600,
      enorPearl: 105,
      magnite: 140,
      umanite: 75,
    },
    effects: {
      buffs: ['+75% Ricochet Chance on Bullets'],
      nerfs: ['-3 Damage', '+500% Base Spread'],
    },
    description:
      'Special bullets that ricochet off all surfaces and even enemies, going on to hit nearby targets. However, they deal less damage and are less accurate overall.',
  },
  {
    name: 'Lead Storm',
    id: '7CD10E2C55583041B577141C854BEE62',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 8800,
      enorPearl: 130,
      jadiz: 100,
      magnite: 65,
    },
    effects: {
      buffs: ['+4 Damage'],
      nerfs: [
        'No Movement While Using',
        '-75% Stun Chance',
        '-50% Stun Duration',
      ],
    },
    description:
      'Pushing things to the limit, this overclock greatly increases damage output at the cost of consistently stunning targets, and the kickback makes it almost impossible to move.',
  },
];

export default MinigunOverclocks;
