import type { Overclock } from 'types/overclock';

const StubbySMGOverclocks: Overclock[] = [
  {
    name: 'Super-Slim Rounds',
    id: '13CF1C4A6992924A9AFF5CEAF05B7106',
    icon: 'ClipSize',
    type: 'Clean',
    price: {
      credits: 8550,
      bismor: 90,
      croppa: 130,
      enorPearl: 75,
    },
    effects: {
      buffs: ['+5 Magazine Size', '-20% Base Spread'],
      nerfs: [],
    },
    description:
      'Same power but in a smaller package, giving slightly better accuracy and letting you fit a few more rounds in each magazine.',
  },
  {
    name: 'Well-Oiled Machine',
    id: 'CE9490445B036B49B89DB2BC8D18FD12',
    icon: 'FireRate',
    type: 'Clean',
    price: {
      credits: 8400,
      croppa: 65,
      jadiz: 95,
      magnite: 140,
    },
    effects: {
      buffs: ['+2 Rate of Fire', '-0.2s Reload Time'],
      nerfs: [],
    },
    description: 'When you need a little more sustained damage.',
  },
  {
    name: 'EM Refire Booster',
    id: '81B842310E01B847BF99774DBC3DC0DD',
    icon: 'FireRate',
    type: 'Balanced',
    price: {
      credits: 8300,
      bismor: 60,
      enorPearl: 90,
      jadiz: 135,
    },
    effects: {
      buffs: ['+2 Electric Damage', '+4 Rate of Fire'],
      nerfs: ['+50% Base Spread'],
    },
    description:
      'Use the electron circuit of the SMG to boost its fire rate and damage, but the accuracy suffers as a result.',
  },
  {
    name: 'Light-Weight Rounds',
    id: '05B157A075E0734BB471EF8DAE692865',
    icon: 'Ammo',
    type: 'Balanced',
    price: {
      credits: 8700,
      bismor: 90,
      jadiz: 65,
      umanite: 135,
    },
    effects: {
      buffs: ['+180 Max Ammo'],
      nerfs: ['-1 Damage', '-2 Rate of Fire'],
    },
    description:
      "They don't hit quite as hard and can't handle fast fire rates, but you sure can carry a lot more of them!",
  },
  {
    name: 'Turret Arc',
    id: '3C42DBEA3021EE44AF6D944A91314D75',
    icon: 'Electricity',
    type: 'Unstable',
    price: {
      credits: 8350,
      bismor: 100,
      croppa: 135,
      umanite: 60,
    },
    effects: {
      buffs: ['+Turret Arc (15.0m Range)'],
      nerfs: ['-120 Max Ammo', '-2 Rate of Fire'],
    },
    description:
      'Use the Gemini turrets as nodes in an electric arc. Zap! The downside is less ammo and a slower rate of fire.',
  },
  {
    name: 'Turret EM Discharge',
    id: '0C1BAA64B03CB94EBB77B7B55E7C6C87',
    icon: 'AreaDamage',
    type: 'Unstable',
    price: {
      credits: 8450,
      bismor: 80,
      enorPearl: 105,
      jadiz: 125,
    },
    effects: {
      buffs: ['+Turret EM Discharge (5.0m Range)'],
      nerfs: ['-5 Magazine Size', '-2 Damage'],
    },
    description:
      'Shoot a turret to turn it into the epicenter of an electric explosion! The bullet modifications unfortunately also lower the direct damage and magazine size.',
  },
];

export default StubbySMGOverclocks;
