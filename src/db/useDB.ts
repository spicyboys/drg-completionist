import { useContext } from 'react';
import type { AppDatabase } from './AppDatabase';
import { DBContext } from './DBContext';

export default function useDB(): AppDatabase {
  return useContext(DBContext);
}
