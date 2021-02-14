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

export type Overclock = {
  name: string;
  type: "Clean" | "Balanced" | "Unstable";
  icon: keyof typeof icons;
  price?: string[];
  effects?: string[];
  description?: string;
} & (Driller | Engineer | Gunner | Scout);

export const overclocks: Overclock[] = [
  {
    name: "Lighter Tanks",
    class: "Driller",
    icon: "area",
    weapon: "Flamethrower",
    type: "Clean",
  },
];
