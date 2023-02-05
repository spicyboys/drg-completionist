import { Badge, Card, Col, Row } from 'antd';
import { useCallback } from 'react';
import { MinerColor } from 'data/miner';
import { Pickaxe, PickaxePaintjobNames, PickaxeParts, Pickaxes } from 'data/pickaxes';
import './PaintjobCard.css';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ItemOrigin from 'pages/ItemOrigin';
import PaintjobIcon from './PaintjobIcon';

const accentColor = MinerColor.Scout;

export default function PaintjobCard(props: {
  paintjob: typeof PickaxePaintjobNames[number];
}) {
  const db = useDB();
  const paintjobPart: PickaxeParts = 'Paintjob';
  const query = useSuspendedLiveQuery(
    () => db.pickaxes.get({ name: props.paintjob, part: paintjobPart }),
    [props.paintjob]
  );

  /** When clicked, add new entry to IndexedDB if Paintjob doesn't exist,
   *  or delete its entry if it does. */
  const toggleEntry = useCallback(() => {
    if (query === undefined) {
      db.pickaxes.add({ name: props.paintjob, part: paintjobPart });
    } else {
      db.pickaxes.where({ name: props.paintjob, part: paintjobPart }).delete();
    }
  }, [db.pickaxes, props.paintjob, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12}>
      <Badge.Ribbon className="pickaxe-ribbon" text={props.paintjob}>
        <Card
          hoverable
          onClick={toggleEntry}
          size="small"
          style={{
            backgroundColor: query ? accentColor : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <PaintjobIcon paintjob={props.paintjob} />
          <Row justify="end">
            <Col>
              <ItemOrigin item={Pickaxes.find((pick) => pick.name === props.paintjob) as Pickaxe} acquired={query && true} />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
