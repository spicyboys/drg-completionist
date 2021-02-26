import { Card, Col } from 'antd';
import { Miner, MinerColor, MinerColorContrastText } from 'utils/miner';
import { Framework } from './FrameworkData';
import FrameworkIcon from './FrameworkIcon';

export default function FrameworkCard<T extends Miner>(props: {
  miner: T;
  framework: Framework;
  isAcquired: boolean;
  onClick: () => void;
}) {
  return (
    <Col xxl={4} xl={6} lg={8} md={12} sm={12} xs={24} key={props.framework}>
      <Card
        hoverable
        title={props.framework}
        headStyle={
          props.isAcquired
            ? {
                backgroundColor: MinerColor[props.miner],
                color: MinerColorContrastText[props.miner],
                fontWeight: 'bold',
                transition: 'all 0.3s',
              }
            : {
                color: '#cccccc',
                fontWeight: 'bold',
                transition: 'all 0.3s',
              }
        }
        onClick={props.onClick}
      >
        <FrameworkIcon framework={props.framework} />
      </Card>
    </Col>
  );
}
