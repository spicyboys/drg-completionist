import React from "react";
import { Col, Row, Space, Tooltip } from "antd";
import Text from "antd/lib/typography/Text";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function OverclockPrice(props: {
  overclock: Queries.OverclockPriceOverclockFragment;
}) {
  const { price } = props.overclock;

  return (
    <Row align="middle" justify="space-around">
      {price?.credits && (
        <Col>
          <Space>
            <Tooltip placement="top" title="Credits">
              <StaticImage
                src="../../images/currencies/credit.png"
                alt="Credits"
                height={20}
              />
            </Tooltip>
            <Text strong>{price.credits}</Text>
          </Space>
        </Col>
      )}
      {price?.croppa && (
        <Col>
          <Space>
            <Tooltip placement="top" title="Croppa">
              <StaticImage
                src="../../images/currencies/croppa.png"
                alt="Croppa"
                height={20}
              />
            </Tooltip>
            <Text strong>{price.croppa}</Text>
          </Space>
        </Col>
      )}
      {price?.enorPearl && (
        <Col>
          <Space>
            <Tooltip placement="top" title="Enor Pearls">
              <StaticImage
                src="../../images/currencies/enor-pearl.png"
                alt="Enor Pearls"
                height={20}
              />
            </Tooltip>
            <Text strong>{price.enorPearl}</Text>
          </Space>
        </Col>
      )}
      {price?.magnite && (
        <Col>
          <Space>
            <Tooltip placement="top" title="Magnite">
              <StaticImage
                src="../../images/currencies/magnite.png"
                alt="Magnite"
                height={20}
              />
            </Tooltip>
            <Text strong>{price.magnite}</Text>
          </Space>
        </Col>
      )}
      {price?.jadiz && (
        <Col>
          <Space>
            <Tooltip placement="top" title="Jadiz">
              <StaticImage
                src="../../images/currencies/jadiz.png"
                alt="Jadiz"
                height={20}
              />
            </Tooltip>
            <Text strong>{price.jadiz}</Text>
          </Space>
        </Col>
      )}
      {price?.umanite && (
        <Col>
          <Space>
            <Tooltip placement="top" title="Umanite">
              <StaticImage
                src="../../images/currencies/umanite.png"
                alt="Umanite"
                height={20}
              />
            </Tooltip>
            <Text strong>{price.umanite}</Text>
          </Space>
        </Col>
      )}
      {price?.bismor && (
        <Col>
          <Space>
            <Tooltip placement="top" title="Bismor">
              <StaticImage
                src="../../images/currencies/bismor.png"
                alt="Bismor"
                height={20}
              />
            </Tooltip>
            <Text strong>{price.bismor}</Text>
          </Space>
        </Col>
      )}
    </Row>
  );
}

export const query = graphql`
  fragment OverclockPriceOverclock on WeaponsJsonOverclocks {
    price {
      credits
      croppa
      enorPearl
      magnite
      jadiz
      umanite
      bismor
    }
  }
`;
