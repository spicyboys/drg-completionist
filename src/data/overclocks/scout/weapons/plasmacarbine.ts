import type { Overclock } from 'types/overclock';

const PlasmaCarbineOverclocks: Overclock[] = [
  {
    name: 'Aggressive Venting',
    id: 'D831B000F2A2C84C8749A5B182348574',
    icon: 'Special',
    type: 'Clean',
    price: {
      credits: 8000,
      croppa: 95,
      enorPearl: 80,
      bismor: 130,
    },
    effects: {
      buffs: ['Burn AoE on Overheat', '-20% Overheat Duration'],
      nerfs: [],
    },
    description:
      'Directional vents burn everything around you and send enemies running when the weapon overheats. They also reduce the overheat recovery time.',
  },
  {
    name: 'Thermal Liquid Coolant',
    id: '00EA09DA14DA7646982DD5A1B2467A08',
    icon: 'Cooldown',
    type: 'Clean',
    price: {
      credits: 8100,
      umanite: 130,
      enorPearl: 105,
      bismor: 75,
    },
    effects: {
      buffs: ['+25% Cooling Rate', '-15% Heat per Shot'],
      nerfs: [],
    },
    description:
      'With a liquid coolant fitted to the weapons thermal system, it transfers heat more efficiently, accelerating its cooling rate and reducing heat per shot.',
  },
  {
    name: 'Impact Deflection',
    id: '1BD74059739E094BBE0A3B79F2E94B46',
    icon: 'Ricochet',
    type: 'Balanced',
    price: {
      credits: 7950,
      croppa: 60,
      jadiz: 140,
      umanite: 105,
    },
    effects: {
      buffs: ['+1 Projectile Bounce (Terrain or Enemies)'],
      nerfs: ['-2 Rate of Fire'],
    },
    description:
      'Tinkering with the particle density makes your projectiles react on impact with armor and surfaces, making them bounce up to 2 times! However the rate of fire needs to be reduced to keep the gun from exploding in your hands.',
  },
  {
    name: 'Rewiring Mod',
    id: '5ABF1C487BF3BD4BAFDAF2A4428720EC',
    icon: 'Ammo',
    type: 'Balanced',
    price: {
      credits: 8200,
      croppa: 65,
      jadiz: 110,
      bismor: 130,
    },
    effects: {
      buffs: ['Regenerate Ammo while Overheated'],
      nerfs: ['+30% Overheat Duration', '-30% Battery Capacity'],
    },
    description:
      'By rewiring the thermal systems into a secondary cell and connecting it to the primary battery, your weapon can convert the energy from overheating into ammo. However this reduces the maximum capacity of the primary battery significantly.',
  },
  {
    name: 'Overtuned Particle Accelerator',
    id: '9225769777355041BDEB70CACD946A27',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7200,
      jadiz: 65,
      umanite: 120,
      bismor: 100,
    },
    effects: {
      buffs: ['+8 Direct Damage'],
      nerfs: [
        '-20% Battery Capacity',
        '+50% Heat per Shot',
        'Increased Base Spread',
      ],
    },
    description:
      'The particle accelerator has been tuned way over safety standards to push the damage output to the limit! The modifications comes at the cost of overall stability of the weapon and increased heat generation.',
  },
  {
    name: 'Shield Battery Booster',
    id: '532714B803867C4F8AA6EA78FA4EAAEA',
    icon: 'Resistance',
    type: 'Unstable',
    price: {
      credits: 8850,
      jadiz: 120,
      magnite: 105,
      bismor: 65,
    },
    effects: {
      buffs: [
        '+Damage and Projectile Speed at Full Shield',
        '+1 Rate of Fire',
        '+100 Battery Capacity',
      ],
      nerfs: [
        '-50% Cooling Rate',
        '+50% Heat per Shot',
        '+100% Overheat Duration',
        'Overheating Disables Shield',
      ],
    },
    description:
      'Plugging your shield directly into the weapon battery boosts the plasma feed and density significantly while at full shield and improves total ammo and rate of fire at all times. However, the extra energy generates more heat, and overheating the weapon will short circuit your shield.',
  },
  {
    name: 'Thermal Exhaust Feedback',
    id: 'BFFE0C3436AC584D890B6EFE9124AAF1',
    icon: 'Heat',
    type: 'Unstable',
    price: {
      credits: 7500,
      jadiz: 100,
      umanite: 75,
      bismor: 140,
    },
    effects: {
      buffs: ['Up to +6 Damage/Heat at >50% Heat'],
      nerfs: ['+0.8s Overheat Duration', '+20% Heat per Shot'],
    },
    description:
      'Feeding the thermal exhaust back into the system transfers the heat generated after a 50% threshold to the plasma, making it increasingly hot. The modifications means more heat generated, and it takes longer to get rid of while overheating.',
  },
];

export default PlasmaCarbineOverclocks;
