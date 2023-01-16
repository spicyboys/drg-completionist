import { Badge, Card, Col, Row, Tooltip } from 'antd';
import { useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import { ForgeHammer } from 'assets/other';
import Image from 'components/Image';
import { Miner, MinerColor } from 'data/miner';
import { MatrixWeaponPaintjob } from 'data/weaponPaintjobs';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ItemOrigin from 'pages/ItemOrigin';
import WeaponPaintjobIcon from './WeaponPaintjobIcon';
import './WeaponPaintjobCard.css';

export default function MatrixWeaponPaintjobCard(props: {
  miner: Miner;
  weaponPaintjob: MatrixWeaponPaintjob;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.matrixWeaponPaintjobs.get({
        miner: props.miner,
        name: props.weaponPaintjob.name,
      }),
    [props.miner, props.weaponPaintjob.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.matrixWeaponPaintjobs.add({
        miner: props.miner,
        name: props.weaponPaintjob.name,
        isForged: false,
      });
    } else if (query.isForged) {
      db.matrixWeaponPaintjobs
        .where({
          miner: props.miner,
          name: props.weaponPaintjob.name,
        })
        .delete();
    } else {
      db.matrixWeaponPaintjobs
        .where({
          miner: props.miner,
          name: props.weaponPaintjob.name,
        })
        .modify({ isForged: true });
    }
  }, [db.matrixWeaponPaintjobs, props.weaponPaintjob.name, props.miner, query]);

  return (
    <Col
      xxl={4}
      xl={4}
      lg={8}
      md={8}
      sm={8}
      xs={12}
      key={props.weaponPaintjob.name}
    >
      <Badge.Ribbon
        className="weaponPaintjob-ribbon"
        text={props.weaponPaintjob.name}
      >
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query?.isForged
              ? MinerColor[props.miner]
              : 'inherit',
            transition: 'all 0.3s ease',
            outline:
              query && !query?.isForged
                ? `3px solid ${MinerColor[props.miner]}`
                : undefined,
          }}
        >
          <WeaponPaintjobIcon weaponPaintjob={props.weaponPaintjob} />
          <Row justify="space-between">
            <Col>
              <Tooltip
                title={query && !query?.isForged ? 'Unforged' : undefined}
                trigger={isMobile ? 'click' : 'hover'}
                destroyTooltipOnHide
                key={`${
                  props.miner + props.weaponPaintjob.name
                }-unforged-tooltip`}
              >
                <Image
                  alt={`${props.weaponPaintjob.name} is acquired, but unforged`}
                  src={ForgeHammer}
                  key={`${props.miner + props.weaponPaintjob.name}-unforged`}
                  style={{
                    float: 'left',
                    height: isMobile ? 30 : 20,
                    marginTop: isMobile ? -30 : -20,
                    opacity: query && !query?.isForged ? 1 : 0,
                    width: 'auto',
                  }}
                />
              </Tooltip>
            </Col>
            <Col>
              <ItemOrigin item={props.weaponPaintjob} />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
