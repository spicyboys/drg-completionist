import Miner from "types/miner";

export type State = {
  overclocks: Record<Miner, string[]>;
};

export const INITIAL_STATE: State = {
  overclocks: {
    [Miner.Driller]: [],
    [Miner.Engineer]: [],
    [Miner.Gunner]: [],
    [Miner.Scout]: [],
  },
};
