import { Card, Row, Col, Image, Space } from "antd";
import { Overclock } from "./data";
import OverclockIcon from "./OverclockIcon";
import { CheckOutlined } from "@ant-design/icons";

export default function MinerOverclocks(props: {
  title: string;
  img: string;
  overclocks: Overclock[];
  style?: React.CSSProperties;
}) {
  return (
    <Card
      type="inner"
      title={
        <Space>
          <Image src={props.img} preview={false} height={64} width={64} />
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
