import OverclockIcon from "./OverclockIcon";
import { Overclock } from "./OverclockData";
import { Card, Col, Divider, Image, Row, Typography } from "antd";
import { MinerWeapon, MinerWeaponOutlines } from "utils/minerWeapons";
import Miner from "types/miner";

const { Paragraph, Text } = Typography;

export default function OverclockCardPopover(props: { overclock: Overclock, weapon: MinerWeapon<Miner> }) {
  return (
    <Card
      title={props.overclock.name}
      bordered={false}
      headStyle={{ fontWeight: "bold" }}
      style={{ width: 300 }}
    >
      <OverclockIcon overclock={props.overclock} />
      <Divider dashed />
      {props.overclock.effects.buffs.map((buff) => (
        <Row key={buff} justify={"center"}>
          <Col>
            <Text strong type={"success"}>
              {buff}
            </Text>
          </Col>
        </Row>
      ))}
      {props.overclock.effects.nerfs.map((nerf) => (
        <Row key={nerf} justify={"center"}>
          <Col>
            <Text strong type={"danger"}>
              {nerf}
            </Text>
          </Col>
        </Row>
      ))}
      <Divider dashed />
      <Paragraph>{props.overclock.description}</Paragraph>
      <Divider dashed />
      <Row justify={"center"}>
        <Image
          src={MinerWeaponOutlines[props.weapon]}
          preview={false}
          style={{ height: 'auto', width: 250 }}
        />
      </Row>
    </Card>
  );
}
