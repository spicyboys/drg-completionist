import { Card, Col, Tooltip } from 'antd';
import { isMobile } from 'react-device-detect';
import { Framework } from 'data/frameworks';
import { Miner, MinerColor } from 'utils/miner';
import FrameworkIcon from './FrameworkIcon';

export default function FrameworkCard<T extends Miner>(props: {
  miner: T;
  framework: Framework;
  isAcquired: boolean;
  onClick: () => void;
}) {
  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12} key={props.framework}>
      <Tooltip
        destroyTooltipOnHide
        title={props.framework}
        trigger={isMobile ? 'click' : 'hover'}
      >
        <Card
          hoverable
          onClick={props.onClick}
          size="small"
          style={{
            backgroundColor: props.isAcquired
              ? MinerColor[props.miner]
              : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <FrameworkIcon framework={props.framework} />
        </Card>
      </Tooltip>
    </Col>
  );
}
