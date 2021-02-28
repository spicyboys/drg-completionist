import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import { Card, Col, Popover, Tooltip } from 'antd';
import { isMobile } from 'react-device-detect';
import { ForgeHammer } from 'assets/other';
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
  isForged: boolean;
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
        headStyle={{
          backgroundColor: props.isForged ? MinerColor[props.miner] : 'inherit',
          color: props.isForged
            ? MinerColorContrastText[props.miner]
            : '#cccccc',
          fontWeight: 'bold',
          transition: 'all 0.3s',
        }}
        style={
          props.isAcquired && !props.isForged
            ? {
                outline: `3px solid ${MinerColor[props.miner]}`,
              }
            : undefined
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
            />
          )}
          destroyTooltipOnHide
        >
          <InfoCircleOutlined
            style={{
              color: 'white',
              float: 'right',
              fontSize: isMobile ? 30 : 14,
              marginTop: isMobile ? -30 : -14,
            }}
            onClick={props.onClick}
          />
        </Popover>
        <Tooltip
          title={!props.isForged && props.isAcquired ? 'Unforged' : undefined}
          trigger={isMobile ? 'click' : 'hover'}
          destroyTooltipOnHide
        >
          <img
            alt={`${props.overclock.name} is acquired, but unforged`}
            src={ForgeHammer}
            style={{
              float: 'left',
              height: isMobile ? 30 : 20,
              marginTop: isMobile ? -30 : -20,
              opacity: !props.isForged && props.isAcquired ? 1 : 0,
              width: 'auto',
            }}
            onClick={
              !props.isForged && props.isAcquired ? props.onClick : undefined
            }
          />
        </Tooltip>
      </Card>
    </Col>
  );
}
