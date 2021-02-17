import { updateKey } from 'utils/map';
import { removeFromSet, addToSet } from 'utils/set';
import Actions from './actions';
import { INITIAL_STATE, State } from './state';

export default function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case 'TOGGLE_OVERCLOCK': {
      const { weapon, overclock } = action.payload;
      const weaponOverclocks = state.overclocks.get(weapon) ?? new Set();
      return {
        ...state,
        overclocks: updateKey(
          state.overclocks,
          weapon,
          weaponOverclocks.has(overclock)
            ? removeFromSet(weaponOverclocks, overclock)
            : addToSet(weaponOverclocks, overclock)
        ),
      };
    }
    case 'SET_OVERCLOCKS': {
      const { overclocks } = action.payload;
      return {
        ...state,
        overclocks,
      };
    }
    case 'TOGGLE_FRAMEWORK': {
      const { weapon, framework } = action.payload;
      const weaponFrameworks = state.frameworks.get(weapon) ?? new Set();
      return {
        ...state,
        frameworks: updateKey(
          state.frameworks,
          weapon,
          weaponFrameworks.has(framework)
            ? removeFromSet(weaponFrameworks, framework)
            : addToSet(weaponFrameworks, framework)
        ),
      };
    }
    case 'RESET': {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
