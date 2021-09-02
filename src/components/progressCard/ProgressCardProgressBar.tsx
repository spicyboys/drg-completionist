import { Image, Progress, Tooltip } from 'antd';
import { memo } from 'react';
import { RockAndStone } from 'assets/other';

export default memo(function ProgressCardProgressBar(props: {
  percentage: number;
  initialStrokeColor: string;
}) {
  return (
    <Progress
      percent={props.percentage}
      strokeColor={{
        '0%': props.initialStrokeColor,
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
