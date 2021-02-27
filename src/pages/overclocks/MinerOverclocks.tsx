import { Row } from 'antd';
import React, { useCallback } from 'react';
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

  const isAcquired = useCallback(
    (weapon: MinerWeapon<Miner>, overclock: Overclock) => {
      return acquiredOverclocks.get(weapon)?.has(overclock.name) ?? false;
    },
    [acquiredOverclocks]
  );

  const isForged = useCallback(
    (weapon: MinerWeapon<Miner>, overclock: Overclock) => {
      return forgedOverclocks.get(weapon)?.has(overclock.name) ?? false;
    },
    [forgedOverclocks]
  );

  // Cycles a given overclock state from unacquired, to acquired-but-unforged, to forged, then back to unacquired
  const setOverclockState = useCallback(
    (weapon: MinerWeapon<Miner>, overclock: Overclock) => {
      const toggleAcquired = (
        weapon: MinerWeapon<Miner>,
        overclock: Overclock
      ) =>
        dispatch({
          type: 'TOGGLE_OVERCLOCK_ACQUIRED',
          payload: {
            weapon: weapon,
            overclock: overclock.name,
          },
        });

      const toggleForged = (weapon: MinerWeapon<Miner>, overclock: Overclock) =>
        dispatch({
          type: 'TOGGLE_OVERCLOCK_FORGED',
          payload: {
            weapon: weapon,
            overclock: overclock.name,
          },
        });

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
    },
    [dispatch, isAcquired, isForged]
  );

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
