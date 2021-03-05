import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import { Card, Col, Popover, Tooltip } from 'antd';
import { useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import { ForgeHammer } from 'assets/other';
import Image from 'components/Image';
import { Overclock } from 'data/overclocks';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import { Miner, MinerColor, MinerColorContrastText } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';
import OverclockCardPopover from './OverclockCardPopover';
import OverclockIcon from './OverclockIcon';

export default function OverclockCard(props: {
  overclock: Overclock;
  miner: Miner;
  weapon: MinerWeapon<Miner>;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.overclocks.get({ weapon: props.weapon, name: props.overclock.name }),
    [props.weapon, props.overclock.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.overclocks.add({
        weapon: props.weapon,
        name: props.overclock.name,
        isForged: false,
      });
    } else if (query.isForged) {
      db.overclocks
        .where({
          weapon: props.weapon,
          name: props.overclock.name,
        })
        .delete();
    } else {
      db.overclocks
        .where({
          weapon: props.weapon,
          name: props.overclock.name,
        })
        .modify({ isForged: true });
    }
  }, [db, props.overclock.name, props.weapon, query]);

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
          backgroundColor: query?.isForged
            ? MinerColor[props.miner]
            : 'inherit',
          color: query?.isForged
            ? MinerColorContrastText[props.miner]
            : '#cccccc',
          fontWeight: 'bold',
          transition: 'all 0.3s',
        }}
        style={
          query && !query?.isForged
            ? {
                outline: `3px solid ${MinerColor[props.miner]}`,
              }
            : undefined
        }
        onClick={onClick}
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
          />
        </Popover>
        <Tooltip
          title={query && !query?.isForged ? 'Unforged' : undefined}
          trigger={isMobile ? 'click' : 'hover'}
          destroyTooltipOnHide
        >
          <Image
            alt={`${props.overclock.name} is acquired, but unforged`}
            src={ForgeHammer}
            style={{
              float: 'left',
              height: isMobile ? 30 : 20,
              marginTop: isMobile ? -30 : -20,
              opacity: query && !query?.isForged ? 1 : 0,
              width: 'auto',
            }}
          />
        </Tooltip>
      </Card>
    </Col>
  );
}
