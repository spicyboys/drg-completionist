import { Card, Row, Image, Progress, Divider } from "antd";
import { Overclock } from "./OverclockData";
import OverclockCard from "./OverclockCard";
import { useMemo, useState } from "react";

const { Meta } = Card;

export default function MinerOverclocks(props: {
  title: string;
  img: string;
  overclocks: Overclock[];
  style?: React.CSSProperties;
}) {
  const [acquiredOverclocks, setAcquiredOverclocks] = useState<Array<string>>(
    []
  );

  const groupedOverclocked = useMemo(() => {
    const g: { [k: string]: Overclock[] } = {};
    for (const overclock of props.overclocks) {
      if (g[overclock.weapon] === undefined) {
        g[overclock.weapon] = [];
      }
      g[overclock.weapon].push(overclock);
    }
    return g;
  }, [props.overclocks]);

  return (
    <Card
      type="inner"
      title={
        <Meta
          title={props.title}
          avatar={
            <Image src={props.img} preview={false} height={64} width={64} />
          }
          description={
            <Progress
              percent={Math.round(
                (acquiredOverclocks.length / props.overclocks.length) * 100
              )}
            />
          }
        />
      }
      style={props.style}
    >
      {Object.entries(groupedOverclocked).map(([weapon, overclocks]) => (
        <>
          <Divider orientation="left">{weapon}</Divider>
          <Row gutter={[16, 16]}>
            {overclocks.map((overclock) => (
              <OverclockCard
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
        </>
      ))}
    </Card>
  );
}
