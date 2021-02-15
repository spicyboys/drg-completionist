import Actions from "./actions";
import { State } from "./state";

export default function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "TOGGLE_OVERCLOCK": {
      const { miner, overclock } = action.payload;
      if (state.overclocks[miner].includes(overclock)) {
        return {
          ...state,
          overclocks: {
            ...state.overclocks,
            [miner]: state.overclocks[miner].filter((v) => v !== overclock),
          },
        };
      } else {
        return {
          ...state,
          overclocks: {
            ...state.overclocks,
            [miner]: [...state.overclocks[miner], overclock],
          },
        };
      }
    }
    case "TOGGLE_FRAMEWORK": {
      const { miner, weapon, framework } = action.payload;
      // @ts-ignore
      if (state.frameworks[miner][weapon].includes(framework)) {
        return {
          ...state,
          frameworks: {
            ...state.frameworks,
            [miner]: {
              ...state.frameworks[miner],
              // @ts-ignore
              [weapon]: state.frameworks[miner][weapon].filter(
                // @ts-ignore
                (v) => v !== framework
              ),
            },
          },
        };
      } else {
        return {
          ...state,
          frameworks: {
            ...state.frameworks,
            [miner]: {
              ...state.frameworks[miner],
              // @ts-ignore
              [weapon]: [...state.frameworks[miner][weapon], framework],
            },
          },
        };
      }
    }
    default:
      return state;
  }
}
