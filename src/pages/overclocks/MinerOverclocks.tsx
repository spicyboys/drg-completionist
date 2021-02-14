import { Card, Row, Col, Image, Space } from "antd";
import { useMemo } from "react";
import { Overclock } from "./data";
import OverclockIcon from "./OverclockIcon";
import { CheckOutlined } from "@ant-design/icons";

function MinerAvatar(props: { miner: string }) {
  console.log(props.miner);
  const src = useMemo(() => {
    switch (props.miner) {
      case "Driller":
        return require("assets/portraits/Driller_portrait.png");
      case "Engineer":
        return require("assets/portraits/Engineer_portrait.png");
      case "Gunner":
        return require("assets/portraits/Gunner_portrait.png");
      case "Scout":
        return require("assets/portraits/Scout_portrait.png");
    }
  }, [props.miner]);
  return <Image src={src.default} preview={false} height={64} width={64} />;
}

export default function MinerOverclocks(props: {
  title: string;
  overclocks: Overclock[];
  style?: React.CSSProperties;
}) {
  return (
    <Card
      type="inner"
      title={
        <Space>
          <MinerAvatar miner={props.overclocks[0]?.class ?? "Gunner"} />
          <h2>{props.title}</h2>
        </Space>
      }
      style={props.style}
    >
      <Row gutter={[16, 16]}>
        {props.overclocks.map((overclock) => (
          <Col span={4} key={overclock.name}>
            <Card
              hoverable
              title={overclock.name}
              cover={<OverclockIcon overclock={overclock} />}
              style={{ height: 400 }}
              extra={<CheckOutlined style={{ color: "#52c41a" }} />}
            >
              {overclock.description}
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
