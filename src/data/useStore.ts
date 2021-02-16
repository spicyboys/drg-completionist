import { useContext, useMemo } from "react";
import { Context } from "./Store";
import { State } from "./state";
import Actions from "./actions";

export default function useStore(): [State, React.Dispatch<Actions>];
export default function useStore<T extends keyof State>(
  key: T
): [State[T], React.Dispatch<Actions>];

/**
 * Get the stored data at the provided keypath, and a dispatcher to update
 * the store
 */
export default function useStore<T extends keyof State>(
  key?: T
): [T extends undefined ? State : State[T], React.Dispatch<Actions>] {
  const [state, dispatch] = useContext(Context);
  const stateFragment = useMemo(() => {
    if (key === undefined) {
      return state;
    } else {
      return state[key];
    }
  }, [key, state]);
  return [stateFragment as T extends undefined ? State : State[T], dispatch];
}
