import type { Overclock } from 'types/overclock';

const BurstFireGunOverclocks: Overclock[] = [
  {
    name: 'Composite Casings',
    id: '6F26A8B49F967C4D999F734645EAE2C4',
    icon: 'FireRate',
    type: 'Clean',
    price: {
      credits: 7950,
      croppa: 140,
      enorPearl: 75,
      magnite: 100,
    },
    effects: {
      buffs: ['+36 Max Ammo', '+1 Rate of Fire'],
      nerfs: [],
    },
    description:
      "Lighter rounds that permit a shorter delay between bursts, and you can carry a few more of them as well. What's not to like?",
  },
  {
    name: 'Full Chamber Seal',
    id: '414916957AD3D0409B5FE3692A46DD19',
    icon: 'Damage',
    type: 'Clean',
    price: {
      credits: 7850,
      bismor: 120,
      jadiz: 75,
      magnite: 110,
    },
    effects: {
      buffs: ['+1 Damage', '-0.2s Reload Time'],
      nerfs: [],
    },
    description:
      'Meticulous sealing lets you get a bit more power out of each round, and the attention to detail improves how easily the magazine slots in.',
  },
  {
    name: 'Compact Mags',
    id: '2FF3D4C92D59304592009FA2E39BFFC6',
    icon: 'Ammo',
    type: 'Balanced',
    price: {
      credits: 7350,
      jadiz: 75,
      magnite: 135,
      umanite: 105,
    },
    effects: {
      buffs: ['+84 Max Ammo'],
      nerfs: ['-1 Rate of Fire', '+0.4s Reload Time'],
    },
    description:
      'You can carry even more ammo, but the rate of fire needs to be toned back to avoid a jam, and please take more care while reloading.',
  },
  {
    name: 'Experimental Rounds',
    id: '88ABD40A78329942884C00D7F22DAC90',
    icon: 'Damage',
    type: 'Balanced',
    price: {
      credits: 8550,
      enorPearl: 100,
      jadiz: 75,
      magnite: 130,
    },
    effects: {
      buffs: ['+9 Damage'],
      nerfs: ['-30 Max Ammo', '-6 Magazine Size'],
    },
    description:
      'A new shape to the bullet delivers a lot more damage, but its odd size means fewer rounds in the clip and a bit less ammo overall.',
  },
  {
    name: 'Electro Minelets',
    id: '4A4F93FE1AC31E41B897C1F1B264A672',
    icon: 'Electricity',
    type: 'Unstable',
    price: {
      credits: 7450,
      enorPearl: 80,
      jadiz: 95,
      umanite: 120,
    },
    effects: {
      buffs: ['+Electro Minelets'],
      nerfs: ['-2 Damage', '-12 Magazine Size'],
    },
    description:
      "After impacting terrain, these high-tech bullets convert in to electro-minelets that will electrocute anything unfortunate enough to come close. However, they don't last forever, and the rounds themselves take more space in the clip and deal less direct damage.",
  },
  {
    name: 'Micro Flechettes',
    id: '8F1C6A1A23A6DF4CBCA5510C4A19F221',
    icon: 'SmallBullets',
    type: 'Unstable',
    price: {
      credits: 7650,
      bismor: 80,
      jadiz: 100,
      magnite: 130,
    },
    effects: {
      buffs: [
        '+100% Max Ammo',
        '+30 Magazine Size',
        '-50% Recoil',
        '-50% Spread per Shot',
      ],
      nerfs: ['-11 Damage'],
    },
    description:
      'Convert the BRT to fire small flechettes instead of slugs. Increases overall ammo and magazine size as well as reducing recoil, but at the cost of raw damage.',
  },
  {
    name: 'Lead Spray',
    id: 'F1AE55CF592E7746A0001D61584BDF2A',
    icon: 'Special',
    type: 'Unstable',
    price: {
      credits: 8050,
      bismor: 125,
      magnite: 75,
      umanite: 105,
    },
    effects: {
      buffs: ['+50% Damage'],
      nerfs: ['+300% Base Spread'],
    },
    description:
      "It ain't pretty, but this overclock will tear apart anything that gets close, though it gets a bit iffy at range",
  },
];

export default BurstFireGunOverclocks;
