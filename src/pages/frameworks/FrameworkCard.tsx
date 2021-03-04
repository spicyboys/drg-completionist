import { Card, Col, Tooltip } from 'antd';
import { useLiveQuery } from 'dexie-react-hooks';
import { useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import { Framework } from 'data/frameworks';
import useDB from 'db/useDB';
import { Miner, MinerColor } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';
import FrameworkIcon from './FrameworkIcon';

export default function FrameworkCard(props: {
  miner: Miner;
  weapon: MinerWeapon<Miner>;
  framework: Framework;
}) {
  const db = useDB();
  const query = useLiveQuery(() =>
    db.frameworks.get({ weapon: props.weapon, name: props.framework })
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
      <Tooltip
        destroyTooltipOnHide
        title={props.framework}
        trigger={isMobile ? 'click' : 'hover'}
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
          <FrameworkIcon framework={props.framework} />
        </Card>
      </Tooltip>
    </Col>
  );
}
