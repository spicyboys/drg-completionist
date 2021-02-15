import { Card, Image, Progress } from "antd";
import { useMemo } from "react";
import { Collapse, CollapsePanelProps } from "antd";
import React from "react";
import { Miner, MinerColor, MinerAvatar } from "utils/miner";
import rockAndStone from "assets/rockAndStone.png";

const { Panel } = Collapse;
const { Meta } = Card;

export default function MinerCard(
  props: {
    children: (miner: Miner) => React.ReactNode;
    miner: Miner;
    getProgress: (miner: Miner) => number;
  } & Omit<CollapsePanelProps, "key" | "header">
) {
  const { children, miner, getProgress, ...panelProps } = props;
  const progressBar = useMemo(() => {
    return (
      <Progress
        percent={Math.round(getProgress(miner) * 100)}
        strokeColor={{
          "0%": MinerColor[miner],
          "100%": "#87d068",
        }}
        format={(percent) =>
          percent === 100 ? (
            <Image src={rockAndStone} preview={false} height={20} />
          ) : (
            `${percent}%`
          )
        }
      />
    );
  }, [getProgress, miner]);

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
      {children(miner)}
    </Panel>
  );
}
