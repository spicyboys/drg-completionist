import { Card, Row, Col, Image, Progress } from "antd";
import { Overclock } from "./data";
import OverclockIcon from "./OverclockIcon";
import { useState } from "react";

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
      <Row gutter={[16, 16]}>
        {props.overclocks.map((overclock) => {
          const overclockAcquired = acquiredOverclocks.includes(overclock.name);
          return (
            <Col span={4} key={overclock.name}>
              <Card
                hoverable
                title={overclock.name}
                cover={<OverclockIcon overclock={overclock} />}
                style={{ height: 400, overflow: "hidden" }}
                headStyle={
                  overclockAcquired
                    ? {
                        color: "black",
                        backgroundColor: "rgb(244 193 61)",
                        transition: "all .2s",
                      }
                    : {
                        transition: "all .2s",
                      }
                }
                onClick={() => {
                  if (overclockAcquired) {
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
              >
                {overclock.description}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
}
