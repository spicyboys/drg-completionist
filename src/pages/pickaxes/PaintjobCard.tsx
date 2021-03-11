import { Badge, Card, Col } from 'antd';
import { useCallback } from 'react';
import { PickaxePaintjobNames, PickaxeParts } from 'data/pickaxes';
import './PaintjobCard.css';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import PaintjobIcon from './PaintjobIcon';

const accentColor = '#176cff';

export default function PaintjobCard(props: {
  paintjob: typeof PickaxePaintjobNames[number];
}) {
  const db = useDB();
  const part: PickaxeParts = 'Paintjob';
  const query = useSuspendedLiveQuery(
    () => db.pickaxes.get({ name: props.paintjob, part: part }),
    [props.paintjob]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.pickaxes.add({ name: props.paintjob, part: part });
    } else {
      db.pickaxes.where({ name: props.paintjob, part: part }).delete();
    }
  }, [db.pickaxes, props.paintjob, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12}>
      <Badge.Ribbon className="pickaxe-ribbon" text={props.paintjob}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query ? accentColor : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <PaintjobIcon paintjob={props.paintjob} />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
