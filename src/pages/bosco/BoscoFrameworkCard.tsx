import { Badge, Card, Col, Row } from 'antd';
import { useCallback } from 'react';
import { BoscoFramework } from 'data/bosco';
import { MinerColor } from 'data/miner';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ItemOrigin from 'pages/ItemOrigin';
import BoscoItemIcon from './BoscoItemIcon';
import './BoscoCard.css';

const accentColor = MinerColor.Driller;

export default function BoscoFrameworkCard(props: {
  framework: BoscoFramework;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () => db.boscoFrameworks.get({ name: props.framework.name }),
    [props.framework.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.boscoFrameworks.add({
        name: props.framework.name,
      });
    } else {
      db.boscoFrameworks
        .where({
          name: props.framework.name,
        })
        .delete();
    }
  }, [db.boscoFrameworks, props.framework.name, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12} key={props.framework.name}>
      <Badge.Ribbon className="bosco-ribbon" text={props.framework.name}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query ? accentColor : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <BoscoItemIcon item={props.framework} />
          <Row justify="end">
            <Col>
              <ItemOrigin item={props.framework} acquired={query && true} />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
