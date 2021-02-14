import Actions from "./actions";
import { State } from "./state";

export default function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "TOGGLE_OVERCLOCK":
      if (state.overclocks.includes(action.payload)) {
        return {
          ...state,
          overclocks: state.overclocks.filter((v) => v !== action.payload),
        };
      } else {
        return {
          ...state,
          overclocks: [...state.overclocks, action.payload],
        };
      }
    default:
      return state;
  }
}
