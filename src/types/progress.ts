import { Miner } from 'data/miner';
import { AppDatabase } from 'db/AppDatabase';

export type ProgressInfo = {
  obtained: number;
  total: number;
};

export type MinerProgressQuery = (
  db: AppDatabase,
  miner: Miner
) => Promise<ProgressInfo>;

export type ProgressQuery = (db: AppDatabase) => Promise<ProgressInfo>;
