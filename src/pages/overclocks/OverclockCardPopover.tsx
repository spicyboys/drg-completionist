import OverclockIcon from "./OverclockIcon";
import { Overclock } from "./OverclockData";
import { Col, Divider, Row, Typography } from "antd";

const { Paragraph, Text } = Typography;

export default function OverclockCardPopover(props: { overclock: Overclock }) {
  return (
    <div style={{ width: 300 }}>
      <OverclockIcon overclock={props.overclock} />
      <Divider dashed />
      {props.overclock.effects.buffs.map((buff) => (
        <Row justify={"center"}>
          <Col>
            <Text strong type={"success"}>
              {buff}
            </Text>
          </Col>
        </Row>
      ))}
      {props.overclock.effects.nerfs.map((nerf) => (
        <Row justify={"center"}>
          <Col>
            <Text strong type={"danger"}>
              {nerf}
            </Text>
          </Col>
        </Row>
      ))}
      <Divider dashed />
      <Paragraph>{props.overclock.description}</Paragraph>
    </div>
  );
}
