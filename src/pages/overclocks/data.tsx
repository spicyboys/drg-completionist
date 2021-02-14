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
  credits: number,
  bismor?: number,
  croppa?: number,
  enorPearl?: number,
  jadiz?: number,
  magnite?: number,
  umanite?: number,
}

export type Overclock<T extends (Driller | Engineer | Gunner | Scout)> = {
  name: string;
  type: "Clean" | "Balanced" | "Unstable";
  icon: keyof typeof icons;
  price: Price,
  effects?: string[];
  description?: string;
} & T;

type Overclocks = {
  driller: Overclock<Driller>[],
  engineer: Overclock<Engineer>[],
  gunner: Overclock<Gunner>[],
  scout: Overclock<Scout>[],
}

export const overclocks: Overclocks = {
  driller: [
    {
      name: "Lighter Tanks",
      class: "Driller",
      icon: "area",
      weapon: "Flamethrower",
      type: "Clean",
      price: {
        credits: 7500,
        bismor: 125,
        croppa: 75,
        umanite: 90,
      }
    }
  ],
  engineer: [],
  gunner: [],
  scout: []
};
