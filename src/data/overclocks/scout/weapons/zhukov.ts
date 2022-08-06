import type { Overclock } from 'types/overclock';

const ZhukovOverclocks: Overclock[] = [
  {
    name: 'Minimal Magazines',
    id: '98A0452B235402459CFF5CC3B34CCC69',
    icon: 'ReloadSpeed',
    type: 'Clean',
    price: {
      credits: 8450,
      bismor: 130,
      croppa: 100,
      jadiz: 70,
    },
    effects: {
      buffs: ['+1 Combined Rate of Fire', '-0.4s Reload Time'],
      nerfs: [],
    },
    description:
      "By filling away unnecessary material from the magazines you've made them lighter, and that means they pop out faster when reloading.Also the rounds can move more freely increasing the max rate of fire slightly.",
  },
  {
    name: 'Custom Casings',
    id: '24A286C31F45EA469A20102AF4D741D3',
    icon: 'ClipSize',
    type: 'Balanced',
    price: {
      credits: 7700,
      bismor: 95,
      croppa: 75,
      enorPearl: 140,
    },
    effects: {
      buffs: ['+30 Combined Clip Size'],
      nerfs: ['-2 Combined Rate of Fire'],
    },
    description:
      'Fit more of these custom rounds in each magazine, but at small reduction in the rate of fire.',
  },
  {
    name: 'Cryo Minelets',
    id: '43CD8D27EAEAAA4A8E6DC43E0438A10C',
    icon: 'Cold',
    type: 'Unstable',
    price: {
      credits: 7300,
      croppa: 65,
      magnite: 135,
      umanite: 95,
    },
    effects: {
      buffs: ['+Cryo Minelets (10 Cold Damage Each)'],
      nerfs: ['-1 Damage', '-10 Combined Clip Size'],
    },
    description:
      "After impacting terrain, these high-tech bullets convert into cryo-minelets that will super-cool anything that comes close. However, they don't last forever and the rounds themselves take more space in the clip and deal less direct damage.",
  },
  {
    name: 'Embedded Detonators',
    id: 'FAF35071BA63B2429855FBC8A09BFFD0',
    icon: 'SpecialMagazine',
    type: 'Unstable',
    price: {
      credits: 7550,
      jadiz: 135,
      magnite: 65,
      umanite: 90,
    },
    effects: {
      buffs: ['+Embedded Detonators'],
      nerfs: ['-6 Damage', '-20 Combined Clip Size', '-400 Max Ammo'],
    },
    description:
      'Special bullets contain micro-explosives that detonate when you reload the weapon at the cost of total ammo, magazine capacity, and direct damage.',
  },
  {
    name: 'Gas Recycling',
    id: '828B2BBC50EC424385EFD00EA6854597',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7800,
      enorPearl: 70,
      jadiz: 105,
      magnite: 125,
    },
    effects: {
      buffs: ['+5 Damage'],
      nerfs: [
        'No Weakpoint Damage Bonus',
        '+50% Base Spread',
        '-50% Movement Speed While Using',
      ],
    },
    description:
      'Specially hardened bullets combined with rerouting escaping gasses back into the chamber greatly increases the raw damage of the weapon, but makes it more difficult to control and removes any bonus to weakpoint hits.',
  },
];

export default ZhukovOverclocks;
