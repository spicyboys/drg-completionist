import { Framework } from 'data/frameworks';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

type Actions =
  | {
      type: 'TOGGLE_OVERCLOCK_ACQUIRED';
      payload: {
        weapon: MinerWeapon<Miner>;
        overclock: string;
      };
    }
  | {
      type: 'TOGGLE_OVERCLOCK_FORGED';
      payload: {
        weapon: MinerWeapon<Miner>;
        overclock: string;
      };
    }
  | {
      type: 'LOAD_SAVE';
      payload: {
        unforgedOverclocks: ReadonlyMap<
          MinerWeapon<Miner>,
          ReadonlySet<string>
        >;
        overclocks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<string>>;
        frameworks: ReadonlyMap<MinerWeapon<Miner>, ReadonlySet<Framework>>;
      };
    }
  | {
      type: 'TOGGLE_FRAMEWORK';
      payload: {
        weapon: MinerWeapon<Miner>;
        framework: Framework;
      };
    }
  | {
      type: 'RESET';
    };

export default Actions;
