import { Row } from 'antd';
import React from 'react';
import WeaponDivider from 'components/WeaponDivider';
import { Overclocks } from 'data/overclocks';
import useStore from 'store/useStore';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';
import OverclockCard from './OverclockCard';

export default function MinerOverclocks(props: { miner: Miner }) {
  const { miner } = props;
  const [acquiredOverclocks, dispatch] = useStore('overclocks');
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
                isAcquired={
                  acquiredOverclocks
                    .get(weapon as MinerWeapon<Miner>)
                    ?.has(overclock.name) ?? false
                }
                onClick={() =>
                  dispatch({
                    type: 'TOGGLE_OVERCLOCK',
                    payload: {
                      weapon: weapon as MinerWeapon<Miner>,
                      overclock: overclock.name,
                    },
                  })
                }
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
