import { Badge, Card, Col, Row } from 'antd';
import { useCallback } from 'react';
import { Miner, MinerColor } from 'data/miner';
import { CommonWeaponPaintjob } from 'data/weaponPaintjobs';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ItemOrigin from 'pages/ItemOrigin';
import WeaponPaintjobIcon from './WeaponPaintjobIcon';
import './WeaponPaintjobCard.css';

export default function CommonWeaponPaintjobCard(props: {
  miner: Miner;
  weaponPaintjob: CommonWeaponPaintjob;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.commonWeaponPaintjobs.get({
        miner: props.miner,
        name: props.weaponPaintjob.name,
      }),
    [props.miner, props.weaponPaintjob.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.commonWeaponPaintjobs.add({
        miner: props.miner,
        name: props.weaponPaintjob.name,
      });
    } else {
      db.commonWeaponPaintjobs
        .where({
          miner: props.miner,
          name: props.weaponPaintjob.name,
        })
        .delete();
    }
  }, [db.commonWeaponPaintjobs, props.weaponPaintjob.name, props.miner, query]);

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
            backgroundColor: query ? MinerColor[props.miner] : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <WeaponPaintjobIcon weaponPaintjob={props.weaponPaintjob} />

          <Row justify="space-between">
            <Col flex="auto" />
            <Col>
              <ItemOrigin item={props.weaponPaintjob} />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
