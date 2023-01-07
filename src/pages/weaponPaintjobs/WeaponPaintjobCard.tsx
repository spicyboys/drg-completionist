import { Badge, Card, Col } from 'antd';
import { useCallback } from 'react';
import { Miner, MinerColor } from 'data/miner';
import { MinerWeapon } from 'data/weapons';
import { WeaponPaintjob } from '../../data/weaponPaintjobs';
import useDB from '../../db/useDB';
import useSuspendedLiveQuery from '../../db/useSuspendedLiveQuery';
import WeaponPaintjobIcon from './WeaponPaintjobIcon';
import './WeaponPaintjobCard.css'

export default function WeaponPaintjobCard(props: {
  miner: Miner;
  weapon: MinerWeapon<Miner>;
  weaponPaintjob: WeaponPaintjob;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.weaponPaintjobs.get({
        weapon: props.weapon,
        name: props.weaponPaintjob,
      }),
    [props.weapon, props.weaponPaintjob]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.weaponPaintjobs.add({
        weapon: props.weapon,
        name: props.weaponPaintjob,
      });
    } else {
      db.weaponPaintjobs
        .where({
          weapon: props.weapon,
          name: props.weaponPaintjob,
        })
        .delete();
    }
  }, [db.weaponPaintjobs, props.weaponPaintjob, props.weapon, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12} key={props.weaponPaintjob}>
      <Badge.Ribbon
        className="weaponPaintjob-ribbon"
        text={props.weaponPaintjob}
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
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
