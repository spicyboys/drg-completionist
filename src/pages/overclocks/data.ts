import frames from "./frames";
import icons from "./icons";

type Driller = {
  class: "Driller";
  weapon: "Flamethrower" | "Cryo Cannon" | "Pistol" | "EPC";
};

type Engineer = {
  class: "Engineer";
  weapon: "Shotgun" | "SMG" | "Grenade Launcher" | "Breach Cutter";
};

type Gunner = {
  class: "Gunner";
  weapon: "Minigun" | "Autocannon" | "Revolver" | "Burst Rifle";
};

type Scout = {
  class: "Scout";
  weapon: "Assualt Rifle" | "M1000" | "Boomstick" | "Zhukovs";
};

type Price = {
  credits: number;
  bismor?: number;
  croppa?: number;
  enorPearl?: number;
  jadiz?: number;
  magnite?: number;
  umanite?: number;
};

type Effects = {
  buffs: string[];
  nerfs: string[];
};

export type Overclock<T = Driller | Engineer | Gunner | Scout> = {
  name: string;
  type: keyof typeof frames;
  icon: keyof typeof icons;
  price: Price;
  effects: Effects;
  description: string;
} & T;

type Overclocks = {
  driller: Overclock<Driller>[];
  engineer: Overclock<Engineer>[];
  gunner: Overclock<Gunner>[];
  scout: Overclock<Scout>[];
};

export const overclocks: Overclocks = {
  driller: [
    // {
    //   name: '',
    //   class: 'Driller',
    //   icon: '',
    //   weapon: 'EPC',
    //   type: '',
    //   price: {
    //     credits: ,
    //     bismor: ,
    //     croppa: ,
    //     enorPearl: ,
    //     jadiz: ,
    //     magnite: ,
    //     umanite: ,
    //   },
    //   effects: {
    //     buffs: [],
    //     nerfs: []
    //   },
    //   description: '',
    // },
    {
      name: "Lighter Tanks",
      class: "Driller",
      icon: "ammo",
      weapon: "Flamethrower",
      type: "clean",
      price: {
        credits: 7500,
        bismor: 125,
        croppa: 75,
        umanite: 90,
      },
      effects: {
        buffs: ["+75 Max Fuel"],
        nerfs: [],
      },
      description: "Lighter weight gear means more fuel and sandwiches.",
    },
    {
      name: "Sticky Additive",
      class: "Driller",
      icon: "durationHourglass",
      weapon: "Flamethrower",
      type: "clean",
      price: {
        credits: 8250,
        bismor: 80,
        jadiz: 130,
        magnite: 100,
      },
      effects: {
        buffs: ["+1 Damage", "+1s Sticky Flame Duration"],
        nerfs: [],
      },
      description:
        "Special additive compound extends the Sticky Flame duration and increases direct damage.",
    },
    {
      name: "Compact Feed Valves",
      class: "Driller",
      icon: "clipSize",
      weapon: "Flamethrower",
      type: "balanced",
      price: {
        credits: 7350,
        bismor: 70,
        jadiz: 90,
        umanite: 130,
      },
      effects: {
        buffs: ["+25 Tank Size"],
        nerfs: ["-2m Flame Reach"],
      },
      description:
        "The smaller mechanism leaves room to increase tank capacity at the cost of operational range.",
    },
    {
      name: "Fuel Stream Diffuser",
      class: "Driller",
      icon: "distance",
      weapon: "Flamethrower",
      type: "balanced",
      price: {
        credits: 7100,
        bismor: 100,
        enorPearl: 80,
        jadiz: 125,
      },
      effects: {
        buffs: ["+5m Flame Reach"],
        nerfs: ["-20% Fuel Flow Rate"],
      },
      description:
        "Increases operation range but decreases the fuel flow rate.",
    },
    {
      name: "Face Melter",
      class: "Driller",
      icon: "damage",
      weapon: "Flamethrower",
      type: "unstable",
      price: {
        credits: 7000,
        croppa: 130,
        enorPearl: 70,
        magnite: 90,
      },
      effects: {
        buffs: ["+2 Damage", "+30% Rate of Fire"],
        nerfs: ["-75 Max Fuel", "x0.5 Movement Speed While Using"],
      },
      description:
        "This crazy bit of tweaking will give a boost in damage but at the cost of both mobility and fuel.",
    },
    {
      name: "Sticky Fuel",
      class: "Driller",
      icon: "durationHourglass",
      weapon: "Flamethrower",
      type: "unstable",
      price: {
        credits: 8800,
        enorPearl: 110,
        jadiz: 140,
        magnite: 75,
      },
      effects: {
        buffs: ["+5 Sticky Flame Damage", "+6s Sticky Flame Duration"],
        nerfs: ["-25 Tank Size", "-75 Max Fuel"],
      },
      description:
        "Special fuel mixture extends the duration and damage of Sticky Flames but at the cost of tank capacity and total fuel.",
    },
    {
      name: "Improved Thermal Efficiency",
      class: "Driller",
      icon: "clipSize",
      weapon: "Cryo Cannon",
      type: "clean",
      price: {
        credits: 8350,
        croppa: 125,
        enorPearl: 70,
        magnite: 110,
      },
      effects: {
        buffs: ["+25 Tank Capacity", "x0.75 Pressure Drop Rate"],
        nerfs: [],
      },
      description:
        "Get all you can from your fuel and lose pressure slower from the main chamber.",
    },
    {
      name: "Perfectly Tuned Cooler",
      class: "Driller",
      icon: "cold",
      weapon: "Cryo Cannon",
      type: "clean",
      price: {
        credits: 8750,
        bismor: 110,
        magnite: 65,
        umanite: 130,
      },
      effects: {
        buffs: ["+1 Freezing Power", "+10% Flow Rate"],
        nerfs: [],
      },
      description: "Freeze things faster, no strings attached.",
    },
    {
      name: "Flow Rate Expansion",
      class: "Driller",
      icon: "duration",
      weapon: "Cryo Cannon",
      type: "balanced",
      price: {
        credits: 8900,
        enorPearl: 70,
        jadiz: 100,
        magnite: 125,
      },
      effects: {
        buffs: ["x2.7 Pressure Gain Rate", "+10% Flow Rate"],
        nerfs: ["x2.25 Pressure Drop Rate"],
      },
      description:
        "A low-volume, high-pressure chamber paired with a high-power pump increase the flow rate and repressurization speed, but lower the max duration of sustained flow.",
    },
    {
      name: "Ice Spear",
      class: "Driller",
      icon: "projectileSpeed",
      weapon: "Cryo Cannon",
      type: "balanced",
      price: {
        credits: 8950,
        enorPearl: 60,
        jadiz: 130,
        umanite: 110,
      },
      effects: {
        buffs: ["+ Ice Spear"],
        nerfs: ["+1s Repressurization Delay"],
      },
      description:
        "Pressing the reload button dumps all the fluid in the chamber directly into the turbine, flash-freezing it and launching an ice projectile. Side effects include an increased recharge delay and, of course, the large amount of fuel used.",
    },
    {
      name: "Ice Storm",
      class: "Driller",
      icon: "damage",
      weapon: "Cryo Cannon",
      type: "unstable",
      price: {
        credits: 7200,
        enorPearl: 130,
        magnite: 105,
        umanite: 75,
      },
      effects: {
        buffs: ["x2.0 Damage"],
        nerfs: [
          "-3 Freezing Power",
          "-50 Tank Capacity",
          "x1.5 Pressure Drop Rate",
        ],
      },
      description:
        "A change in the fuel mixture along with some heavy cooler unit tweaks means that you'll be doing less freezing and more killing with razor - sharp ice shards. However, the capacity of the pressure chamber suffers.",
    },
    {
      name: "Snowball",
      class: "Driller",
      icon: "area",
      weapon: "Cryo Cannon",
      type: "unstable",
      price: {
        credits: 8400,
        jadiz: 90,
        magnite: 70,
        umanite: 130,
      },
      effects: {
        buffs: ["+ Snowball"],
        nerfs: ["-100 Tank Capacity", "+1 Repressurization Delay"],
      },
      description:
        "Pressing the reload button shoots all the cryofuel in the chamber at once as an AoE cryo-projectile. Besides the very large amount of fuel consumed, the operation overloads the whole system resulting in a much longer delay before regaining pressure and the modifications restrict the total amount of fuel you can carry.",
    },
    {
      name: "Chain Hit",
      class: "Driller",
      icon: "ricochet",
      weapon: "Pistol",
      type: "clean",
      price: {
        credits: 7600,
        bismor: 65,
        croppa: 120,
        jadiz: 100,
      },
      effects: {
        buffs: ["+50% Weakpoint Chain Hit Chance"],
        nerfs: [],
      },
      description:
        "Any shot that hits a weakspot has a chance to ricochet into a nearby enemy.",
    },
    {
      name: "Homebrew Powder",
      class: "Driller",
      icon: "chance",
      weapon: "Pistol",
      type: "clean",
      price: {
        credits: 7150,
        bismor: 135,
        croppa: 100,
        magnite: 70,
      },
      effects: {
        buffs: ["+Randomized Damage (between x0.8 and x1.4 damage)"],
        nerfs: [],
      },
      description: "More damage on average, but it's a bit inconsistent.",
    },
    {
      name: "Oversized Magazine",
      class: "Driller",
      icon: "clipSize",
      weapon: "Pistol",
      type: "balanced",
      price: {
        credits: 9000,
        croppa: 70,
        jadiz: 110,
        umanite: 130,
      },
      effects: {
        buffs: ["+10 Magazine Size"],
        nerfs: ["+0.5s Reload Time"],
      },
      description:
        "Custom magazine that can fit a lot more ammo, but it's a bit unwieldy and takes longer to reload. ",
    },
    {
      name: "Automatic Fire",
      class: "Driller",
      icon: "fireRate",
      weapon: "Pistol",
      type: "unstable",
      price: {
        credits: 7400,
        bismor: 95,
        croppa: 65,
        enorPearl: 120,
      },
      effects: {
        buffs: ["+ Automatic Fire", "+2 Rate of Fire"],
        nerfs: ["+100% Base Spread", "+250% Recoil"],
      },
      description: "Fully automatic action, but watch out for the recoil.",
    },
    {
      name: "Explosive Reload",
      class: "Driller",
      icon: "specialMagazine",
      weapon: "Pistol",
      type: "unstable",
      price: {
        credits: 8100,
        enorPearl: 95,
        magnite: 65,
        umanite: 125,
      },
      effects: {
        buffs: ["+ Explosive Reload"],
        nerfs: ["x0.5 Max Ammo", "x0.5 Magazine Size"],
      },
      description:
        "Micro-explosives that explode inside hit targets when you reload. However these fancy bullets come at the cost of total ammo and magazine capacity.",
    },
    {
      name: "Tranquilizer Rounds",
      class: "Driller",
      icon: "stun",
      weapon: "Pistol",
      type: "unstable",
      price: {
        credits: 7150,
        croppa: 95,
        jadiz: 135,
        umanite: 75,
      },
      effects: {
        buffs: ["+50% Stun Chance"],
        nerfs: ["-4 Magazine Size", "-4 Rate of Fire"],
      },
      description:
        "Part-bullet, part-syringe: these rounds are very effective at stunning most enemies.",
    },
    {
      name: "Energy Rerouting",
      class: "Driller",
      icon: "chargeUp",
      weapon: "EPC",
      type: "clean",
      price: {
        credits: 7300,
        bismor: 130,
        jadiz: 100,
        umanite: 65,
      },
      effects: {
        buffs: ["+16 Battery Capacity", "x1.5 Charge Speed"],
        nerfs: [],
      },
      description:
        "A masterwork of engineering that improves charge speed and energy efficiency without affecting overall performance!",
    },
    {
      name: "Magnetic Cooling Unit",
      class: "Driller",
      icon: "cooldown",
      weapon: "EPC",
      type: "clean",
      price: {
        credits: 8900,
        croppa: 95,
        jadiz: 80,
        umanite: 125,
      },
      effects: {
        buffs: ["+25% Cooling Rate", "x0.7 Heat Buildup When Charged"],
        nerfs: [],
      },
      description:
        "A high-tech solution to cleanly improve the cooling rate. The result is an increased number of shots that can be fired before overheating, a faster recovery from an overheat, and an extended duration that a full charge can be maintained.",
    },
    {
      name: "Heat Pipe",
      class: "Driller",
      icon: "fuel",
      weapon: "EPC",
      type: "balanced",
      price: {
        credits: 7450,
        bismor: 60,
        jadiz: 95,
        umanite: 125,
      },
      effects: {
        buffs: ["-2 Charged Shot Ammo Use", "x1.3 Charge Speed"],
        nerfs: ["x1.5 Normal Shot Heat Generation"],
      },
      description:
        "By channeling exhaust heat back into the charge chamber, a shot can be charged faster while using less energy. This does, however, make the weapon less efficient at dissipating heat from normal shots.",
    },
    {
      name: "Heavy Hitter",
      class: "Driller",
      icon: "damage",
      weapon: "EPC",
      type: "balanced",
      price: {
        credits: 8100,
        bismor: 140,
        magnite: 60,
        umanite: 105,
      },
      effects: {
        buffs: ["x1.6 Damage"],
        nerfs: ["-32 Battery Capacity", "x1.5 Normal Shot Heat Generation"],
      },
      description:
        "Some extensive tweaking to how the shots are prepared can increase the pure damage of the weapon, but at the cost of more heat per shot and a reduced battery size.",
    },
    {
      name: "Overcharger",
      class: "Driller",
      icon: "damage",
      weapon: "EPC",
      type: "unstable",
      price: {
        credits: 7050,
        bismor: 120,
        croppa: 95,
        enorPearl: 60,
      },
      effects: {
        buffs: ["x1.5 Charged Damage", "x1.5 Charged Area Damage"],
        nerfs: ["x1.5 Charged Shot Ammo Use", "-25% Cooling Rate"],
      },
      description:
        "Pushing the EPC to the limit will give you a significant increase in charge shot damage and a boost in the size of the explosion, but at the cost of thermal efficiency and energy consumption.",
    },
    {
      name: "Persistent Plasma",
      class: "Driller",
      icon: "durationHourglass",
      weapon: "EPC",
      type: "unstable",
      price: {
        credits: 8150,
        croppa: 75,
        jadiz: 130,
        magnite: 95,
      },
      effects: {
        buffs: ["+ Persistent Plasma"],
        nerfs: ["-20 Charged Damage", "-20 Area Damage"],
      },
      description:
        "By changing how the plasma is layered within the charged projectile, a slow and persistent discharge can be achieved upon impact. However, this does reduce the instant damage done.",
    },
  ],
  engineer: [],
  gunner: [],
  scout: [],
};
