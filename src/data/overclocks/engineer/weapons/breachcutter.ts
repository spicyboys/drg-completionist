import type { Overclock } from 'types/overclock';

const BreachCutterOverclocks: Overclock[] = [
  {
    name: 'Light-Weight Cases',
    id: '96940C7CDCEFA84084DD4D60D2E81B2D',
    icon: 'Ammo',
    type: 'Clean',
    price: {
      credits: 8700,
      bismor: 130,
      croppa: 100,
      jadiz: 80,
    },
    effects: {
      buffs: ['+3 Max Ammo', '-0.2s Reload Time'],
      nerfs: [],
    },
    description: 'Bring more ammo with you and slam those cases in faster!',
  },
  {
    name: 'Roll Control',
    id: '05DB2FA3B969E04F8644F5BE6C204020',
    icon: 'SpinningLinecutter',
    type: 'Clean',
    price: {
      credits: 8150,
      croppa: 95,
      magnite: 80,
      umanite: 135,
    },
    effects: {
      buffs: ['+Roll Control'],
      nerfs: [],
    },
    description:
      'A few tweaks to the launcher cause it to add roll to the projectile after it is ejected, thus covering a larger area as it travels. Holding down the trigger as the line leaves the gun activates a remote connection which, on the release of the trigger, causes the line to stop rolling, letting you lock its orientation.',
  },
  {
    name: 'Stronger Plasma Current',
    id: '3D7C9C85F6D3A549A2D6EDB09918314B',
    icon: 'Damage',
    type: 'Clean',
    price: {
      credits: 8650,
      croppa: 100,
      jadiz: 140,
      magnite: 75,
    },
    effects: {
      buffs: ['+50 Beam DPS', '+0.5s Projectile Lifetime'],
      nerfs: [],
    },
    description:
      "By improving the node's efficiency, you can up the raw damage without too much fuss, and it lasts a bit longer, too!",
  },
  {
    name: 'Return to Sender',
    id: '744251ED25D4484AA38DFBDBF43BC5B9',
    icon: 'ForthAndBackLinecutter',
    type: 'Balanced',
    price: {
      credits: 7950,
      bismor: 140,
      enorPearl: 100,
      umanite: 80,
    },
    effects: {
      buffs: ['+Return to Sender'],
      nerfs: ['-6 Max Ammo'],
    },
    description:
      'Holding down the trigger after the line leaves the gun activates a remote connection which, on the release of the trigger, causes the line to change direction and move back towards the gun.',
  },
  {
    name: 'High Voltage Crossover',
    id: '7FA184CB9D21874D82BF9DDAFC7C91D7',
    icon: 'Electricity',
    type: 'Balanced',
    price: {
      credits: 8250,
      bismor: 120,
      enorPearl: 80,
      magnite: 100,
    },
    effects: {
      buffs: ['+High Voltage Crossover'],
      nerfs: ['-33% Magazine Size'],
    },
    description:
      'By passing an electric current through the plasma, the beam electrocutes anything it touches, but the bulky hardware limits magazine capacity.',
  },
  {
    name: 'Spinning Death',
    id: '340AFBC6C306044281013181E0026E1B',
    icon: 'Special',
    type: 'Unstable',
    price: {
      credits: 7300,
      bismor: 75,
      magnite: 95,
      umanite: 120,
    },
    effects: {
      buffs: [
        '+Spinning Death',
        '+150% Projectile Lifetime',
        '+1.5m Beam Width',
      ],
      nerfs: ['-75% Beam DPS', '-50% Max Ammo', '-70% Magazine Size'],
    },
    description:
      'These modified plasma nodes convert most of the forward momentum into angular momentum, streatching out the beam and continuously doing damage to the immediate area where it was launched. The nodes run for a longer duration but deal less damage every second. Due to the weight, both magazine and total capacity is greatly reduced.',
  },
  {
    name: 'Inferno',
    id: '8ED912F8267B844482EEDA86604451A5',
    icon: 'Heat',
    type: 'Unstable',
    price: {
      credits: 7550,
      croppa: 70,
      jadiz: 90,
      magnite: 135,
    },
    effects: {
      buffs: ['+Inferno'],
      nerfs: ['-175 Beam DPS', '-75% Armor Breaking'],
    },
    description:
      'Turn your Breach Cutter into a tool of burning death and destruction at the cost of armor breaking. As a bonus, the extreme internal heating keeps the targets burning for an extended period.',
  },
];

export default BreachCutterOverclocks;
