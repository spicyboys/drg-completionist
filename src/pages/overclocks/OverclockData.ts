import * as frames from 'assets/overclocks/frames';
import * as icons from 'assets/overclocks/icons';
import { Currency } from 'utils/currency';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

// All currencies are optional except credits
type Price = Partial<Record<Currency, number>> & { credits: number };

type Effects = {
  buffs: string[];
  nerfs: string[];
};

export type Overclock = {
  name: string;
  type: keyof typeof frames;
  icon: keyof typeof icons;
  price: Price;
  effects: Effects;
  description: string;
};

type Overclocks = {
  [K in Miner]: Record<MinerWeapon<K>, Overclock[]>;
};

export const overclocks: Overclocks = {
  [Miner.Driller]: {
    'CRSPR Flamethrower': [
      {
        name: 'Lighter Tanks',
        icon: 'Ammo',
        type: 'Clean',
        price: {
          credits: 7500,
          bismor: 125,
          croppa: 75,
          umanite: 90,
        },
        effects: {
          buffs: ['+75 Max Fuel'],
          nerfs: [],
        },
        description: 'Lighter-weight gear means more fuel and sandwiches.',
      },
      {
        name: 'Sticky Additive',
        icon: 'DurationHourglass',
        type: 'Clean',
        price: {
          credits: 8250,
          bismor: 80,
          jadiz: 130,
          magnite: 100,
        },
        effects: {
          buffs: ['+1 Damage', '+1s Sticky Flame Duration'],
          nerfs: [],
        },
        description:
          'Special additive compound extends the Sticky Flame duration and increases direct damage.',
      },
      {
        name: 'Compact Feed Valves',
        icon: 'ClipSize',
        type: 'Balanced',
        price: {
          credits: 7350,
          bismor: 70,
          jadiz: 90,
          umanite: 130,
        },
        effects: {
          buffs: ['+25 Tank Size'],
          nerfs: ['-2m Flame Reach'],
        },
        description:
          'The smaller mechanism leaves room to increase tank capacity at the cost of operational range.',
      },
      {
        name: 'Fuel Stream Diffuser',
        icon: 'Distance',
        type: 'Balanced',
        price: {
          credits: 7100,
          bismor: 100,
          enorPearl: 80,
          jadiz: 125,
        },
        effects: {
          buffs: ['+5m Flame Reach'],
          nerfs: ['-20% Fuel Flow Rate'],
        },
        description:
          'Increases operation range, but decreases the fuel flow rate.',
      },
      {
        name: 'Face Melter',
        icon: 'Damage',
        type: 'Unstable',
        price: {
          credits: 7000,
          croppa: 130,
          enorPearl: 70,
          magnite: 90,
        },
        effects: {
          buffs: ['+2 Damage', '+30% Rate of Fire'],
          nerfs: ['-75 Max Fuel', 'x0.5 Movement Speed While Using'],
        },
        description:
          'This crazy bit of tweaking will give a boost in damage, but at the cost of both mobility and fuel.',
      },
      {
        name: 'Sticky Fuel',
        icon: 'DurationHourglass',
        type: 'Unstable',
        price: {
          credits: 8800,
          enorPearl: 110,
          jadiz: 140,
          magnite: 75,
        },
        effects: {
          buffs: ['+5 Sticky Flame Damage', '+6s Sticky Flame Duration'],
          nerfs: ['-25 Tank Size', '-75 Max Fuel'],
        },
        description:
          'Special fuel mixture extends the duration and damage of Sticky Flames, but at the cost of tank capacity and total fuel.',
      },
    ],
    'Cryo Cannon': [
      {
        name: 'Improved Thermal Efficiency',
        icon: 'ClipSize',
        type: 'Clean',
        price: {
          credits: 8350,
          croppa: 125,
          enorPearl: 70,
          magnite: 110,
        },
        effects: {
          buffs: ['+25 Tank Capacity', 'x0.75 Pressure Drop Rate'],
          nerfs: [],
        },
        description:
          'Get all you can from your fuel and lose pressure slower from the main chamber.',
      },
      {
        name: 'Perfectly Tuned Cooler',
        icon: 'Cold',
        type: 'Clean',
        price: {
          credits: 8750,
          bismor: 110,
          magnite: 65,
          umanite: 130,
        },
        effects: {
          buffs: ['+1 Freezing Power', '+10% Flow Rate'],
          nerfs: [],
        },
        description: 'Freeze things faster, no strings attached.',
      },
      {
        name: 'Flow Rate Expansion',
        icon: 'Duration',
        type: 'Balanced',
        price: {
          credits: 8900,
          enorPearl: 70,
          jadiz: 100,
          magnite: 125,
        },
        effects: {
          buffs: ['x2.7 Pressure Gain Rate', '+10% Flow Rate'],
          nerfs: ['x2.25 Pressure Drop Rate'],
        },
        description:
          'A low-volume, high-pressure chamber paired with a high-power pump increases the flow rate and repressurization speed, but lower the max duration of sustained flow.',
      },
      {
        name: 'Ice Spear',
        icon: 'ProjectileSpeed',
        type: 'Balanced',
        price: {
          credits: 8950,
          enorPearl: 60,
          jadiz: 130,
          umanite: 110,
        },
        effects: {
          buffs: ['+Ice Spear'],
          nerfs: ['+1s Repressurization Delay'],
        },
        description:
          'Pressing the reload button dumps all the fluid in the chamber directly into the turbine, flash-freezing it and launching an ice projectile. Side effects include an increased recharge delay and, of course, the large amount of fuel used.',
      },
      {
        name: 'Ice Storm',
        icon: 'Damage',
        type: 'Unstable',
        price: {
          credits: 7200,
          enorPearl: 130,
          magnite: 105,
          umanite: 75,
        },
        effects: {
          buffs: ['x2.0 Damage'],
          nerfs: [
            '-3 Freezing Power',
            '-50 Tank Capacity',
            'x1.5 Pressure Drop Rate',
          ],
        },
        description:
          "A change in the fuel mixture along with some heavy cooler unit tweaks means that you'll be doing less freezing and more killing with razor-sharp ice shards. However, the capacity of the pressure chamber suffers.",
      },
      {
        name: 'Snowball',
        icon: 'Area',
        type: 'Unstable',
        price: {
          credits: 8400,
          jadiz: 90,
          magnite: 70,
          umanite: 130,
        },
        effects: {
          buffs: ['+Snowball'],
          nerfs: ['-100 Tank Capacity', '+1 Repressurization Delay'],
        },
        description:
          'Pressing the reload button shoots all the cryofuel in the chamber at once as an AoE cryo-projectile. Besides the very large amount of fuel consumed, the operation overloads the whole system, resulting in a much longer delay before regaining pressure, and the modifications restrict the total amount of fuel you can carry.',
      },
    ],
    'Subata 120': [
      {
        name: 'Chain Hit',
        icon: 'Ricochet',
        type: 'Clean',
        price: {
          credits: 7600,
          bismor: 65,
          croppa: 120,
          jadiz: 100,
        },
        effects: {
          buffs: ['+50% Weakpoint Chain Hit Chance'],
          nerfs: [],
        },
        description:
          'Any shot that hits a weakspot has a chance to ricochet into a nearby enemy.',
      },
      {
        name: 'Homebrew Powder',
        icon: 'Chance',
        type: 'Clean',
        price: {
          credits: 7150,
          bismor: 135,
          croppa: 100,
          magnite: 70,
        },
        effects: {
          buffs: ['+Randomized Damage (between x0.8 and x1.4 Damage)'],
          nerfs: [],
        },
        description: "More damage on average, but it's a bit inconsistent.",
      },
      {
        name: 'Oversized Magazine',
        icon: 'ClipSize',
        type: 'Balanced',
        price: {
          credits: 9000,
          croppa: 70,
          jadiz: 110,
          umanite: 130,
        },
        effects: {
          buffs: ['+10 Magazine Size'],
          nerfs: ['+0.5s Reload Time'],
        },
        description:
          "Custom magazine that can fit a lot more ammo, but it's a bit unwieldy and takes longer to reload. ",
      },
      {
        name: 'Automatic Fire',
        icon: 'FireRate',
        type: 'Unstable',
        price: {
          credits: 7400,
          bismor: 95,
          croppa: 65,
          enorPearl: 120,
        },
        effects: {
          buffs: ['+Automatic Fire', '+2 Rate of Fire'],
          nerfs: ['+100% Base Spread', '+250% Recoil'],
        },
        description: 'Fully automatic action, but watch out for the recoil.',
      },
      {
        name: 'Explosive Reload',
        icon: 'SpecialMagazine',
        type: 'Unstable',
        price: {
          credits: 8100,
          enorPearl: 95,
          magnite: 65,
          umanite: 125,
        },
        effects: {
          buffs: ['+Explosive Reload'],
          nerfs: ['x0.5 Max Ammo', 'x0.5 Magazine Size'],
        },
        description:
          'Micro-explosives that explode inside hit targets when you reload. However, these fancy bullets come at the cost of total ammo and magazine capacity.',
      },
      {
        name: 'Tranquilizer Rounds',
        icon: 'Stun',
        type: 'Unstable',
        price: {
          credits: 7150,
          croppa: 95,
          jadiz: 135,
          umanite: 75,
        },
        effects: {
          buffs: ['+50% Stun Chance'],
          nerfs: ['-4 Magazine Size', '-4 Rate of Fire'],
        },
        description:
          'Part-bullet, part-syringe: these rounds are very effective at stunning most enemies.',
      },
    ],
    'Experimental Plasma Charger': [
      {
        name: 'Energy Rerouting',
        icon: 'ChargeUp',
        type: 'Clean',
        price: {
          credits: 7300,
          bismor: 130,
          jadiz: 100,
          umanite: 65,
        },
        effects: {
          buffs: ['+16 Battery Capacity', 'x1.5 Charge Speed'],
          nerfs: [],
        },
        description:
          'A masterwork of engineering that improves charge speed and energy efficiency without affecting overall performance!',
      },
      {
        name: 'Magnetic Cooling Unit',
        icon: 'Cooldown',
        type: 'Clean',
        price: {
          credits: 8900,
          croppa: 95,
          jadiz: 80,
          umanite: 125,
        },
        effects: {
          buffs: ['+25% Cooling Rate', 'x0.7 Heat Buildup When Charged'],
          nerfs: [],
        },
        description:
          'A high-tech solution to cleanly improve the cooling rate. The result is an increased number of shots that can be fired before overheating, a faster recovery from an overheat, and an extended duration that a full charge can be maintained.',
      },
      {
        name: 'Heat Pipe',
        icon: 'Fuel',
        type: 'Balanced',
        price: {
          credits: 7450,
          bismor: 60,
          jadiz: 95,
          umanite: 125,
        },
        effects: {
          buffs: ['-2 Charged Shot Ammo Use', 'x1.3 Charge Speed'],
          nerfs: ['x1.5 Normal Shot Heat Generation'],
        },
        description:
          'By channeling exhaust heat back into the charge chamber, a shot can be charged faster while using less energy. This does, however, make the weapon less efficient at dissipating heat from normal shots.',
      },
      {
        name: 'Heavy Hitter',
        icon: 'Damage',
        type: 'Balanced',
        price: {
          credits: 8100,
          bismor: 140,
          magnite: 60,
          umanite: 105,
        },
        effects: {
          buffs: ['x1.6 Damage'],
          nerfs: ['-32 Battery Capacity', 'x1.5 Normal Shot Heat Generation'],
        },
        description:
          'Some extensive tweaking to how the shots are prepared can increase the pure damage of the weapon, but at the cost of more heat per shot and a reduced battery size.',
      },
      {
        name: 'Overcharger',
        icon: 'Damage',
        type: 'Unstable',
        price: {
          credits: 7050,
          bismor: 120,
          croppa: 95,
          enorPearl: 60,
        },
        effects: {
          buffs: ['x1.5 Charged Damage', 'x1.5 Charged Area Damage'],
          nerfs: ['x1.5 Charged Shot Ammo Use', '-25% Cooling Rate'],
        },
        description:
          'Pushing the EPC to the limit will give you a significant increase in charge shot damage and a boost in the size of the explosion, but at the cost of thermal efficiency and energy consumption.',
      },
      {
        name: 'Persistent Plasma',
        icon: 'DurationHourglass',
        type: 'Unstable',
        price: {
          credits: 8150,
          croppa: 75,
          jadiz: 130,
          magnite: 95,
        },
        effects: {
          buffs: ['+Persistent Plasma'],
          nerfs: ['-20 Charged Damage', '-20 Area Damage'],
        },
        description:
          'By changing how the plasma is layered within the charged projectile, a slow and persistent discharge can be achieved upon impact. However, this does reduce the instant damage done.',
      },
    ],
  },
  [Miner.Engineer]: {
    '"Warthog" Auto 210': [
      {
        name: 'Stunner',
        icon: 'Stun',
        type: 'Clean',
        price: {
          credits: 7350,
          bismor: 100,
          jadiz: 135,
          magnite: 60,
        },
        effects: {
          buffs: [
            '+Stun Chance Occurs on All Body Parts',
            '+Bonus Damage vs. Stunned (+30% Kinetic Damage)',
          ],
          nerfs: [],
        },
        description:
          'Heavier rounds allow for Stun chance on all body parts, not just weakpoints. Shooting already stunned enemies with this overclock will deal extra damage.',
      },
      {
        name: 'Light-Weight Magazines',
        icon: 'Ammo',
        type: 'Clean',
        price: {
          credits: 7250,
          croppa: 125,
          magnite: 105,
          umanite: 60,
        },
        effects: {
          buffs: ['+20 Max Ammo', '-0.4s Reload Time'],
          nerfs: [],
        },
        description:
          "It's amazing how much material can be removed without affecting anything, and lighter magazines means more magazines and faster reloading.",
      },
      {
        name: 'Magnetic Pellet Alignment',
        icon: 'Aim',
        type: 'Balanced',
        price: {
          credits: 7900,
          enorPearl: 120,
          jadiz: 105,
          umanite: 75,
        },
        effects: {
          buffs: ['x0.5 Base Spread', '+30% Weakpoint Damage Bonus'],
          nerfs: ['x0.75 Rate of Fire'],
        },
        description:
          'Electromagnets in the chamber greatly reduces shot spread and increases weakpoint damage at the cost of a slower rate of fire.',
      },
      {
        name: 'Cycle Overload',
        icon: 'FireRate',
        type: 'Unstable',
        price: {
          credits: 8050,
          bismor: 125,
          croppa: 100,
          umanite: 80,
        },
        effects: {
          buffs: ['+1 Damage', '+2 Rate of Fire'],
          nerfs: ['+0.5s Reload Time', 'x1.5 Base Spread'],
        },
        description:
          "Heavy modification to the chamber greatly increases the maximum rate of fire and increases raw damage, but reduces the weapon's accuracy and reload speed as a consequence.",
      },
      {
        name: 'Mini Shells',
        icon: 'SmallBullets',
        type: 'Unstable',
        price: {
          credits: 7700,
          croppa: 125,
          enorPearl: 65,
          magnite: 90,
        },
        effects: {
          buffs: ['+90 Max Ammo', '+6 Magazine Size', 'x0.5 Recoil'],
          nerfs: ['-2 Damage', 'x0 Stun Chance', 'x0 Stun Duration'],
        },
        description:
          'Smaller shells designed around a new charge type reduce recoil and increase overall ammo and magazine capacity at the cost of raw damage.',
      },
    ],
    '"Stubby" Voltaic SMG': [
      {
        name: 'Super-Slim Rounds',
        icon: 'ClipSize',
        type: 'Clean',
        price: {
          credits: 8550,
          bismor: 90,
          croppa: 130,
          enorPearl: 75,
        },
        effects: {
          buffs: ['+5 Magazine Size', 'x0.8 Base Spread'],
          nerfs: [],
        },
        description:
          'Same power but in a smaller package, giving slightly better accuracy and letting you fit a few more rounds in each magazine.',
      },
      {
        name: 'Well Oiled Machine',
        icon: 'FireRate',
        type: 'Clean',
        price: {
          credits: 8400,
          croppa: 65,
          jadiz: 95,
          magnite: 140,
        },
        effects: {
          buffs: ['+2 Rate of Fire', '-0.2s Reload Time'],
          nerfs: [],
        },
        description: 'When you need a little more sustained damage.',
      },
      {
        name: 'EM Refire Booster',
        icon: 'FireRate',
        type: 'Balanced',
        price: {
          credits: 8300,
          bismor: 60,
          enorPearl: 90,
          jadiz: 135,
        },
        effects: {
          buffs: ['+2 Electric Damage', '+4 Rate of Fire'],
          nerfs: ['x1.5 Base Spread'],
        },
        description:
          'Use the electron circuit of the SMG to boost its fire rate and damage, but the accuracy suffers as a result.',
      },
      {
        name: 'Light-Weight Rounds',
        icon: 'Ammo',
        type: 'Balanced',
        price: {
          credits: 8700,
          bismor: 90,
          jadiz: 65,
          umanite: 135,
        },
        effects: {
          buffs: ['+180 Max Ammo'],
          nerfs: ['-1 Damage', '-2 Rate of Fire'],
        },
        description:
          "They don't hit quite as hard and can't handle fast fire rates, but you sure can carry a lot more of them!",
      },
      {
        name: 'Turret Arc',
        icon: 'Electricity',
        type: 'Unstable',
        price: {
          credits: 8350,
          bismor: 100,
          croppa: 135,
          umanite: 60,
        },
        effects: {
          buffs: ['+Turret Arc (10m Range)'],
          nerfs: ['-120 Max Ammo', '-2 Rate of Fire'],
        },
        description:
          'Use the Gemini turrets as nodes in an electric arc. Zap! The downside is less ammo and a slower rate of fire.',
      },
      {
        name: 'Turret EM Discharge',
        icon: 'AreaDamage',
        type: 'Unstable',
        price: {
          credits: 8450,
          bismor: 80,
          enorPearl: 105,
          jadiz: 125,
        },
        effects: {
          buffs: ['+Turret EM Discharge (5m Range)'],
          nerfs: ['-5% Electrocution Chance', '-3 Damage'],
        },
        description:
          'Shoot a turret to turn it into the epicenter of an electric explosion! The bullet modifications unfortunately also lower the direct damage and electrocution chance.',
      },
    ],
    'Deepcore 40mm PGL': [
      {
        name: 'Clean Sweep',
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
        icon: 'Ammo',
        type: 'Balanced',
        price: {
          credits: 7900,
          bismor: 120,
          enorPearl: 100,
          umanite: 70,
        },
        effects: {
          buffs: ['+4 Max Ammo'],
          nerfs: ['-10 Area Damage', '-0.5m Radius'],
        },
        description:
          "Smaller and lighter rounds mean more rounds in the pocket at the cost of the explosion's effective radius and damage.",
      },
      {
        name: 'RJ250 Compound',
        icon: 'ExplosionJump',
        type: 'Balanced',
        price: {
          credits: 8800,
          bismor: 65,
          enorPearl: 110,
          umanite: 120,
        },
        effects: {
          buffs: ['+RJ250 Compound'],
          nerfs: ['-25 Area Damage'],
        },
        description:
          'Trade raw damage for the ability to use explosions to move yourself and your teammates.',
      },
      {
        name: 'Fat Boy',
        icon: 'AreaDamage',
        type: 'Unstable',
        price: {
          credits: 8300,
          bismor: 120,
          enorPearl: 70,
          magnite: 105,
        },
        effects: {
          buffs: ['x4 Area Damage', '+1m Radius'],
          nerfs: ['x0.3 Max Ammo', 'x0.7 Projectile Velocity'],
        },
        description:
          'Big and deadly and dirty. Too bad plutonium is so heavy that you can only take a few rounds with you. And remember to take care with the fallout.',
      },
      {
        name: 'Hyper Propellant',
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
          nerfs: ['x0.3 Radius', '-2 Max Ammo'],
        },
        description:
          'New super-high velocity projectiles trade explosive range for raw damage in a tight area. The increased weight of the rounds also limits how many you can carry.',
      },
    ],

    'Breach Cutter': [
      {
        name: 'Light-Weight Cases',
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
        icon: 'Damage',
        type: 'Clean',
        price: {
          credits: 8650,
          croppa: 100,
          jadiz: 140,
          magnite: 75,
        },
        effects: {
          buffs: ['+50 Beam DPS', '+0.5 Projectile Lifetime'],
          nerfs: [],
        },
        description:
          "By improving the node's efficiency, you can up the raw damage without too much fuss, and it lasts a bit longer, too!",
      },
      {
        name: 'Return to Sender',
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
          nerfs: ['x0.66 Magazine Size'],
        },
        description:
          'By passing an electric current through the plasma, the beam electrocutes anything it touches, but the bulky hardware limits magazine capacity.',
      },
      {
        name: 'Spinning Death',
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
            'x2.5 Projectile Lifetime',
            '+1.5m Beam Width',
          ],
          nerfs: ['x0.2 Beam DPS', 'x0.5 Max Ammo', 'x0.3 Magazine Size'],
        },
        description:
          'These modified plasma nodes convert most of the forward momentum into angular momentum, streatching out the beam and continuously doing damage to the immediate area where it was launched. The nodes run for a longer duration but deal less damage every second. Due to the weight, both magazine and total capacity is greatly reduced.',
      },
      {
        name: 'Inferno',
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
          nerfs: ['-175 Beam DPS', '-6 Max Ammo', 'x0.25 Armor Breaking'],
        },
        description:
          'Turn your Breach Cutter into a tool of burning death and destruction at the cost of ammo and armor breaking. As a bonus, the extreme internal heating keeps the targets burning for an extended period.',
      },
    ],
  },
  [Miner.Gunner]: {
    '"Lead Storm" Powered Minigun': [
      {
        name: 'A Little More Oomph!',
        icon: 'Damage',
        type: 'Clean',
        price: {
          credits: 8700,
          bismor: 120,
          magnite: 95,
          umanite: 75,
        },
        effects: {
          buffs: ['+1 Damage', '-0.2 Spinup Time'],
          nerfs: [],
        },
        description:
          "Get the most out of each shot without compromising any of the gun's systems.",
      },
      {
        name: 'Thinned Drum Walls',
        icon: 'Cooldown',
        type: 'Clean',
        price: {
          credits: 7650,
          croppa: 75,
          enorPearl: 125,
          jadiz: 95,
        },
        effects: {
          buffs: ['+300 Max Ammo', '+0.5 Cooling Rate'],
          nerfs: [],
        },
        description:
          'Stuff more bullets into the ammo drum by thinning the material in non-critical areas.',
      },
      {
        name: 'Burning Hell',
        icon: 'Heat',
        type: 'Balanced',
        price: {
          credits: 8700,
          croppa: 110,
          magnite: 140,
          umanite: 65,
        },
        effects: {
          buffs: ['+Burning Hell'],
          nerfs: ['+150% Heat Generation'],
        },
        description:
          'Turn the area just in front of the minigun into an even worse place by venting all the combustion gasses forward. However, it does overheat rather quickly.',
      },
      {
        name: 'Compact Feed Mechanism',
        icon: 'Ammo',
        type: 'Balanced',
        price: {
          credits: 7450,
          bismor: 70,
          croppa: 95,
          magnite: 130,
        },
        effects: {
          buffs: ['+800 Max Ammo'],
          nerfs: ['-4 Rate of Fire'],
        },
        description:
          'More space left for ammo at the cost of a reduced rate of fire.',
      },
      {
        name: 'Exhaust Vectoring',
        icon: 'Damage',
        type: 'Balanced',
        price: {
          credits: 7400,
          bismor: 140,
          croppa: 95,
          magnite: 65,
        },
        effects: {
          buffs: ['+2 Damage'],
          nerfs: ['x2.5 Base Spread'],
        },
        description: 'Increases damage at a cost to accuracy.',
      },
      {
        name: 'Bullet Hell',
        icon: 'Ricochet',
        type: 'Unstable',
        price: {
          credits: 7600,
          enorPearl: 105,
          magnite: 140,
          umanite: 75,
        },
        effects: {
          buffs: ['+50% Ricochet Chance on Bullets'],
          nerfs: ['-3 Damage', 'x6 Base Spread'],
        },
        description:
          'Special bullets that ricochet off all surfaces and even enemies, going on to hit nearby targets. However, they deal less damage and are less accurate overall.',
      },
      {
        name: 'Lead Storm',
        icon: 'Damage',
        type: 'Unstable',
        price: {
          credits: 8800,
          enorPearl: 130,
          jadiz: 100,
          magnite: 65,
        },
        effects: {
          buffs: ['+4 Damage'],
          nerfs: ['x0 Movement Speed While Using', 'x0 Stun Chance'],
        },
        description:
          'Pushing things to the limit, this overclock greatly increases damage output, but the weapon no longer stuns targets and the kickback makes it almost impossible to move.',
      },
    ],
    '"Thunderhead" Heavy Autocannon': [
      {
        name: 'Composite Drums',
        icon: 'Ammo',
        type: 'Clean',
        price: {
          credits: 7850,
          croppa: 135,
          enorPearl: 70,
          magnite: 105,
        },
        effects: {
          buffs: ['+110 Max Ammo', '-0.5s Reload Time'],
          nerfs: [],
        },
        description:
          'Lighter-weight materials mean you can carry even more ammo!',
      },
      {
        name: 'Splintering Shells',
        icon: 'Area',
        type: 'Clean',
        price: {
          credits: 7300,
          croppa: 95,
          jadiz: 125,
          magnite: 65,
        },
        effects: {
          buffs: ['+1 Area Damage', '+0.3m Effect Radius'],
          nerfs: [],
        },
        description:
          'Specially designed shells splinter into smaller pieces, increasing the splash damage range.',
      },
      {
        name: 'Carpet Bomber',
        icon: 'AreaDamage',
        type: 'Balanced',
        price: {
          credits: 7350,
          croppa: 120,
          magnite: 105,
          umanite: 70,
        },
        effects: {
          buffs: ['+3 Area Damage', '+0.7m Effect Radius'],
          nerfs: ['-6 Damage'],
        },
        description:
          'A few tweaks here and there, and the autocannon can now shoot HE rounds! Direct damage is lower, but the increased splash damage and range lets you saturate an area like no other weapon can.',
      },
      {
        name: 'Combat Mobility',
        icon: 'MovementSpeed',
        type: 'Balanced',
        price: {
          credits: 7650,
          croppa: 70,
          jadiz: 120,
          magnite: 95,
        },
        effects: {
          buffs: [
            '+35% Movement Speed While Using',
            '0.7x Accuracy',
            '-1s Reload Time',
          ],
          nerfs: ['x0.5 Magazine Size'],
        },
        description:
          'Custom compact ammo drums improve weapon balance, making it more accurate and easier to handle on the move and faster to reload at the cost of magazine capacity.',
      },
      {
        name: 'Big Bertha',
        icon: 'Damage',
        type: 'Unstable',
        price: {
          credits: 8400,
          bismor: 125,
          croppa: 105,
          umanite: 80,
        },
        effects: {
          buffs: ['+12 Damage', 'x0.7 Base Spread'],
          nerfs: [
            'x0.5 Magazine Size',
            '-110 Max Ammo',
            '-1.5 Top Rate of Fire',
          ],
        },
        description:
          'Extensive tweaks give a huge bump in raw damage at the cost of ammo capacity and fire rate.',
      },
      {
        name: 'Neurotoxin Payload',
        icon: 'Neuro',
        type: 'Unstable',
        price: {
          credits: 8100,
          croppa: 100,
          jadiz: 75,
          magnite: 135,
        },
        effects: {
          buffs: ['+Neurotoxin Payload (30% Chance)', '+0.3m Effect Radius'],
          nerfs: ['-3 Damage', '-6 Area Damage'],
        },
        description:
          'Channel your inner war criminal by mixing some neurotoxin into the explosive compound. The rounds deal less direct damage and splash damage, but affected bugs move slower and take lots of damage over time.',
      },
    ],
    '"Bulldog" Heavy Revolver': [
      {
        name: 'Homebrew Powder',
        icon: 'Chance',
        type: 'Clean',
        price: {
          credits: 7350,
          croppa: 135,
          enorPearl: 105,
          magnite: 70,
        },
        effects: {
          buffs: ['+Randomized Damage (between x0.8 and x1.4 Damage)'],
          nerfs: [],
        },
        description: "More damage on average, but it's a bit inconsistent.",
      },
      {
        name: 'Chain Hit',
        icon: 'Ricochet',
        type: 'Clean',
        price: {
          credits: 7300,
          enorPearl: 80,
          jadiz: 110,
          magnite: 120,
        },
        effects: {
          buffs: ['+33% Weakpoint Chain Hit Chance'],
          nerfs: [],
        },
        description:
          'Any shot that hits a weakspot has a chance to ricochet into a nearby enemy.',
      },
      {
        name: 'Volatile Bullets',
        icon: 'Heat',
        type: 'Balanced',
        price: {
          credits: 7350,
          croppa: 130,
          jadiz: 110,
          magnite: 60,
        },
        effects: {
          buffs: ['+300% Damage vs. Burning'],
          nerfs: ['-25 Damage'],
        },
        description:
          'Fuel on the fire! These rounds are extremely effective against burning targets, but at the cost of direct damage dealt to unaffected creatures.',
      },
      {
        name: 'Six Shooter',
        icon: 'ClipSize',
        type: 'Balanced',
        price: {
          credits: 7750,
          bismor: 120,
          croppa: 60,
          magnite: 100,
        },
        effects: {
          buffs: ['+2 Magazine Size', '+8 Max Ammo', '+4 Rate of Fire'],
          nerfs: ['+0.5s Reload Time', 'x1.5 Base Spread'],
        },
        description:
          'An updated casing profile lets you squeeze two more rounds into the cylinder and take a few more rounds with you, but all that filling and drilling has compromised the accuracy of the weapon, and it takes longer to reload.',
      },
      {
        name: 'Elephant Rounds',
        icon: 'Damage',
        type: 'Unstable',
        price: {
          credits: 7300,
          enorPearl: 140,
          magnite: 90,
          umanite: 65,
        },
        effects: {
          buffs: ['x2 Damage', 'x0.5 Base Spread'],
          nerfs: [
            '-13 Max Ammo',
            '-1 Magazine Size',
            '+0.5s Reload Time',
            'x2.5 Recoil',
            '+71% Spread per Shot',
          ],
        },
        description:
          "Heavy tweaking has made it possible to use modified autocannon rounds in the revolver! The damage is crazy, but so is the recoil, and you can't carry very many rounds. Also, only three rounds fit in the gun, and reload time is a bit slower, but base accuracy is improved.",
      },
      {
        name: 'Magic Bullets',
        icon: 'Ricochet',
        type: 'Unstable',
        price: {
          credits: 8750,
          croppa: 105,
          magnite: 130,
          umanite: 75,
        },
        effects: {
          buffs: ['+Magic Bullets', '+8 Max Ammo'],
          nerfs: ['-20 Damage'],
        },
        description:
          'Smaller, bouncy bullets ricochet off hard surfaces, hitting nearby enemies like magic! Overall, the damage of the weapon is reduced, but you can carry a few more rounds due to their compact size.',
      },
    ],
    'BRT7 Burst Fire Gun': [
      {
        name: 'Composite Casings',
        icon: 'FireRate',
        type: 'Clean',
        price: {
          credits: 7950,
          croppa: 140,
          enorPearl: 75,
          magnite: 100,
        },
        effects: {
          buffs: ['+36 Max Ammo'],
          nerfs: ['+1 Rate of Fire'],
        },
        description:
          "Lighter rounds that permit a shorter delay between bursts, and you can carry a few more of them as well. What's not to like?",
      },
      {
        name: 'Full Chamber Seal',
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
          nerfs: ['-36 Max Ammo', '-6 Magazine Size'],
        },
        description:
          'A new shape to the bullet delivers a lot more damage, but its odd size means fewer rounds in the clip and a bit less ammo overall.',
      },
      {
        name: 'Electro Minelets',
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
          nerfs: ['-3 Damage', '-6 Magazine Size'],
        },
        description:
          "After impacting terrain, these high-tech bullets convert in to electro-minelets that will electrocute anything unfortunate enough to come close. However they don't last forever and the rounds themselves take more space in the clip and deal less direct damage.",
      },
      {
        name: 'Micro Flechettes',
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
            'x2 Max Ammo',
            '+30 Magazine Size',
            'x0.5 Recoil',
            '0.5 Spread per Shot',
          ],
          nerfs: ['x0.5 Damage'],
        },
        description:
          'Convert the BRT to fire small flechettes instead of slugs. Increases overall ammo and magazine size as well as reducing recoil, but at the cost of raw damage.',
      },
      {
        name: 'Lead Spray',
        icon: 'Special',
        type: 'Unstable',
        price: {
          credits: 8050,
          bismor: 125,
          magnite: 75,
          umanite: 105,
        },
        effects: {
          buffs: ['x1.5 Damage'],
          nerfs: ['x4.0 Base Spread'],
        },
        description:
          "It ain't pretty, but this overclock will tear apart anything that gets close, though it gets a bit iffy at range",
      },
    ],
  },
  [Miner.Scout]: {
    'Deepcore GK2': [
      {
        name: 'Compact Ammo',
        icon: 'ClipSize',
        type: 'Clean',
        price: {
          credits: 7250,
          bismor: 125,
          enorPearl: 80,
          jadiz: 105,
        },
        effects: {
          buffs: ['+5 Magazine Size', 'x0.7 Recoil'],
          nerfs: [],
        },
        description:
          'Stuff a few more of these compact rounds into each magazine, and they have a bit less recoil as well.',
      },
      {
        name: 'Gas Rerouting',
        icon: 'FireRate',
        type: 'Clean',
        price: {
          credits: 7800,
          croppa: 60,
          jadiz: 125,
          magnite: 105,
        },
        effects: {
          buffs: ['+1 Rate of Fire'],
          nerfs: ['-0.3s Reload Time'],
        },
        description:
          "Increases the weapon's rate of fire without affecting performance, and helps with magazine ejection as well.",
      },
      {
        name: 'Homebrew Powder',
        icon: 'Chance',
        type: 'Clean',
        price: {
          credits: 8100,
          bismor: 95,
          jadiz: 140,
          umanite: 65,
        },
        effects: {
          buffs: ['+Randomized Damage (between x0.8 and x1.4 Damage'],
          nerfs: [],
        },
        description: "More damage on average, but it's a bit inconsistent.",
      },
      {
        name: 'Overclocked Firing Mechanism',
        icon: 'FireRate',
        type: 'Balanced',
        price: {
          credits: 7950,
          bismor: 95,
          enorPearl: 120,
          magnite: 65,
        },
        effects: {
          buffs: ['+3 Rate of Fire'],
          nerfs: ['x2.5 Recoil'],
        },
        description: 'More bullets faster, and it kicks like a mule.',
      },
      {
        name: 'Bullets of Mercy',
        icon: 'Damage',
        type: 'Balanced',
        price: {
          credits: 8100,
          bismor: 90,
          croppa: 80,
          magnite: 125,
        },
        effects: {
          buffs: ['+33% Bonus Damage to Status-Afflicted Targets'],
          nerfs: ['-5 Magazine Size'],
        },
        description:
          'Deal bonus damage to burning, stunned, electrocuted, frozen, or poisoned targets.',
      },
      {
        name: 'AI Stability Engine',
        icon: 'Aim',
        type: 'Unstable',
        price: {
          credits: 8250,
          croppa: 60,
          enorPearl: 125,
          umanite: 100,
        },
        effects: {
          buffs: [
            'No Recoil',
            'x9.0 Spread Recovery Speed',
            '+40% Weakpoint Damage Bonus',
          ],
          nerfs: ['-2 Damage', '-2 Rate of Fire'],
        },
        description:
          "It's like it knows what you are going to do before you do it, compensating for all recoil and bullet spread. The system requires a lower rate of fire and the fin-stabilized rounds do less direct damage, but give a bonus to weakpoint hits.",
      },
      {
        name: 'Electrifying Reload',
        icon: 'SpecialMagazine',
        type: 'Unstable',
        price: {
          credits: 7750,
          bismor: 105,
          magnite: 65,
          umanite: 135,
        },
        effects: {
          buffs: ['+Electric Reload (100% Chance)'],
          nerfs: ['-3 Damage', '-5 Magazine Size'],
        },
        description:
          'Embedded capacitors electrocute targets from the inside when you reload. However, all that tech reduces the raw damage of the bullets and takes up some space in the magazines.',
      },
    ],
    'M1000 Classic': [
      {
        name: 'Hoverclock',
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
        icon: 'Ammo',
        type: 'Clean',
        price: {
          credits: 8200,
          enorPearl: 95,
          jadiz: 130,
          magnite: 75,
        },
        effects: {
          buffs: ['+16 Max Ammo', '-0.2 Reload Time'],
          nerfs: [],
        },
        description:
          'Make space for more ammo and speed up reloads by getting rid of dead weight on the clips.',
      },
      {
        name: 'Active Stability System',
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
        icon: 'Aim',
        type: 'Balanced',
        price: {
          credits: 8900,
          croppa: 125,
          enorPearl: 105,
          umanite: 80,
        },
        effects: {
          buffs: ['x1.75 Max Ammo', '+3 Rate of Fire', 'x0.5 Recoil'],
          nerfs: ['x0.6 Damage'],
        },
        description:
          'A less powerful round together with a rebalancing of weight distribution, enlarged vents, and a reshaped grip result in a rifle that is more controllable when hip-firing in quick succession, but at the cost of pure damage output. As an added bonus, you can carry more of the new ammunition.',
      },
      {
        name: 'Electrocuting Focus Shots',
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
          nerfs: [
            'x0.635 Max Ammo',
            'x0.5 Focus Speed',
            'x0 Focus Mode Movement Speed',
          ],
        },
        description:
          "Takes the M1000's focus mode to the extreme by supercooling the rounds before firing to improve their acceleration through the coils, but the extra coolant in the clips limits how much ammo you can bring.",
      },
    ],
    'Jury-Rigged Boomstick': [
      {
        name: 'Compact Shells',
        icon: 'Ammo',
        type: 'Clean',
        price: {
          credits: 8550,
          jadiz: 100,
          magnite: 65,
          umanite: 120,
        },
        effects: {
          buffs: ['+6 Max Ammo', '-0.2s Reload Time'],
          nerfs: [],
        },
        description:
          'You can carry a few more of these compact shells in your pockets, and they are a bit faster to reload with.',
      },
      {
        name: 'Double Barrel',
        icon: 'FireRate',
        type: 'Clean',
        price: {
          credits: 7950,
          croppa: 100,
          enorPearl: 75,
          umanite: 125,
        },
        effects: {
          buffs: ['+Double Barrel', '+1 Damage'],
          nerfs: [],
        },
        description: 'Unload both barrels at once, no regrets.',
      },
      {
        name: 'Special Powder',
        icon: 'ShotgunJump',
        type: 'Clean',
        price: {
          credits: 7050,
          bismor: 95,
          croppa: 125,
          enorPearl: 65,
        },
        effects: {
          buffs: ['+Shotgun Jump'],
          nerfs: [],
        },
        description:
          'Less like gunpowder and more like rocket fuel, this mixture gives a hell of a kick that you can use to get places.',
      },
      {
        name: 'Stuffed Shells',
        icon: 'ShotgunPellet',
        type: 'Clean',
        price: {
          credits: 7850,
          bismor: 100,
          enorPearl: 135,
          umanite: 80,
        },
        effects: {
          buffs: ['+1 Damage', '+1 Pellets'],
          nerfs: [],
        },
        description:
          "With a bit of patience and some luck, you can get one more pellet and a few more grains of powder into each shell without affecting the gun's performance or losing an eye in the process.",
      },
      {
        name: 'Shaped Shells',
        icon: 'Aim',
        type: 'Balanced',
        price: {
          credits: 7700,
          bismor: 95,
          enorPearl: 70,
          jadiz: 135,
        },
        effects: {
          buffs: ['-35% Base Spread'],
          nerfs: ['-2 Pellets'],
        },
        description:
          'Specially shaped shells result in a tighter shot, but the number of pellets is reduced.',
      },
      {
        name: 'Jumbo Shells',
        icon: 'Damage',
        type: 'Unstable',
        price: {
          credits: 8800,
          bismor: 65,
          enorPearl: 105,
          jadiz: 125,
        },
        effects: {
          buffs: ['+8 Damage'],
          nerfs: ['-10 Max Ammo', '+0.5s Reload Time'],
        },
        description:
          'These large shells pack a lot more charge for a big increase in damage, but they also take up more space so total ammo is limited.',
      },
    ],
    'Zhukov NUK17': [
      {
        name: 'Minimal Magazines',
        icon: 'ReloadSpeed',
        type: 'Clean',
        price: {
          credits: 8450,
          bismor: 130,
          croppa: 100,
          jadiz: 70,
        },
        effects: {
          buffs: ['+2 Combined Rate of Fire', '-0.4s Reload Time'],
          nerfs: [],
        },
        description:
          "By filling away unnecessary material from the magazines you've made them lighter, and that means they pop out faster when reloading.Also the rounds can move more freely increasing the max rate of fire slightly.",
      },
      {
        name: 'Custom Casings',
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
          nerfs: ['-1 Damage'],
        },
        description:
          'Fit more of these custom rounds in each magazine, but at small loss in raw damage.',
      },
      {
        name: 'Cryo Minelets',
        icon: 'Cold',
        type: 'Unstable',
        price: {
          credits: 7300,
          croppa: 65,
          magnite: 135,
          umanite: 95,
        },
        effects: {
          buffs: ['+Cryo Minelets (10 Cold Damage per Mine'],
          nerfs: ['-1 Damage', '-10 Combined Clip Size'],
        },
        description:
          "After impacting terrain, these high-tech bullets convert into cryo-minelets that will super-cool anything that comes close. However, they don't last forever and the rounds themselves take more space in the clip and deal less direct damage.",
      },
      {
        name: 'Embedded Detonators',
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
            'x0 Weakpoint Damage Bonus',
            '1.5x Base Spread',
            '-50% Movement Speed While Using',
          ],
        },
        description:
          'Specially hardened bullets combined with rerouting escaping gasses back into the chamber greatly increases the raw damage of the weapon, but makes it more difficult to control and removes any bonus to weakpoint hits.',
      },
    ],
  },
};
