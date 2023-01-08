import { Badge, Card, Col } from 'antd';
import { useCallback } from 'react';
import { Miner, MinerColor } from 'data/miner';
import { UniqueWeaponPaintjob } from 'data/weaponPaintjobs';
import { MinerWeapon } from 'data/weapons';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import WeaponPaintjobIcon from './WeaponPaintjobIcon';
import './WeaponPaintjobCard.css';

export default function UniqueWeaponPaintjobCard(props: {
  miner: Miner;
  weapon: MinerWeapon<Miner>;
  weaponPaintjob: UniqueWeaponPaintjob;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.uniqueWeaponPaintjobs.get({
        weapon: props.weapon,
        name: props.weaponPaintjob.name,
      }),
    [props.weapon, props.weaponPaintjob.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.uniqueWeaponPaintjobs.add({
        weapon: props.weapon,
        name: props.weaponPaintjob.name,
      });
    } else {
      db.uniqueWeaponPaintjobs
        .where({
          weapon: props.weapon,
          name: props.weaponPaintjob.name,
        })
        .delete();
    }
  }, [
    db.uniqueWeaponPaintjobs,
    props.weaponPaintjob.name,
    props.weapon,
    query,
  ]);

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
        className='weaponPaintjob-ribbon'
        text={props.weaponPaintjob.name}
      >
        <Card
          hoverable
          onClick={onClick}
          size='small'
          style={{
            backgroundColor: query ? MinerColor[props.miner] : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <WeaponPaintjobIcon weaponPaintjob={props.weaponPaintjob} />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
