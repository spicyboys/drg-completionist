import { Row, Divider } from "antd";
import OverclockCard from "./OverclockCard";
import React from "react";
import useStore from "data/useStore";
import Miner from "types/miner";
import { overclocks } from "./OverclockData";

export default function MinerOverclocks(props: { miner: Miner }) {
  const { miner } = props;
  const [acquiredMinerOverclocks, dispatch] = useStore("overclocks", miner);
  const minerOverclocks = overclocks[miner];

  return (
    <>
      {Object.entries(minerOverclocks).map(([weapon, overclocks]) => (
        <React.Fragment key={weapon}>
          <Divider orientation="left">{weapon}</Divider>
          <Row gutter={[16, 16]}>
            {overclocks.map((overclock) => (
              <OverclockCard
                key={overclock.name}
                overclock={overclock}
                miner={miner}
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
