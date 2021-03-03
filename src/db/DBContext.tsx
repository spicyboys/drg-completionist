import { createContext } from 'react';
import { AppDatabase } from './AppDatabase';

const db = new AppDatabase();

export const DBContext = createContext<AppDatabase>(db);

export default function DBContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DBContext.Provider value={db}>{children}</DBContext.Provider>;
}
