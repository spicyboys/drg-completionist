import React, { useCallback } from 'react';
import { Badge, Card, Col } from 'antd';
import { useDB } from '../../hooks/db';
import WeaponPaintJobIcon from './WeaponPaintJobIcon';
import { graphql } from 'gatsby';
import { useLiveQuery } from 'dexie-react-hooks';

export default function WeaponPaintJobCard({
  miner,
  paintJob,
}: {
  miner: Queries.WeaponPaintJobCardMinerFragment;
  paintJob: Queries.WeaponPaintJobCardWeaponPaintJobFragment;
}) {
  const db = useDB();
  const query = useLiveQuery(
    () => db.weaponPaintjobs.get({ miner: miner.name, name: paintJob.name }),
    [miner.name, paintJob.name],
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.weaponPaintjobs.add({
        miner: miner.name,
        name: paintJob.name,
        isForged: paintJob.source === 'MATRIX_CORE' ? false : true,
      });
    } else if (query.isForged) {
      db.weaponPaintjobs
        .where({
          miner: miner.name,
          name: paintJob.name,
        })
        .delete();
    } else {
      db.weaponPaintjobs
        .where({
          miner: miner.name,
          name: paintJob.name,
        })
        .modify({ isForged: true });
    }
  }, [db.weaponPaintjobs, miner.name, paintJob.name, paintJob.source, query]);

  return (
    <Col xxl={4} xl={6} lg={8} md={8} sm={12} xs={24} key={paintJob.name}>
      <Badge.Ribbon className="armor-paintjob-ribbon" text={paintJob.name}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query?.isForged ? miner.color : 'inherit',
            transition: 'all 0.3s ease',
            outline:
              query && !query?.isForged
                ? `3px solid ${miner.color}`
                : undefined,
          }}
        >
          <WeaponPaintJobIcon paintJob={paintJob} />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}

export const query = graphql`
  fragment WeaponPaintJobCardMiner on MinersJson {
    name
    color
  }

  fragment WeaponPaintJobCardWeaponPaintJob on WeaponPaintJob {
    name
    source
    ...WeaponPaintJobIconWeaponPaintJob
  }
`;
