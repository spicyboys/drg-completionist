import type { Overclock } from 'types/overclock';

const SubataOverclocks: Overclock[] = [
  {
    name: 'Chain Hit',
    id: 'A4AB7C627AF7FE4FA235E3AAC398ED1F',
    icon: 'Ricochet',
    type: 'Clean',
    price: {
      credits: 7600,
      bismor: 65,
      croppa: 120,
      jadiz: 100,
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
    id: 'D57B542FBC793542B6BB5617C1A67229',
    icon: 'Chance',
    type: 'Clean',
    price: {
      credits: 7150,
      bismor: 135,
      croppa: 100,
      magnite: 70,
    },
    effects: {
      buffs: ['+Randomized Damage (80% to 140%)'],
      nerfs: [],
    },
    description: "More damage on average, but it's a bit inconsistent.",
  },
  {
    name: 'Oversized Magazine',
    id: 'F13E20C4E74976438E85C237AE071830',
    icon: 'ClipSize',
    type: 'Balanced',
    price: {
      credits: 9000,
      croppa: 70,
      jadiz: 110,
      umanite: 130,
    },
    effects: {
      buffs: ['+10 Magazine Size'],
      nerfs: ['+0.5s Reload Time'],
    },
    description:
      "Custom magazine that can fit a lot more ammo, but it's a bit unwieldy and takes longer to reload. ",
  },
  {
    name: 'Automatic Fire',
    id: '28A8E817E50A7346963E418BA08DFE18',
    icon: 'FireRate',
    type: 'Unstable',
    price: {
      credits: 7400,
      bismor: 95,
      croppa: 65,
      enorPearl: 120,
    },
    effects: {
      buffs: ['+Automatic Fire', '+2 Rate of Fire'],
      nerfs: ['+100% Base Spread', '+250% Recoil'],
    },
    description: 'Fully automatic action, but watch out for the recoil.',
  },
  {
    name: 'Explosive Reload',
    id: '2949A3BE68EA2A4197D532AF80549101',
    icon: 'SpecialMagazine',
    type: 'Unstable',
    price: {
      credits: 8100,
      enorPearl: 95,
      magnite: 65,
      umanite: 125,
    },
    effects: {
      buffs: ['+Explosive Reload'],
      nerfs: ['-50% Max Ammo', '-50% Magazine Size'],
    },
    description:
      'Micro-explosives that explode inside hit targets when you reload. However, these fancy bullets come at the cost of total ammo and magazine capacity.',
  },
  {
    name: 'Tranquilizer Rounds',
    id: '587488BA77B28D4DA177400D995737A7',
    icon: 'Stun',
    type: 'Unstable',
    price: {
      credits: 7150,
      croppa: 95,
      jadiz: 135,
      umanite: 75,
    },
    effects: {
      buffs: ['+50% Stun Chance'],
      nerfs: ['-4 Magazine Size', '-2 Rate of Fire'],
    },
    description:
      'Part-bullet, part-syringe: these rounds are very effective at stunning most enemies.',
  },
];

export default SubataOverclocks;
