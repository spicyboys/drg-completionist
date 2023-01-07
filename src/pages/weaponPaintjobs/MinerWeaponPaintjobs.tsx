import { Row } from 'antd';
import React from 'react';
import WeaponDivider from 'components/WeaponDivider';
import { Miner } from 'data/miner';
import {
  CommonWeaponPaintjobIDs,
  WeaponPaintjob,
} from 'data/weaponPaintjobs';
import { MinerWeapon, MinerWeapons } from 'data/weapons';
import WeaponPaintjobCard from 'pages/weaponPaintjobs/WeaponPaintjobCard';

export default function MinerWeaponPaintjobs<T extends Miner>(props: {
  miner: T;
}) {
  const { miner } = props;

  return (
    <>
      {(MinerWeapons[miner] as readonly MinerWeapon<T>[]).map((weapon) => (
        <React.Fragment key={weapon}>
          <WeaponDivider weapon={weapon} />
          <Row gutter={[16, 16]}>
            {Object.entries(CommonWeaponPaintjobIDs).map(([paintjob, id]) => (
              <WeaponPaintjobCard
                key={miner + paintjob + id}
                miner={miner}
                weapon={weapon}
                weaponPaintjob={paintjob as WeaponPaintjob}
              />
            ))}
            ;
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
