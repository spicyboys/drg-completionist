import type { Overclock } from 'types/overclock';

const GrenadeLauncherOverclocks: Overclock[] = [
  {
    name: 'Clean Sweep',
    id: 'B912059A3F86E44BA2985450D136CCB5',
    icon: 'Area',
    type: 'Clean',
    price: {
      credits: 8100,
      bismor: 105,
      enorPearl: 70,
      umanite: 135,
    },
    effects: {
      buffs: ['+10 Area Damage', '+0.5m Radius'],
      nerfs: [],
    },
    description:
      'Increases the explosion radius and damage without any unwanted effects.',
  },
  {
    name: 'Pack Rat',
    id: 'A97694E1A9B7484EB66E14DBF830DB6B',
    icon: 'Ammo',
    type: 'Clean',
    price: {
      credits: 7950,
      bismor: 80,
      enorPearl: 105,
      magnite: 120,
    },
    effects: {
      buffs: ['+2 Max Ammo'],
      nerfs: [],
    },
    description: 'You found a way to pack away two more rounds somewhere.',
  },
  {
    name: 'Compact Rounds',
    id: 'EE5713FA91A0E245A1C0BFCE15212074',
    icon: 'Ammo',
    type: 'Balanced',
    price: {
      credits: 7900,
      bismor: 120,
      enorPearl: 100,
      umanite: 70,
    },
    effects: {
      buffs: ['+5 Max Ammo'],
      nerfs: ['-10 Area Damage', '-0.5m Radius'],
    },
    description:
      "Smaller and lighter rounds mean more rounds in the pocket at the cost of the explosion's effective radius and damage.",
  },
  {
    name: 'RJ250 Compound',
    id: 'DB7EC788B46FCE4C9800A25010A0E8EA',
    icon: 'ExplosionJump',
    type: 'Balanced',
    price: {
      credits: 8800,
      bismor: 65,
      enorPearl: 110,
      umanite: 120,
    },
    effects: {
      buffs: ['+RJ250 Compound', '+70% Max Ammo', '-0.6s Reload Time'],
      nerfs: ['-35 Area Damage'],
    },
    description:
      'Use explosions to launch yourself and your teammates into the air. Increases max ammo and reduces reload time at the cost of raw damage.',
  },
  {
    name: 'Fat Boy',
    id: '87D2434388D3FC45884E351DCBE70F7C',
    icon: 'AreaDamage',
    type: 'Unstable',
    price: {
      credits: 8300,
      bismor: 120,
      enorPearl: 70,
      magnite: 105,
    },
    effects: {
      buffs: ['+300% Area Damage', '+1.0m Radius'],
      nerfs: ['-70% Max Ammo', '-30% Projectile Velocity'],
    },
    description:
      'Big and deadly and dirty. Too bad plutonium is so heavy that you can only take a few rounds with you. And remember to take care with the fallout.',
  },
  {
    name: 'Hyper Propellant',
    id: 'BC4CD684621BF6449607373A534A574F',
    icon: 'ProjectileSpeed',
    type: 'Unstable',
    price: {
      credits: 8950,
      croppa: 90,
      jadiz: 70,
      magnite: 130,
    },
    effects: {
      buffs: ['+385 Direct Damage', '+350% Projectile Velocity'],
      nerfs: ['-70% Radius', '-2 Max Ammo'],
    },
    description:
      'New super-high velocity projectiles trade explosive range for raw damage in a tight area. The increased weight of the rounds also limits how many you can carry.',
  },
];

export default GrenadeLauncherOverclocks;
