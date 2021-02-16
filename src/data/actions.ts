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
