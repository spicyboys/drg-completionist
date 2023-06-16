import type { Overclock } from 'types/overclock';

const LockOnRifleOverclocks: Overclock[] = [
  {
    name: 'Eraser',
    id: '538A52E774FCB24C85E5F7F1CE63E3FA',
    icon: 'ClipSize',
    type: 'Clean',
    price: {
      credits: 8000,
      croppa: 135,
      magnite: 70,
      enorPearl: 90,
    },
    effects: {
      buffs: ['+12 Magazine Size', '+33% Max Targets'],
      nerfs: [],
    },
    description:
      'Clean up the caves with an expanded magazine combined with the ability to acquire more locks.',
  },
  {
    name: 'Armor Break Module',
    id: 'B63D1376D90DDD4C986851D791E737AB',
    icon: 'ArmorBreak',
    type: 'Clean',
    price: {
      credits: 7850,
      croppa: 125,
      magnite: 90,
      umanite: 80,
    },
    effects: {
      buffs: ['More Armor Damage at Full Lock'],
      nerfs: [],
    },
    description:
      'Shots do extra damage against armor when all locks are engaged.',
  },
  {
    name: 'Explosive Chemical Rounds',
    id: '6FA83E783551F54A97BC04F09DF1A842',
    icon: 'Explosion',
    type: 'Balanced',
    price: {
      credits: 8500,
      croppa: 65,
      jadiz: 130,
      magnite: 95,
    },
    effects: {
      buffs: ['+Explosive Chemical Rounds'],
      nerfs: ['-5 Damage', '-36 Max Ammo'],
    },
    description:
      'Every enemy with at least three locks triggers an explosion on the last shot.',
  },
  {
    name: 'Seeker Rounds',
    id: '798B9546AB16B34CAD766DAB554150D9',
    icon: 'Aim',
    type: 'Balanced',
    price: {
      credits: 8150,
      magnite: 135,
      umanite: 95,
      bismor: 60,
    },
    effects: {
      buffs: ['+Seeker Rounds', '+33% Lock Loss Threshold'],
      nerfs: ['47% Slower Burst Fire Rate', '+0.5s Reload Time'],
    },
    description:
      'Locked shots will always hit their target, even finding their way around heavy armor. The system can also maintain locks at more extreme angles. However, the extra processing load reduces the rate of fire for locked shots and more care must be taken when reloading the advanced rounds.',
  },
  {
    name: 'Executioner',
    id: '8884ED69B093E44681F36C74FD1E772F',
    icon: 'Weakspot',
    type: 'Unstable',
    price: {
      credits: 8750,
      jadiz: 105,
      magnite: 65,
      enorPearl: 130,
    },
    effects: {
      buffs: ['+50% Weakpoint Damage at Full Lock', '-50% Lock-On Time'],
      nerfs: ['-12 Max Ammo', '-12 Magazine Size', '-33% Max Targets'],
    },
    description:
      'Tweaks to the fire control mechanism and camera software bring lightning-fast lock acquisition and more weakspot damage when all locks are engaged. However, the max number of locks is reduced, as is the magazine and total ammo capacity.',
  },
  {
    name: 'Neuro-Lasso',
    id: '956BB51F4D8F254291A0C0E740BD07CF',
    icon: 'MovementSpeed',
    type: 'Unstable',
    price: {
      credits: 8950,
      croppa: 125,
      magnite: 80,
      umanite: 100,
    },
    effects: {
      buffs: ['+Slowdown Locked Targets'],
      nerfs: ['+50% Lock-On Time', 'Lock-On Limited to 5.0s'],
    },
    description:
      'Slow down enemies by locking on to them: the more locks, the slower the enemy gets! The downside is a slightly slower lock-on rate, and the locks can only be maintained for a limited time before the system resets.',
  },
];

export default LockOnRifleOverclocks;
