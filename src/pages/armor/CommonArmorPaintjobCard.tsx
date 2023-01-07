import { Badge, Card, Col } from 'antd';
import { useCallback } from 'react';
import { CommonArmorPaintjob } from 'data/armor';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ArmorPaintjobIcon from './ArmorPaintjobIcon';
import './ArmorPaintjobCard.css';

export default function CommonArmorPaintjobCard({
  paintjob,
}: {
  paintjob: CommonArmorPaintjob;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.commonArmorPaintjobs.get({
        name: paintjob.name,
      }),
    [paintjob.name]
  );

  const onClick = useCallback(() => {
    if (query) {
      db.commonArmorPaintjobs
        .where({
          name: paintjob.name,
        })
        .delete();
    } else {
      db.commonArmorPaintjobs.add({
        name: paintjob.name,
      });
    }
  }, [db.commonArmorPaintjobs, paintjob.name, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12} key={paintjob.name}>
      <Badge.Ribbon className="armor-paintjob-ribbon" text={paintjob.name}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query ? '#A8A8A8' : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <ArmorPaintjobIcon paintjob={paintjob} />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
