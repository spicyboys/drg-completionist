import type { Overclock } from 'types/overclock';

const SludgePumpOverclocks: Overclock[] = [
  {
    name: 'Hydrogen Ion Additive',
    id: 'ECCAB2551405F044A93FFB6C51FF9B39',
    icon: 'Damage',
    type: 'Clean',
    price: {
      credits: 8800,
      umanite: 70,
      enorPearl: 100,
      bismor: 130,
    },
    effects: {
      buffs: ["+0.5 Direct Hit Corrosive Damage", "x0.85 Direct Hit Corrosive Slowdown"],
      nerfs: [],
    },
    description:
      'Experimental additive that activates on impact gives a small improvement to the corrosive DoT and slowdown effect of direct hits.',
  },
  {
    name: 'AG Mixture',
    id: '4956672BA68D3A439D4EC260F0B98CE4',
    icon: 'Damage',
    type: 'Clean',
    price: {
      credits: 7800,
      croppa: 60,
      jadiz: 105,
      umanite: 140,
    },
    effects: {
      buffs: ["+30% Projectile Velocity", "x0.25 Gravity on Projectiles"],
      nerfs: [],
    },
    description:
      'Anti-gravity pellets suspended in the sludge let the projectiles fly further and faster.',
  },
  {
    name: 'Volatile Impact Mixture',
    id: '539F16D0ECA50447B21BD3B1ADD439CB',
    icon: 'Damage',
    type: 'Balanced',
    price: {
      credits: 8500,
      jadiz: 75,
      magnite: 100,
      bismor: 120,
    },
    effects: {
      buffs: ["2x Regular Shot Area Damage", "2x Charged Shot Area Damage"],
      nerfs: ["x0.5 Corrosive DoT Duration", "x0.75 Sludge Puddle Duration"],
    },
    description:
      'Special mixture greatly increases projectile impact damage. However the volatile compound evaporates quicker, reducing the duration of the corrosive and slowdown effects as well as the puddle lifetime.',
  },
  {
    name: 'Disperser Compound',
    id: 'C1D77A8BAFD433408E4A8397F1A63AEC',
    icon: 'Damage',
    type: 'Balanced',
    price: {
      credits: 8800,
      jadiz: 135,
      magnite: 100,
      umanite: 60,
    },
    effects: {
      buffs: ["+6 Charged Shot Fragments", "+4 Fragment Area Damage"],
      nerfs: ["-24 Charged Shot Area Damage"],
    },
    description:
      'Charged shots break apart into more fragments on impact and each fragment is more potent, however the initial damage of the charged projectile impact is reduced.',
  },
  {
    name: 'Goo Bomber Special',
    id: '4CCC7E994163A14AAAC97AB3777FF1F9',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7450,
      jadiz: 140,
      umanite: 65,
      enorPearl: 90,
    },
    effects: {
      buffs: ["Charged projectile drops fragments as it flies", "+4 Fragment Area Damage", "x1.5 Charged Shot Fragments", "x1.33 Sludge Puddle Duration"],
      nerfs: ["Charged projectile does not break into fragments on impact"],
    },
    description:
      'The addition of finely tuned timed separation compounds cause the charged shots to leave a trail of sludge as they fly through the air. However the projectile depletes its mass as it flies, dealing less impact damage as fragments separate and completely expiring once all fragments are dropped.',
  },
  {
    name: 'Sludge Blast',
    id: 'EA7D273B56099B4B9F44768A099A8C1C',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 8200,
      jadiz: 100,
      magnite: 120,
      umanite: 60,
    },
    effects: {
      buffs: ["+Sludge Blast", "+100% Charged Shot Velocity"],
      nerfs: ["x0.5 Charged Shot Area Damage", "-40 Max Ammo", "+0.6 Reload Time"],
    },
    description:
      'The charged shot cohesion is disrupted on firing, instantly shooting out fast-moving fragments in a shotgun-like blast. While spectacular the modifications result in reduced ammo capacity and an extended reload process.',
  },
];

export default SludgePumpOverclocks;
