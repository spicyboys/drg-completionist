import { Row } from 'antd';
import React from 'react';
import WeaponDivider from 'components/WeaponDivider';
import { Frameworks } from 'data/frameworks';
import { Miner } from 'data/miner';
import { MinerWeapon, MinerWeapons } from 'data/weapons';
import FrameworkCard from './FrameworkCard';

export default function MinerFrameworks<T extends Miner>(props: { miner: T }) {
  const { miner } = props;

  return (
    <>
      {(MinerWeapons[miner] as readonly MinerWeapon<T>[]).map((weapon) => (
        <React.Fragment key={weapon}>
          <WeaponDivider weapon={weapon} />
          <Row gutter={[16, 16]}>
            {Frameworks[weapon].map((framework) => (
              <FrameworkCard
                key={framework.name}
                miner={miner}
                weapon={weapon}
                framework={framework}
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
