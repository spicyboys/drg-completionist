import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import { Card, Col, Popover } from 'antd';
import { isMobile } from 'react-device-detect';
import { Overclock } from 'data/overclocks';
import { Miner, MinerColor, MinerColorContrastText } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';
import OverclockCardPopover from './OverclockCardPopover';
import OverclockIcon from './OverclockIcon';

export default function OverclockCard(props: {
  overclock: Overclock;
  miner: Miner;
  weapon: MinerWeapon<Miner>;
  isAcquired: boolean;
  onClick: () => void;
}) {
  return (
    <Col
      key={props.overclock.name}
      xs={24}
      sm={12}
      md={12}
      lg={8}
      xl={6}
      xxl={4}
    >
      <Card
        hoverable
        title={props.overclock.name}
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
        <OverclockIcon overclock={props.overclock} />
        <Popover
          trigger={isMobile ? 'click' : 'hover'}
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
              fontSize: isMobile ? '2em' : 'inherit',
              marginTop: isMobile ? '-1em' : -14,
            }}
            onClick={props.onClick}
          />
        </Popover>
      </Card>
    </Col>
  );
}
