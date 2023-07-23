import React from "react";
import { Card, Col, Divider, Row, Space, Tooltip, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import OverclockIcon from "./OverclockIcon";
import OverclockPrice from "./OverclockPrice";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const { Paragraph, Text, Title } = Typography;

export default function OverclockCardPopover(props: {
  overclock: Queries.OverclockCardPopoverOverclockFragment;
  weapon: Queries.OverclockCardPopoverWeaponFragment;
}) {
  return (
    <Card bordered={false} style={{ width: 340 }}>
      <Meta
        style={{}}
        description={
          <Row align="middle" justify="space-around">
            <Col span={16}>
              <Title level={4}>{props.overclock.name}</Title>
            </Col>
            <Col span={8}>
              <Tooltip placement="bottomRight" title={props.weapon.name}>
                <GatsbyImage
                  alt={props.weapon.name!}
                  image={
                    props.weapon.outline?.childImageSharp?.gatsbyImageData!
                  }
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
      {props.overclock.effects?.buffs?.map((buff) => (
        <Row key={buff} justify="center">
          <Col>
            <Space>
              <StaticImage
                alt="Buff Effect"
                src="../../images/buff.png"
                height={10}
              />
              <Text strong type="success">
                {buff}
              </Text>
            </Space>
          </Col>
        </Row>
      ))}
      {props.overclock.effects?.nerfs?.map((nerf) => (
        <Row key={nerf} justify="center">
          <Col>
            <Space>
              <StaticImage
                alt="Nerf Effect"
                src="../../images/nerf.png"
                height={10}
              />
              <Text strong type="danger">
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

export const query = graphql`
  fragment OverclockCardPopoverWeapon on WeaponsJson {
    name
    outline {
      childImageSharp {
        gatsbyImageData(height: 50)
      }
    }
  }

  fragment OverclockCardPopoverOverclock on WeaponsJsonOverclocks {
    name
    description
    effects {
      buffs
      nerfs
    }

    ...OverclockIconOverclock
    ...OverclockPriceOverclock
  }
`;
