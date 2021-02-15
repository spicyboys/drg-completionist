import { Row } from "antd";
import OverclockCard from "./OverclockCard";
import React from "react";
import useStore from "data/useStore";
import { Miner } from "utils/miner";
import { overclocks } from "./OverclockData";
import { MinerWeapon } from "utils/weapons";
import WeaponDivider from "components/WeaponDivider";

export default function MinerOverclocks(props: { miner: Miner }) {
  const { miner } = props;
  const [acquiredMinerOverclocks, dispatch] = useStore("overclocks", miner);
  const minerOverclocks = overclocks[miner];

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
                isAcquired={acquiredMinerOverclocks.includes(overclock.name)}
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_OVERCLOCK",
                    payload: {
                      miner,
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
