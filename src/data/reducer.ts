/* eslint-disable @typescript-eslint/ban-ts-comment */
import Actions from './actions';
import { INITIAL_STATE, State } from './state';

export default function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case 'TOGGLE_OVERCLOCK': {
      const { miner, overclock } = action.payload;
      return {
        ...state,
        overclocks: {
          ...state.overclocks,
          [miner]: state.overclocks[miner].includes(overclock)
            ? state.overclocks[miner].filter((v) => v !== overclock)
            : [...state.overclocks[miner], overclock],
        },
      };
    }
    case 'TOGGLE_FRAMEWORK': {
      const { miner, weapon, framework } = action.payload;
      return {
        ...state,
        frameworks: {
          ...state.frameworks,
          [miner]: {
            ...state.frameworks[miner],
            // @ts-ignore
            [weapon]: state.frameworks[miner][weapon].includes(framework)
              ? // @ts-ignore
                state.frameworks[miner][weapon].filter(
                  // @ts-ignore
                  (v) => v !== framework
                )
              : // @ts-ignore
                [...state.frameworks[miner][weapon], framework],
          },
        },
      };
    }
    case 'RESET': {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
