import { useContext, useMemo } from "react";
import { Context } from "./Store";
import { State } from "./state";
import Actions from "./actions";

/**
 * Get the value in an object at the provided index, or "never" if that
 * key does not exist
 */
type ExtractObj<S extends object, K> = K extends keyof S ? S[K] : never;

/**
 * Types the keypath for the provided object is valid
 */
type Path<S extends object, T extends readonly unknown[]> = T extends readonly [
  infer T0,
  ...infer TR
]
  ? TR extends []
    ? ExtractObj<S, T0> extends never
      ? readonly []
      : readonly [T0]
    : ExtractObj<S, T0> extends object
    ? readonly [T0, ...Path<ExtractObj<S, T0>, TR>]
    : ExtractObj<S, T0> extends never
    ? readonly []
    : readonly [T0]
  : readonly [];

/**
 * Returns the type of the first element in an array, or "never" if the array
 * is empty
 */
type Head<U> = U extends [any, ...any[]]
  ? ((...args: U) => any) extends (head: infer H, ...args: any) => any
    ? H
    : never
  : never;

/**
 * Returns the type of the last element of an array, or "never" if there
 * is fewer than 2 elements in the array
 */
type Tail<U> = U extends [any, any, ...any[]]
  ? ((...args: U) => any) extends (head: any, ...args: infer T) => any
    ? T
    : never
  : never;

/**
 * Returns the type for the value of an object after traversing the keypath,
 * or "never" if the traversal is invalid
 */
type TraversePath<
  S extends object,
  T extends readonly unknown[]
> = Head<T> extends never
  ? S
  : Head<T> extends keyof S
  ? {
      0: S[Head<T>];
      1: TraversePath<S[Head<T>], Tail<T>>;
    }[Tail<T> extends never ? 0 : 1]
  : never;

/**
 * Get the stored data at the provided keypath, and a dispatcher to update
 * the store
 */
export default function useStore<
  T extends readonly [keyof State, ...unknown[]]
>(
  ...path: T extends Path<State, T> ? T : never
): [TraversePath<State, T>, React.Dispatch<Actions>] {
  const [state, dispatch] = useContext(Context);
  const stateFragment = useMemo(() => {
    let fragment = state;
    for (const p of path) {
      fragment = fragment[p] as any;
    }
    return fragment as TraversePath<State, T>;
  }, [path, state]);
  return [stateFragment, dispatch];
}
