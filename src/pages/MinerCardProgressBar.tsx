import { Image, Progress, Tooltip } from 'antd';
import { memo } from 'react';
import { RockAndStone } from 'assets/other';
import { Miner, MinerColor } from 'utils/miner';

export default memo(function MinerCardProgressBar(props: {
  miner: Miner;
  getProgress: (miner: Miner) => number;
}) {
  return (
    <Progress
      percent={Math.round(props.getProgress(props.miner) * 100)}
      strokeColor={{
        '0%': MinerColor[props.miner],
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
