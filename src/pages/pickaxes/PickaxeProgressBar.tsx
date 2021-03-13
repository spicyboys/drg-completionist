import { Image, Progress, Tooltip } from 'antd';
import { memo, useEffect } from 'react';
import { RockAndStone } from 'assets/other';
import type { AppDatabase } from 'db/AppDatabase';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';

export type ProgressQuery = (db: AppDatabase) => Promise<number>;

export default memo(function PickaxeProgressBar({
  barColor,
  category,
  getProgress,
}: {
  barColor: string;
  category: string;
  getProgress: ProgressQuery;
}) {
  const db = useDB();
  const progress = useSuspendedLiveQuery(() => getProgress(db), []);
  const progressPercentage = Math.round((progress || 0) * 100);

  useEffect(() => {
    gtag('event', 'progress', {
      event_category: category,
      event_label: category,
      value: progressPercentage,
    });
  }, [category, progressPercentage]);

  return (
    <Progress
      percent={progressPercentage}
      strokeColor={{
        '0%': barColor,
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
