import type { Overclock } from 'types/overclock';

const CoilGunOverclocks: Overclock[] = [
  {
    name: 'Re-atomizer',
    id: '8C5D24BD68D5F14A89A6B87A857CCD9B',
    icon: 'Special',
    type: 'Clean',
    price: {
      credits: 7750,
      jadiz: 65,
      magnite: 135,
      bismor: 90,
    },
    effects: {
      buffs: ['Spread target ailments to enemies behind them'],
      nerfs: [],
    },
    description:
      'A charge so powerful it splits and rebinds atoms in hit enemies, spreading ailments to other targets behind them. The amount of power required slows down the reload process significantly.',
  },
  {
    name: 'Ultra-Magnetic Coils',
    id: '26841EB5823A284B81BF7DA3792708D7',
    icon: 'DurationHourglass',
    type: 'Clean',
    price: {
      credits: 7900,
      jadiz: 70,
      magnite: 110,
      enorPearl: 125,
    },
    effects: {
      buffs: ['0.5m Trail Radius', '+1s Trail Duration'],
      nerfs: [],
    },
    description:
      'Extremely magnetic coils able to store more energy. The extra energy increases the radius and duration of the trail left behind by the projectile.',
  },
  {
    name: 'Backfeeding Module',
    id: 'F82F326576E8A74899753CB6316B7C20',
    icon: 'Ammo',
    type: 'Balanced',
    price: {
      credits: 8100,
      jadiz: 105,
      magnite: 70,
      bismor: 125,
    },
    effects: {
      buffs: ['+320 Max Ammo'],
      nerfs: ['-20 damage'],
    },
    description:
      'The electrical flow is reversed by adding a tiny module onto the battery, increasing the amount of power it can store. Unfortunately the reversed flow causes less energy to spin the coils, resulting in less damage.',
  },
  {
    name: 'The Mole',
    id: '56471F219BE014448DFE5F087CABD447',
    icon: 'BulletPenetration',
    type: 'Balanced',
    price: {
      credits: 8100,
      jadiz: 125,
      magnite: 70,
      enorPearl: 95,
    },
    effects: {
      buffs: [
        'Damage bonus for every terrain pierced',
        'Greater penetrability',
      ],
      nerfs: ['x0.8 Charge Speed'],
    },
    description:
      'R&D are proud of this one. A bullet that uses the traction from impacting with terrain to generate energy, making it travel further and do more damage. The extra energy required to fire The Mole comes with the cost of charge speed.',
  },
  {
    name: 'Hellfire',
    id: '80DEA90AD5F3174695138FF47A32A96A',
    icon: 'Heat',
    type: 'Unstable',
    price: {
      credits: 8700,
      croppa: 125,
      jadiz: 100,
      enorPearl: 80,
    },
    effects: {
      buffs: [
        'Ignites ground or other terrain within 2m of projectile trajectory',
        '+1m Trail Radius',
      ],
      nerfs: ['-200 Ammo', 'x0.7 Charge Speed', '-2s Trail Duration'],
    },
    description:
      'By using a highly volatile injection fuel the trail radius greatly increases and at a full charge pushes the temperature changes so high it heats up anything in it. The huge amounts of energy required reduces charge time and battery capacity, while shortening the trail duration.',
  },
  {
    name: 'Triple-Tech Chambers',
    id: 'A6751DA1B87C134EBC5710C7431C1453',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 8500,
      croppa: 125,
      magnite: 95,
      bismor: 70,
    },
    effects: {
      buffs: ['Fire off residue energy up to two times after shooting'],
      nerfs: ['+0.5 Reload Speed', 'x0.7 Charge Speed', 'Stronger recoil'],
    },
    description:
      "Prototype chamber tech that allows the weapon to fire off residual energy up to two times in quick succession after shooting, at half the cost and damage of a normal shot. The extra shots don't penetrate and the heavy modification takes a toll on the energy flow, reducing charge rate and reload speed.",
  },
];

export default CoilGunOverclocks;
