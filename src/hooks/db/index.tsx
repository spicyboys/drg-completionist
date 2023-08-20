import React, { createContext, useContext } from 'react';
import { AppDatabase } from './AppDatabase';

const db = new AppDatabase();
const Context = createContext<AppDatabase>(db);

export function useDB(): AppDatabase {
  return useContext(Context);
}

export function DBProvider({ children }: { children: React.ReactNode }) {
  return <Context.Provider value={db}>{children}</Context.Provider>;
}
