import { Image, Progress, Tooltip } from 'antd';
import { memo } from 'react';
import { RockAndStone } from 'assets/other';
import type { AppDatabase } from 'db/AppDatabase';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';

export type ProgressQuery = (db: AppDatabase) => Promise<number>;

export default memo(function BoscoProgressBar(props: {
  barColor: string;
  getProgress: ProgressQuery;
}) {
  const db = useDB();
  const progress = useSuspendedLiveQuery(() => props.getProgress(db), []);
  const progressPercentage = Math.round((progress || 0) * 100);

  return (
    <Progress
      percent={progressPercentage}
      strokeColor={{
        '0%': props.barColor,
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
