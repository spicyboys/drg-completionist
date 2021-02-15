import { useContext, useMemo } from "react";
import { Context } from "./Store";
import { State } from "./state";
import Actions from "./actions";
import { A, F, O } from "ts-toolbelt";

/**
 * Get the stored data at the provided keypath, and a dispatcher to update
 * the store
 */
export default function useStore<T extends readonly [keyof State, ...A.Key[]]>(
  ...path: A.Cast<T, F.ValidPath<State, T>>
): [O.Path<State, T>, React.Dispatch<Actions>] {
  const [state, dispatch] = useContext(Context);
  const stateFragment = useMemo(() => {
    let fragment = state;
    for (const p of path) {
      fragment = (fragment as any)[p];
    }
    return fragment as O.Path<State, T>;
  }, [path, state]);
  return [stateFragment, dispatch];
}
