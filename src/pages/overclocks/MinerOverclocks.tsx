import { Row } from 'antd';
import React from 'react';
import WeaponDivider from 'components/WeaponDivider';
import { Miner } from 'data/miner';
import { Overclocks } from 'data/overclocks';
import { MinerWeapon } from 'data/weapons';
import OverclockCard from './OverclockCard';

export default function MinerOverclocks(props: { miner: Miner }) {
  const { miner } = props;
  const minerOverclocks = Overclocks[miner];
  return (
    <>
      {Object.entries(minerOverclocks).map(([weapon, overclocks]) => (
        <React.Fragment key={weapon}>
          <WeaponDivider weapon={weapon as MinerWeapon<Miner>} />
          <Row gutter={[16, 16]}>
            {overclocks.map((overclock) => (
              <OverclockCard
                key={overclock.name}
                overclock={overclock}
                miner={miner}
                weapon={weapon as MinerWeapon<Miner>}
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
