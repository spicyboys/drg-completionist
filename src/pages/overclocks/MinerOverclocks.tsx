import { Card, Row, Image, Progress, Divider } from "antd";
import OverclockCard from "./OverclockCard";
import { useMemo } from "react";
import { Collapse, CollapsePanelProps } from "antd";
import React from "react";
import useStore from "data/useStore";
import Miner from "types/miner";
import { overclocks } from "./OverclockData";
import MinerColor from "utils/minerColor";
import MinerAvatar from "utils/minerAvatar";

const { Panel } = Collapse;
const { Meta } = Card;

export default function MinerOverclocks(
  props: {
    miner: Miner;
  } & Omit<CollapsePanelProps, "key" | "header">
) {
  const { miner, ...panelProps } = props;
  const [state, dispatch] = useStore();
  const minerOverclocks = overclocks[miner];

  const progressBar = useMemo(() => {
    const overclockNames = Object.values(minerOverclocks)
      .flat()
      .map((overclock) => overclock.name);
    const acquiredMinerOverclocks = state.overclocks[
      miner
    ].filter((overclock) => overclockNames.includes(overclock));
    return (
      <Progress
        percent={Math.round(
          (acquiredMinerOverclocks.length / overclockNames.length) * 100
        )}
        strokeColor={{
          "0%": MinerColor[miner],
          "100%": "#87d068",
        }}
      />
    );
  }, [miner, minerOverclocks, state.overclocks]);

  return (
    <Panel
      {...panelProps}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title={miner}
          avatar={
            <Image
              src={MinerAvatar[miner]}
              preview={false}
              height={64}
              width={64}
            />
          }
          description={progressBar}
        />
      }
      key={miner}
    >
      {Object.entries(minerOverclocks).map(([weapon, overclocks]) => (
        <React.Fragment key={weapon}>
          <Divider orientation="left">{weapon}</Divider>
          <Row gutter={[16, 16]}>
            {overclocks.map((overclock) => (
              <OverclockCard
                key={overclock.name}
                overclock={overclock}
                miner={miner}
                isAcquired={state.overclocks[miner].includes(overclock.name)}
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
    </Panel>
  );
}
