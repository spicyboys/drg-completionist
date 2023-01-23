import { Badge, Card, Col, Row } from 'antd';
import { useCallback } from 'react';
import { BoscoPaintjob } from 'data/bosco';
import { MinerColor } from 'data/miner';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ItemOrigin from 'pages/ItemOrigin';
import BoscoItemIcon from './BoscoItemIcon';
import './BoscoCard.css';

const accentColor = MinerColor.Driller;

export default function BoscoPaintjobCard(props: { paintjob: BoscoPaintjob }) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () => db.boscoPaintjobs.get({ name: props.paintjob.name }),
    [props.paintjob.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.boscoPaintjobs.add({
        name: props.paintjob.name,
      });
    } else {
      db.boscoPaintjobs
        .where({
          name: props.paintjob.name,
        })
        .delete();
    }
  }, [db.boscoPaintjobs, props.paintjob.name, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12} key={props.paintjob.name}>
      <Badge.Ribbon className="bosco-ribbon" text={props.paintjob.name}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query ? accentColor : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <BoscoItemIcon item={props.paintjob} />
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
