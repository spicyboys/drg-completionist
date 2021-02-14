import { Framework } from "pages/frameworks/FrameworkData";
import Miner from "types/miner";
import { MinerWeapon } from "utils/minerWeapons";

export type State = {
  overclocks: Record<Miner, string[]>;
  frameworks: { [M in Miner]: { [W in MinerWeapon<M>[number]]: Framework[] } };
};

export const INITIAL_STATE: State = {
  overclocks: {
    [Miner.Driller]: [],
    [Miner.Engineer]: [],
    [Miner.Gunner]: [],
    [Miner.Scout]: [],
  },
  frameworks: {
    [Miner.Driller]: {
      "CRISPR Flamethrower": [],
      "Cryo Cannon": [],
      "Subata 120": [],
      "Experimental Plasma Charger": [],
    },
    [Miner.Engineer]: {
      '"Warthog" Auto 210': [],
      '"Stubby" Voltaic SMG': [],
      "Deepcore 40mm PGL": [],
      "Breach Cutter": [],
    },
    [Miner.Gunner]: {
      '"Lead Storm" Powered Minigun': [],
      '"Thunderhead" Heavy Autocannon': [],
      '"Bulldog" Heavy Revolver': [],
      "BRT7 Burst Fire Gun": [],
    },
    [Miner.Scout]: {
      "Deepcore GK2": [],
      "M1000 Classic": [],
      "Jury-Rigged Boomstick": [],
      "Zhukov NUK17": [],
    },
  },
};
