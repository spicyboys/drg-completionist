import { Image, Progress, Row, Tooltip, Typography } from 'antd';
import { memo } from 'react';
import { RockAndStone } from 'assets/other';
import './ProgressCardProgressBar.css';

export default memo(function ProgressCardProgressBar(props: {
  percentage: number;
  obtained: number;
  total: number;
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
            <Row style={{ marginLeft: '4px' }}>
              <Image
                alt="100% Complete"
                preview={false}
                src={RockAndStone.png}
                style={{ height: 20, width: 'auto' }}
              />
              <Typography style={{ marginLeft: '9px', alignSelf: 'center', color: props.obtained === props.total ? 'green' : 'white' }}>
                ({props.obtained}/{props.total})
              </Typography>
            </Row>
          </Tooltip>
        ) : (
          `${percent}% (${props.obtained}/${props.total})`
        )
      }
    />
  );
});
