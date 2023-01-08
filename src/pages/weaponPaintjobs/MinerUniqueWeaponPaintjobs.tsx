import { Row } from 'antd';
import React from 'react';
import WeaponDivider from 'components/WeaponDivider';
import { Miner } from 'data/miner';
import {
  UniqueWeaponPaintjob,
  UniqueWeaponPaintjobs,
} from 'data/weaponPaintjobs';
import { MinerWeapon, MinerWeapons } from 'data/weapons';
import UniqueWeaponPaintjobCard from 'pages/weaponPaintjobs/UniqueWeaponPaintjobCard';

export default function MinerUniqueWeaponPaintjobs<T extends Miner>(props: {
  miner: T;
}) {
  const { miner } = props;

  return (
    <>
      {(MinerWeapons[miner] as readonly MinerWeapon<T>[]).map((weapon) => (
        <React.Fragment key={weapon}>
          <WeaponDivider weapon={weapon} />
          <Row gutter={[16, 16]}>
            {Object.values(UniqueWeaponPaintjobs).map((paintjob) => (
              <UniqueWeaponPaintjobCard
                key={miner + paintjob.name + paintjob.id}
                miner={miner}
                weapon={weapon}
                weaponPaintjob={paintjob as UniqueWeaponPaintjob}
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
