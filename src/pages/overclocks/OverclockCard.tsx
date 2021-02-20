import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import { Card, Col, Grid, Popover } from 'antd';
import { Miner, MinerColor, MinerColorContrastText } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';
import OverclockCardPopover from './OverclockCardPopover';
import { Overclock } from './OverclockData';
import OverclockIcon from './OverclockIcon';

const { useBreakpoint } = Grid;

export default function OverclockCard(props: {
  overclock: Overclock;
  miner: Miner;
  weapon: MinerWeapon<Miner>;
  isAcquired: boolean;
  onClick: () => void;
}) {
  return (
    <Col xxl={4} xl={6} lg={8} md={12} xs={24} key={props.overclock.name}>
      <Card
        hoverable
        title={props.overclock.name}
        headStyle={
          props.isAcquired
            ? {
                backgroundColor: MinerColor[props.miner],
                color: MinerColorContrastText[props.miner],
                fontWeight: 'bold',
                transition: 'all 0.5s',
              }
            : {
                color: '#cccccc',
                fontWeight: 'bold',
                transition: 'all 0.5s',
              }
        }
        onClick={props.onClick}
      >
        <OverclockIcon overclock={props.overclock} />
        <Popover
          trigger={useBreakpoint()['xs'] ? 'click' : 'hover'}
          content={() => (
            <OverclockCardPopover
              weapon={props.weapon}
              overclock={props.overclock}
              onClick={props.onClick}
            />
          )}
        >
          <InfoCircleOutlined
            style={{
              color: 'white',
              float: 'right',
              marginTop: -14,
            }}
            onClick={props.onClick}
          />
        </Popover>
      </Card>
    </Col>
  );
}
