import { Image, Progress, Tooltip } from 'antd';
import { memo } from 'react';
import { RockAndStone } from 'assets/other';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import { ProgressQuery } from 'types/progress';

export default memo(function BoscoProgressBar(props: {
  barColor: string;
  getProgress: ProgressQuery;
}) {
  const db = useDB();
  const { obtained, total } = useSuspendedLiveQuery(
    () => props.getProgress(db),
    []
  );
  const progressPercentage = Math.floor((obtained / total || 0) * 100);

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
