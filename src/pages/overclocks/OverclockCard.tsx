import OverclockIcon from './OverclockIcon';
import { Overclock } from './OverclockData';
import { Card, Col, Popover } from 'antd';
import OverclockCardPopover from './OverclockCardPopover';
import { Miner, MinerColor } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';

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
                color: 'black',
                backgroundColor: MinerColor[props.miner],
                fontWeight: 'bold',
                transition: 'all .2s',
              }
            : {
                fontWeight: 'bold',
                transition: 'all .2s',
              }
        }
        onClick={props.onClick}
      >
        <OverclockIcon overclock={props.overclock} />
        <Popover
          content={() => (
            <OverclockCardPopover
              weapon={props.weapon}
              overclock={props.overclock}
            />
          )}
        >
          <InfoCircleOutlined
            style={{
              color: 'white',
              float: 'right',
              marginTop: -14,
            }}
          />
        </Popover>
      </Card>
    </Col>
  );
}
