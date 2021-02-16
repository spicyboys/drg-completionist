import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import Actions from "./actions";
import { INITIAL_STATE, State } from "./state";
import usePersistedStore from "./usePersistedStore";

export default function Store({ children }: { children: React.ReactNode }) {
  const [persistedData, setPersistedData] = usePersistedStore();
  const [state, dispatch] = useReducer(reducer, persistedData);
  useEffect(() => setPersistedData(state), [setPersistedData, state]);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export const Context = createContext<[State, React.Dispatch<Actions>]>([
  INITIAL_STATE,
  (r) => {},
]);
