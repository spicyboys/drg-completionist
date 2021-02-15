import Miner from "types/miner";
import { Framework } from "pages/frameworks/FrameworkData";
import { MinerWeapon } from "utils/minerWeapons";

type Actions =
  | {
      type: "TOGGLE_OVERCLOCK";
      payload: {
        miner: Miner;
        overclock: string;
      };
    }
  | {
      type: "TOGGLE_FRAMEWORK";
      payload: {
        miner: Miner;
        weapon: MinerWeapon<Miner>;
        framework: Framework;
      };
    };

export default Actions;
