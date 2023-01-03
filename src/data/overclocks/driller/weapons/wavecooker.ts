import type { Overclock } from 'types/overclock';

const WaveCookerOverclocks: Overclock[] = [
  {
    name: 'Liquid Cooling System',
    id: '5F614059B3ADA14E930831EF4B609802',
    icon: 'Damage',
    type: 'Clean',
    price: {
      credits: 7400,
      jadiz: 65,
      umanite: 95,
      bismor: 125,
    },
    effects: {
      buffs: ["-10% Heat Generation", "+17% Cooling Rate", "-0.2s Overheat Duration"],
      nerfs: [],
    },
    description:
      'Extremely efficient cooling system that helps the weapon generate slightly less heat, makes it cool faster and will spend less time jammed.',
  },
  {
    name: 'Super Focus Lens',
    id: '79A870ED00C9814A942BE4AD49A10B63',
    icon: 'Damage',
    type: 'Clean',
    price: {
      credits: 7550,
      croppa: 80,
      jadiz: 105,
      bismor: 130,
    },
    effects: {
      buffs: ["1.5x Damage to targets within 4 meters"],
      nerfs: [],
    },
    description:
      'A lens add-on that focuses the microwaves significantly, enhancing their damage output for up to 4 meters.',
  },
  {
    name: 'Diffusion Ray',
    id: '0CD9E18B85E271449901D38D50BA62B4',
    icon: 'Damage',
    type: 'Balanced',
    price: {
      credits: 8300,
      croppa: 105,
      magnite: 130,
      umanite: 65,
    },
    effects: {
      buffs: ["+3 Penetrations on each enemy", "0.2x Movespeed on hit"],
      nerfs: ["-1 Damage"],
    },
    description:
      'With some mechanical stress to the heat generator the microwaves can penetrate deeper, being able to go through several enemies at once and slows them down. However the stress takes its toll on the generator and decreases its damage output slightly.',
  },
  {
    name: 'Mega Power Supply',
    id: 'A3E85790ABCBC74ABCCB3CC636509A1B',
    icon: 'Damage',
    type: 'Balanced',
    price: {
      credits: 8100,
      croppa: 95,
      magnite: 65,
      umanite: 140,
    },
    effects: {
      buffs: ["+100 Magazine Size", "+3 Rate of Fire"],
      nerfs: ["-50% Cooling Rate", "+1s Overheat Duration"],
    },
    description:
      'A bit on the larger side, but with a few modifications to the weapon you can now use the most powerful power source R&D could smuggle back from the black market. The extra energy boosts rate of fire and total ammo at the cost of a lower cooldown and longer unjam duration.',
  },
  {
    name: 'Blistering Necrosis',
    id: '48648832AA11E04DAE9F2E8ADF89AD8D',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7850,
      croppa: 130,
      magnite: 100,
      bismor: 70,
    },
    effects: {
      buffs: ["10% Chance to spawn blisters on hit"],
      nerfs: ["1.25x Weapon Heat generation", "0.75x Cooling Rate "],
    },
    description:
      'Adding an experimental electron tube makes the microwaves generate more heat, boiling the skin of enemies in the shape of large blisters. The blisters bypass armor, enhances incoming direct damage and hurts the target when popped. The large amounts of heat generated comes at the price of a lower cooldown rate.',
  },
  {
    name: 'Gamma Contamination',
    id: '5EDD2987DB047F498ADD72FCEB6C1EE3',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 8350,
      magnite: 80,
      enorPearl: 130,
      bismor: 100,
    },
    effects: {
      buffs: ["25% Chance to irradiate an enemy on hit"],
      nerfs: ["-1 Beam Damage", "-50 Magazine Size", "-50 Shot Width"],
    },
    description:
      'Installing a lens of uranium glass cranks the radioactivity of your microwaves to 11. Hit targets have a chance to be contaminated with radiation, suffering damage and emitting harmful radioactive waves to nearby enemies. The small size of the lens reduces microwave impact radius and damage, while the amount of power required reduces total ammo.',
  },
];

export default WaveCookerOverclocks;
