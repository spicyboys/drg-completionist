import { useContext, useMemo } from "react";
import { Context } from "./Store";
import { State } from "./state";
import Actions from "./actions";

export default function useStore(): [State, React.Dispatch<Actions>];
export default function useStore<K1 extends keyof State>(
  key1: K1
): [State[K1], React.Dispatch<Actions>];
export default function useStore<
  K1 extends keyof State,
  K2 extends keyof State[K1]
>(key1: K1, key2: K2): [State[K1][K2], React.Dispatch<Actions>];

/**
 * Get the stored data at the provided keypath, and a dispatcher to update
 * the store
 */
export default function useStore(...path: any): any {
  const [state, dispatch] = useContext(Context);
  const stateFragment = useMemo(() => {
    let fragment = state;
    for (const p of path) {
      fragment = (fragment as any)[p];
    }
    return fragment;
  }, [path, state]);
  return [stateFragment, dispatch];
}
