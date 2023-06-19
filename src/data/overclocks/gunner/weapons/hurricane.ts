import type { Overclock } from 'types/overclock';

const HurricaneOverclocks: Overclock[] = [
  {
    name: 'Overtuned Feed Mechanism',
    id: '2A257648DF688844BA3DB091A3756BA5',
    icon: 'FireRate',
    type: 'Clean',
    price: {
      credits: 8950,
      croppa: 65,
      jadiz: 105,
      magnite: 130,
    },
    effects: {
      buffs: ['+20% Max Velocity', '+1 Rate of Fire'],
      nerfs: [],
    },
    description:
      'With some slight tinkering, both your weapon and projectiles are faster.',
  },
  {
    name: 'Fragmentation Missiles',
    id: '1E41880C9E18FC439B82B69F19F0A191',
    icon: 'Area',
    type: 'Clean',
    price: {
      credits: 7150,
      croppa: 135,
      jadiz: 60,
      bismor: 100,
    },
    effects: {
      buffs: ['+2 Area Damage', '+0.5m AoE Radius'],
      nerfs: [],
    },
    description:
      'With a thicker casing your missiles spread more fragments at higher speeds, increasing AoE efficiency',
  },
  {
    name: 'Plasma Burster Missiles',
    id: '01CD9AAD2398FB46818A3F6F6A96384A',
    icon: 'BulletPenetration',
    type: 'Balanced',
    price: {
      credits: 8500,
      croppa: 105,
      umanite: 140,
      enorPearl: 80,
    },
    effects: {
      buffs: [
        '+Plasma Burster Missiles',
        '+33% Turn Rate',
        'Each Missile Hits Up to 7 Times',
        "Guided Missiles Can't Hit Ground",
      ],
      nerfs: [
        '-50% Direct Damage',
        '-50% Area Damage',
        '-50% AoE Radius',
        '-25% Max Velocity',
        '-108 Max Ammo',
      ],
    },
    description:
      "Turn the battlefield into a plasma apocalypse with these penetrating multi-burst missiles! They fly slower, don't hit as hard, and there is a limit to how many can be controlled at one time, but in the right hands even a single missile can do a lot of damage.",
  },
  {
    name: 'Minelayer System',
    id: 'C873E29A463E4F4DAD4821D92BC31FB4',
    icon: 'Special',
    type: 'Balanced',
    price: {
      credits: 7500,
      croppa: 125,
      enorPearl: 90,
      bismor: 80,
    },
    effects: {
      buffs: ['+Minelayer System'],
      nerfs: ['Missiles Cannot Be Guided', '-36 Max Ammo'],
    },
    description:
      'When your missiles hit the ground, they are planted as mines that explode when damaged or when enemies are in close proximity. When setup as mines the warheads explode with significantly more force over a larger area, but keep in mind that these missiles do not have guidance. The total ammo capacity is slightly reduced.',
  },
  {
    name: 'Jet Fuel Homebrew',
    id: 'C24639FB04A00949BE8F00CD38462B84',
    icon: 'ProjectileSpeed',
    type: 'Unstable',
    price: {
      credits: 7250,
      jadiz: 130,
      umanite: 130,
      bismor: 70,
    },
    effects: {
      buffs: [
        '+150% Direct Damage',
        '+50% Max Velocity',
        'Projectiles Start at Max Speed',
      ],
      nerfs: [
        '-50% Area Damage',
        '-0.5m AoE Radius',
        '-25% Magazine Size',
        '-72 Max Ammo',
      ],
    },
    description:
      "Grandpa's recipe. Highly unstable and heavy, but works like a charm! Your missiles get a much higher top speed and reach it instantly. The extra energy greatly improves direct damage but all that extra fuel reduces the missile payload capacity. Due to the extra weight both magazine and total ammo capacity are also reduced.",
  },
  {
    name: 'Rocket Barrage',
    id: '8E6816C3DAEE2C49B93E8FA67CF13B1A',
    icon: 'Distance',
    type: 'Unstable',
    price: {
      credits: 7050,
      jadiz: 105,
      umanite: 130,
      bismor: 75,
    },
    effects: {
      buffs: ['+200% Rate of Fire', '+216 Max Ammo', '-50% Base Spread'],
      nerfs: ['-8 Direct Damage', '-9 Area Damage'],
    },
    description:
      "Sometimes it's quantity over quality. A revamped loading mechanism launches missiles faster than ever, but the smaller missiles don't do as much damage.",
  },
  {
    name: 'Salvo Module',
    id: '52DE47B5A2579E418564F19382240866',
    icon: 'ShotgunBlast',
    type: 'Unstable',
    price: {
      credits: 8650,
      jadiz: 110,
      umanite: 130,
      enorPearl: 65,
    },
    effects: {
      buffs: [
        'Hold Trigger to Load Salvo (Up to 9)',
        'Velocity Increases with Missile Count',
        'Damage Increases with Missile Count',
      ],
      nerfs: ['Missiles Cannot Be Guided'],
    },
    description:
      'Enables your weapon to load up to 9 missiles and launch them at once! As an added bonus, the overloaded exhaust ports increase missile velocity and boost their damage based on how many missiles are in the salvo. However, the missiles in the salvo cannot be guided.',
  },
];

export default HurricaneOverclocks;
