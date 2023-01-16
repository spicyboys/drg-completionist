import { Badge, Card, Col, Row } from 'antd';
import { useCallback } from 'react';
import { ArmorPaintjob } from 'data/armor';
import { Miner, MinerColor } from 'data/miner';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ItemOrigin from 'pages/ItemOrigin';
import ArmorPaintjobIcon from './ArmorPaintjobIcon';
import './ArmorPaintjobCard.css';

export default function ArmorPaintjobCard(props: {
  miner: Miner;
  paintjob: ArmorPaintjob;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.armorPaintjobs.get({ miner: props.miner, name: props.paintjob.name }),
    [props.miner, props.paintjob.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.armorPaintjobs.add({
        miner: props.miner,
        name: props.paintjob.name,
      });
    } else {
      db.armorPaintjobs
        .where({
          miner: props.miner,
          name: props.paintjob.name,
        })
        .delete();
    }
  }, [db.armorPaintjobs, props.miner, props.paintjob.name, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12} key={props.paintjob.name}>
      <Badge.Ribbon
        className="armor-paintjob-ribbon"
        text={props.paintjob.name}
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
          <ArmorPaintjobIcon paintjob={props.paintjob} />
          <Row justify="end">
            <Col>
              <ItemOrigin item={props.paintjob} acquired={query && true} />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
