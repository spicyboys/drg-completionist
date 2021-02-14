import { State } from "./state";

type Actions = {
  type: "TOGGLE_OVERCLOCK";
  payload: {
    miner: keyof State["overclocks"];
    overclock: string;
  };
};

export default Actions;
