import type { Overclock } from 'types/overclock';

const ShardDiffractorOverclocks: Overclock[] = [
  {
    name: 'Efficiency Tweaks',
    id: 'F1432F121F68E04DA0C5DD8E50CF717D',
    icon: 'Ammo',
    type: 'Clean',
    price: {
      credits: 7650,
      croppa: 120,
      jadiz: 90,
      magnite: 70,
    },
    effects: {
      buffs: ['+50 Ammo Capacity', '+25 Charge Capacity'],
      nerfs: [],
    },
    description:
      'Careful tweaking has resulted in greater charge capacity, as well as an increase in total capacity.',
  },
  {
    name: 'Automated Beam Controller',
    id: '71D81BC3DBC28F4D905A6C9F4A8B55AE',
    icon: 'FireRate',
    type: 'Balanced',
    price: {
      credits: 8050,
      jadiz: 130,
      magnite: 65,
      bismor: 90,
    },
    effects: {
      buffs: ['+100 Ammo Capacity', '+4 Discharge Rate', '-0.2 Recharge Time'],
      nerfs: [
        '-20% Charge Capacity',
        'Beam Fires Until the Charge is Empty',
        'Lose 50% Remaining Charge on Stop',
      ],
    },
    description:
      'Removing manual control and automating the fire sequence improves speed of operation and allows for a significant expansion of the total battery capacity. However, the charge capacity had to be reduced to prevent overheating. Manually interrupting the beam stresses the capacitor, resulting in a loss of some of the remaining charge.',
  },
  {
    name: 'Feedback Loop',
    id: 'F1880C6F7BEF10478E77EE4FC63481F6',
    icon: 'Area',
    type: 'Balanced',
    price: {
      credits: 7200,
      magnite: 65,
      umanite: 100,
      enorPearl: 125,
    },
    effects: {
      buffs: ['+Feedback Loop'],
      nerfs: ['-100 Total Capacity'],
    },
    description:
      'Heavy modifications to the weapon keeps excess energy within the beam, increasing the radius and damage of the area of effect while the beam is fired. However, the changes leave little room for the battery, reducing the maximum energy capacity of the weapon.',
  },
  {
    name: 'Volatile Impact Reactor',
    id: '7BB7C21FA1D1E64A8C007CE6A023A412',
    icon: 'Special',
    type: 'Balanced',
    price: {
      credits: 8300,
      magnite: 125,
      enorPearl: 105,
      bismor: 65,
    },
    effects: {
      buffs: ['+Volatile Impact'],
      nerfs: ['-50% Area Radius', '-50% Charge Capacity'],
    },
    description:
      'A mixture of high energy and atomic frequency tuning lets you temporarily turn dirt and rock into magma, damaging and potentially igniting any enemy that walks across it.',
  },
  {
    name: 'Plastcrete Catalyst',
    id: 'D330723969BCE44CB1EBE9009A2F6E0D',
    icon: 'Explosion',
    type: 'Unstable',
    price: {
      credits: 7950,
      croppa: 110,
      jadiz: 125,
      magnite: 75,
    },
    effects: {
      buffs: ['+Plastcrete Explosion', 'Damage/Range Boost'],
      nerfs: ['-50 Total Capacity', '+0.8s Recharge Time'],
    },
    description:
      'The beam has been finely tuned to violently react with plascrete platforms, significantly increasing AoE damage and range. If the beam is held long enough the reaction becomes unstable, causing a powerful explosion damaging everything in a wide area. The tweaks reduce total capacity and come with a limited charge rate to avoid frying the circuits.',
  },
  {
    name: 'Overdrive Booster',
    id: '187A18BA5283D24C905A37F4FB123BA0',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7900,
      croppa: 110,
      jadiz: 75,
      bismor: 120,
    },
    effects: {
      buffs: ['+Overdrive Booster'],
      nerfs: [
        'Cannot Move While Boosting',
        'Longer Recharge After Boosting',
        'Boosted Beam Fires Until Empty',
      ],
    },
    description:
      'Drastically increases the energy throughput by pressing the reload button while a beam is firing. Unfortunately, maintaining control requires that you stand still while firing a boosted beam, and the weapon cannot stop firing once boosted until the capacitor is fully discharged. Manually interrupting the beam stresses the capacitor, resulting in a loss of some of the remaining charge.',
  },
];

export default ShardDiffractorOverclocks;
