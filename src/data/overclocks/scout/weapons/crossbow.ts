import type { Overclock } from 'types/overclock';

const CrossbowOverclocks: Overclock[] = [
  {
    name: 'Quick Fire',
    id: '1CFA57FA35D0DB49A9AAF87CAA011EF4',
    icon: 'FireRate',
    type: 'Clean',
    price: {
      credits: 8400,
      croppa: 95,
      umanite: 125,
      enorPearl: 70,
    },
    effects: {
      buffs: ['-0.2s Reload Time', '+100% Projectile Velocity'],
      nerfs: [],
    },
    description:
      'R&D improved the reload mechanism of the crossbow, making it pull back sooner for you to put a bolt in the chamber. They also reinforced the string free of charge, enabling the crossbow to fire bolts with little to no drop.',
  },
  {
    name: 'The Specialist',
    id: '6C464531820EA849BB3C80C0F190A74F',
    icon: 'Special',
    type: 'Clean',
    price: {
      credits: 7900,
      croppa: 65,
      magnite: 130,
      umanite: 90,
    },
    effects: {
      buffs: ['+25% Special Ammo', '+30% Special Effect Duration'],
      nerfs: [],
    },
    description:
      'Extra potent special bolts and more of them. What more could you want?',
  },
  {
    name: 'Cryo Bolt',
    id: '75CFD0A90F31C94A9D6A8D02147DE1FC',
    icon: 'Cold',
    type: 'Balanced',
    price: {
      credits: 7350,
      croppa: 75,
      jadiz: 105,
      magnite: 135,
    },
    effects: {
      buffs: ['Bolts Freeze Enemies (Effect Stacks)'],
      nerfs: ['Bolts No Longer Retrievable', 'Lower Damage Output'],
    },
    description:
      'A small module based on the Cryo Grenade tech has been strapped to your bolts, enabling them to cool and freeze enemies. Pin them to the ground or the face of enemies and turn any bugs in near proximity into popsicles. The intense cold takes a toll on the bolt, reducing overall damage and destroying it after use.',
  },
  {
    name: 'Fire Bolt',
    id: 'DDCA81E29C6BE8488C2DF4F0B0C72A72',
    icon: 'Heat',
    type: 'Balanced',
    price: {
      credits: 7100,
      croppa: 90,
      magnite: 70,
      umanite: 130,
    },
    effects: {
      buffs: ['Bolts Ignite Enemies (Effect Stacks)'],
      nerfs: ['Bolts No Longer Retrievable', 'Lower Damage Output'],
    },
    description:
      'Bolts with highly advanced cannisters full of volatile chemicals, with the ability to radiate intense heat. Shoot it at your enemies or the ground to activate it. The high temperature comes at a cost though, reducing overall damage and rendering the bolt useless after impact.',
  },
  {
    name: 'Bodkin Points',
    id: 'AECB0F241DFA194AB04BBB86563FA840',
    icon: 'Ricochet',
    type: 'Unstable',
    price: {
      credits: 8400,
      croppa: 110,
      jadiz: 80,
      magnite: 140,
    },
    effects: {
      buffs: ['Normal Bolts Ricochet up to Twice'],
      nerfs: ['-75 Direct Damage', '+50% Reload Time'],
    },
    description:
      'The crossbow has been modified so it can fire a thinner bodkin point bolt with the ability to penetrate targets and ricochet to the nearest target. Its thin frame makes it do less damage and requires a slower reload process. This, however, does not affect special bolts.',
  },
  {
    name: 'Trifork Volley',
    id: '62FE96DE32A5454EB0F1952BD68DBAF4',
    icon: 'LastShellHigherDamage',
    type: 'Unstable',
    price: {
      credits: 7650,
      jadiz: 100,
      magnite: 65,
      bismor: 130,
    },
    effects: {
      buffs: ['+200% Normal Projectiles', '+20% Ammo Capacity'],
      nerfs: [
        'Bolts No Longer Retrievable',
        '-15% Damage per Projectile',
        '+50% Reload Time',
      ],
    },
    description:
      'With a few adjustments to the firing mechanism and the string, you can load a volley of three bolts into the chamber. The bolts do a tad less damage, but are packed compactly enough for you to carry more of them. The modification and size of the rounds make reloading slower, and the bolts are ruined after firing them, making them unretrievable. This does not affect special bolts.',
  },
];

export default CrossbowOverclocks;
