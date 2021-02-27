import { Row } from 'antd';
import React from 'react';
import WeaponDivider from 'components/WeaponDivider';
import { Overclock, Overclocks } from 'data/overclocks';
import useStore from 'store/useStore';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';
import OverclockCard from './OverclockCard';

export default function MinerOverclocks(props: { miner: Miner }) {
  const { miner } = props;
  const [
    { overclocks: forgedOverclocks, unforgedOverclocks: acquiredOverclocks },
    dispatch,
  ] = useStore();
  const minerOverclocks = Overclocks[miner];

  const isAcquired = (weapon: MinerWeapon<Miner>, overclock: Overclock) => {
    return (
      acquiredOverclocks
        .get(weapon as MinerWeapon<Miner>)
        ?.has(overclock.name) ?? false
    );
  };

  const isForged = (weapon: MinerWeapon<Miner>, overclock: Overclock) => {
    return (
      forgedOverclocks.get(weapon as MinerWeapon<Miner>)?.has(overclock.name) ??
      false
    );
  };

  const toggleAcquired = (weapon: MinerWeapon<Miner>, overclock: Overclock) =>
    dispatch({
      type: 'TOGGLE_OVERCLOCK_ACQUIRED', // Placeholder value copied from ToggleForged()
      payload: {
        weapon: weapon as MinerWeapon<Miner>,
        overclock: overclock.name,
      },
    });

  const toggleForged = (weapon: MinerWeapon<Miner>, overclock: Overclock) =>
    dispatch({
      type: 'TOGGLE_OVERCLOCK_FORGED',
      payload: {
        weapon: weapon as MinerWeapon<Miner>,
        overclock: overclock.name,
      },
    });

  // Cycles a given overclock state from unacquired, to acquired-but-unforged, to forged, then back to unacquired
  const setOverclockState = (
    weapon: MinerWeapon<Miner>,
    overclock: Overclock
  ) => {
    // Set from unacquired to acquired-but-unforged
    if (!isAcquired(weapon, overclock) && !isForged(weapon, overclock)) {
      toggleAcquired(weapon, overclock);
    }
    // Set from acquired-but-unforged to forged
    else if (isAcquired(weapon, overclock) && !isForged(weapon, overclock)) {
      toggleForged(weapon, overclock);
    }
    // Set from forged back to unacquired
    else if (isForged(weapon, overclock)) {
      toggleAcquired(weapon, overclock);
      toggleForged(weapon, overclock);
    }
    // Set from unintentional isForged && !isAcquired edge case to unacquired
    else {
      toggleForged(weapon, overclock);
    }
  };

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
                isAcquired={isAcquired(weapon as MinerWeapon<Miner>, overclock)}
                isForged={isForged(weapon as MinerWeapon<Miner>, overclock)}
                onClick={() =>
                  setOverclockState(weapon as MinerWeapon<Miner>, overclock)
                }
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
