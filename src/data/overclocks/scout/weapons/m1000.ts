import type { Overclock } from 'types/overclock';

const M1000Overclocks: Overclock[] = [
  {
    name: 'Hoverclock',
    id: '8A0122E44E42104BAAAD6B4534A9DE8F',
    icon: 'Slowdown',
    type: 'Clean',
    price: {
      credits: 7350,
      bismor: 105,
      croppa: 135,
      jadiz: 65,
    },
    effects: {
      buffs: ['+Focus Shot Hover'],
      nerfs: [],
    },
    description:
      'Your movement slows down for a few seconds while using focus mode in the air.',
  },
  {
    name: 'Minimal Clips',
    id: 'D006E3EEE0540242A2B0BCA8ABCDB387',
    icon: 'Ammo',
    type: 'Clean',
    price: {
      credits: 8200,
      enorPearl: 95,
      jadiz: 130,
      magnite: 75,
    },
    effects: {
      buffs: ['+25% Clip Size', '-0.2s Reload Time'],
      nerfs: [],
    },
    description:
      'Increase clip capacity and speed up reloads by getting rid of dead weight on the clips.',
  },
  {
    name: 'Active Stability System',
    id: 'D1544B3528938A48964E8D9A6309D1DA',
    icon: 'MovementSpeed',
    type: 'Balanced',
    price: {
      credits: 8150,
      bismor: 90,
      magnite: 70,
      umanite: 135,
    },
    effects: {
      buffs: ['+70% Focus Mode Movement Speed', '+20% Focus Speed'],
      nerfs: ['+0.5s Reload Time'],
    },
    description:
      'Focus faster and without slowing down, but all that fancy tech limits how quickly you can reload.',
  },
  {
    name: 'Hipster',
    id: '2A12358F750B704996C37D467ECF1D36',
    icon: 'Aim',
    type: 'Balanced',
    price: {
      credits: 8900,
      croppa: 125,
      enorPearl: 105,
      umanite: 80,
    },
    effects: {
      buffs: ['+91% Max Ammo', '+3 Rate of Fire', '-50% Recoil'],
      nerfs: ['-17 Damage'],
    },
    description:
      'A less powerful round together with a rebalancing of weight distribution, enlarged vents, and a reshaped grip result in a rifle that is more controllable when hip-firing in quick succession, but at the cost of pure damage output. As an added bonus, you can carry more of the new ammunition.',
  },
  {
    name: 'Electrocuting Focus Shots',
    id: 'AAC9B6E4458458478E50DB87324097EB',
    icon: 'Electricity',
    type: 'Unstable',
    price: {
      credits: 8850,
      bismor: 120,
      croppa: 95,
      umanite: 75,
    },
    effects: {
      buffs: ['+Electrocuting Focus Shots'],
      nerfs: ['-25% Focus Shot Damage Bonus'],
    },
    description:
      'Embedded capacitors in a copper core carry the electric charge from the EM coils used for focus shots and will electrocute the target at the cost of a reduced focus shot damage bonus.',
  },
  {
    name: 'Supercooling Chamber',
    id: '1073CEEBECBC014E8370E259040EB71C',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 8500,
      enorPearl: 90,
      jadiz: 130,
      magnite: 70,
    },
    effects: {
      buffs: ['+125% Focused Shot Damage Bonus'],
      nerfs: ['-33% Max Ammo', '-40% Focus Speed', 'No Movement in Focus Mode'],
    },
    description:
      "Takes the M1000's focus mode to the extreme by supercooling the rounds before firing to improve their acceleration through the coils, but the extra coolant in the clips limits how much ammo you can bring.",
  },
];

export default M1000Overclocks;
