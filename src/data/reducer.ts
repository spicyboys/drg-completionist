import Actions from "./actions";
import { State } from "./state";

export default function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "TOGGLE_OVERCLOCK":
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
    default:
      return state;
  }
}
