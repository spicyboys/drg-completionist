import { Framework } from 'pages/frameworks/FrameworkData';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

type Actions =
  | {
      type: 'TOGGLE_OVERCLOCK';
      payload: {
        weapon: MinerWeapon<Miner>;
        overclock: string;
      };
    }
  | {
      type: 'LOAD_SAVE';
      payload: {
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
