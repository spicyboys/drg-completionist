import { Card, Row, Image, Progress, Divider } from "antd";
import { Overclock } from "./OverclockData";
import OverclockCard from "./OverclockCard";
import { useMemo, useState } from "react";
import { Collapse, CollapsePanelProps } from "antd";
import React from "react";

const { Panel } = Collapse;
const { Meta } = Card;

export default function MinerOverclocks(
  props: {
    title: string;
    img: string;
    overclocks: Overclock[];
    classColor: string;
  } & Omit<CollapsePanelProps, "key" | "header">
) {
  const { title, img, overclocks, classColor, ...panelProps } = props;
  const [acquiredOverclocks, setAcquiredOverclocks] = useState<Array<string>>(
    []
  );

  const groupedOverclocked = useMemo(() => {
    const g: { [k: string]: Overclock[] } = {};
    for (const overclock of overclocks) {
      if (g[overclock.weapon] === undefined) {
        g[overclock.weapon] = [];
      }
      g[overclock.weapon].push(overclock);
    }
    return g;
  }, [overclocks]);

  return (
    <Panel
      {...panelProps}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title={title}
          avatar={<Image src={img} preview={false} height={64} width={64} />}
          description={
            <Progress
              percent={Math.round(
                (acquiredOverclocks.length / overclocks.length) * 100
              )}
              strokeColor={{
                "0%": classColor,
                "100%": "#87d068",
              }}
            />
          }
        />
      }
      key={title}
    >
      {Object.entries(groupedOverclocked).map(([weapon, overclocks]) => (
        <React.Fragment key={weapon}>
          <Divider orientation="left">{weapon}</Divider>
          <Row gutter={[16, 16]}>
            {overclocks.map((overclock) => (
              <OverclockCard
                key={overclock.name}
                overclock={overclock}
                isAcquired={acquiredOverclocks.includes(overclock.name)}
                onClick={() => {
                  if (acquiredOverclocks.includes(overclock.name)) {
                    setAcquiredOverclocks(
                      acquiredOverclocks.filter((v) => v !== overclock.name)
                    );
                  } else {
                    setAcquiredOverclocks([
                      ...acquiredOverclocks,
                      overclock.name,
                    ]);
                  }
                }}
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </Panel>
  );
}
