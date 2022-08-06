import { Badge, Card, Col } from 'antd';
import { useCallback } from 'react';
import { Framework } from 'data/frameworks';
import { Miner, MinerColor } from 'data/miner';
import { MinerWeapon } from 'data/weapons';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import FrameworkIcon from './FrameworkIcon';
import './FrameworkCard.css';

export default function FrameworkCard(props: {
  miner: Miner;
  weapon: MinerWeapon<Miner>;
  framework: Framework;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () => db.frameworks.get({ weapon: props.weapon, name: props.framework }),
    [props.weapon, props.framework]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.frameworks.add({
        weapon: props.weapon,
        name: props.framework,
      });
    } else {
      db.frameworks
        .where({
          weapon: props.weapon,
          name: props.framework,
        })
        .delete();
    }
  }, [db.frameworks, props.framework, props.weapon, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12} key={props.framework}>
      <Badge.Ribbon className="framework-ribbon" text={props.framework}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query ? MinerColor[props.miner] : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <FrameworkIcon framework={props.framework} />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
