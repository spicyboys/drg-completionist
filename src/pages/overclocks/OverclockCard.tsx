import OverclockIcon from "./OverclockIcon";
import { Overclock } from "./OverclockData";
import { ClassColors } from "utils/classColors";
import { Card, Col, Divider, Popover, Row, Typography } from "antd";

const { Paragraph, Text } = Typography;

export default function OverclockCard(props: {
  overclock: Overclock;
  isAcquired: boolean;
  onClick: () => void;
}) {

  const detailedPopover = (
    <Card
      hoverable
      title={props.overclock.name}
      headStyle={
        props.isAcquired
          ? {
            color: "black",
            backgroundColor: ClassColors[props.overclock.class],
            fontWeight: "bold",
            transition: "all .2s",
          }
          : {
            fontWeight: "bold",
            transition: "all .2s",
          }
      }
      style={{ width: 400 }}
      onClick={props.onClick}
    >
      <OverclockIcon overclock={props.overclock} />
      <Divider dashed />
      {props.overclock.effects.buffs.map((buff) => (
        <Row justify={"center"}>
          <Col>
            <Text strong type={"success"}>{buff}</Text>
          </Col>
        </Row>
      ))}
      {props.overclock.effects.nerfs.map((nerf) => (
        <Row justify={"center"}>
          <Col>
            <Text strong type={"danger"}>{nerf}</Text>
          </Col>
        </Row>
      ))}
      <Divider dashed />
      <Paragraph>{props.overclock.description}</Paragraph>
    </Card>
  );

  return (
    <Popover content={detailedPopover}>
      <Col span={3} key={props.overclock.name}>
        <Card
          hoverable
          title={props.overclock.name}
          headStyle={
            props.isAcquired
              ? {
                color: "black",
                backgroundColor: ClassColors[props.overclock.class],
                fontWeight: "bold",
                transition: "all .2s",
              }
              : {
                fontWeight: "bold",
                transition: "all .2s",
              }
          }
          onClick={props.onClick}
        >
          <OverclockIcon overclock={props.overclock} />
        </Card>
      </Col>
    </Popover>

  );
}
