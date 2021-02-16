import OverclockIcon from "./OverclockIcon";
import { Overclock } from "./OverclockData";
import { Card, Col, Divider, Image, Row, Space, Tooltip, Typography } from "antd";
import { WeaponOutlines } from "utils/weapons";
import { Miner } from "utils/miner";
import { MinerWeapon } from "utils/weapons";
import { Buff as BuffIcon, Nerf as NerfIcon } from "assets/overclocks/arrows"
import Meta from "antd/lib/card/Meta";
import OverclockPrice from "./OverclockPrice";

const { Paragraph, Text, Title } = Typography;

export default function OverclockCardPopover(props: {
  overclock: Overclock;
  weapon: MinerWeapon<Miner>;
}) {
  return (
    <Card bordered={false} style={{ width: 340 }}>
      <Meta
        style={{}}
        description={
          <Row align={"middle"} justify={"space-around"}>
            <Col span={16}>
              <Title level={4}>{props.overclock.name}</Title>
            </Col>
            <Col span={8}>
              <Tooltip placement={"bottomRight"} title={props.weapon}>
                <Image
                  src={WeaponOutlines[props.weapon]}
                  preview={false}
                  style={{ height: 50, width: "auto" }}
                />
              </Tooltip>
            </Col>
          </Row>
        }
      />
      <Divider style={{ marginTop: "12px", marginBottom: "24px" }} />
      <OverclockIcon overclock={props.overclock} />
      <Divider dashed />
      {props.overclock.effects.buffs.map((buff) => (
        <Row key={buff} justify={"center"}>
          <Col>
            <Space>
              <img
                src={BuffIcon}
                alt={"Buff"}
                style={{ height: 10, width: "auto" }}
              />
              <Text strong type={"success"}>
                {buff}
              </Text>
            </Space>
          </Col>
        </Row>
      ))}
      {props.overclock.effects.nerfs.map((nerf) => (
        <Row key={nerf} justify={"center"}>
          <Col>
            <Space>
              <img
                src={NerfIcon}
                alt={"Nerf"}
                style={{ height: 10, width: "auto" }}
              />
              <Text strong type={"danger"}>
                {nerf}
              </Text>
            </Space>
          </Col>
        </Row>
      ))}
      <Divider dashed />
      <Paragraph>{props.overclock.description}</Paragraph>
      <Divider dashed />
      <OverclockPrice overclock={props.overclock} />
    </Card>
  );
}
