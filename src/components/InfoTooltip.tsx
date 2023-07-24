import React from "react";
import { Col, Row, Typography } from "antd";

const { Text } = Typography;

export default function InfoTooltip() {
  return (
    <Row justify="center">
      <Col style={{ textAlign: "center", marginBlock: 20 }}>
        <a
          href="https://github.com/spicyboys/drg-completionist/releases/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            alt="Latest GitHub release (latest SemVer)"
            src="https://img.shields.io/github/v/release/spicyboys/drg-completionist"
            height="auto"
            width="auto"
            style={{
              marginBottom: 12,
              // marginTop: -6,
            }}
          />
        </a>
        <br />
        Up to date as of Deep Rock Galactic version{" "}
        <Text code>1.38.88240.0</Text>
      </Col>
    </Row>
  );
}
