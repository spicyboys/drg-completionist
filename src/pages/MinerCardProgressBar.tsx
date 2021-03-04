import { Image, Progress, Tooltip } from 'antd';
import { useLiveQuery } from 'dexie-react-hooks';
import { memo } from 'react';
import { RockAndStone } from 'assets/other';
import type { AppDatabase } from 'db/AppDatabase';
import useDB from 'db/useDB';
import { Miner, MinerColor } from 'utils/miner';

export type ProgressQuery = (db: AppDatabase, miner: Miner) => Promise<number>;

export default memo(function MinerCardProgressBar({
  miner,
  getProgress,
}: {
  miner: Miner;
  getProgress: ProgressQuery;
}) {
  const db = useDB();
  const progress = useLiveQuery(() => getProgress(db, miner), [
    miner,
    getProgress,
  ]);

  return (
    <Progress
      percent={Math.round((progress || 0) * 100)}
      strokeColor={{
        '0%': MinerColor[miner],
        '100%': '#87d068',
      }}
      format={(percent) =>
        percent === 100 ? (
          <Tooltip title="Assignment complete! Well done, miner.">
            <Image
              alt="100% Complete"
              preview={false}
              src={RockAndStone.png}
              style={{ height: 20, width: 'auto' }}
            />
          </Tooltip>
        ) : (
          `${percent}%`
        )
      }
    />
  );
});
