import React from 'react';
import { Button, Col, Row, Space, Typography } from 'antd';
import { useDB } from '../../hooks/db';
import { StaticImage } from 'gatsby-plugin-image';

const { Title, Text } = Typography;

export default function SettingsModalContent({ hide }: { hide: () => void }) {
  const db = useDB();
  return (
    <Row justify="center" style={{ marginBlock: 20 }}>
      <Space size="middle" direction="vertical">
        <Row justify="center">
          <Title level={5} style={{ marginTop: 0 }}>
            Reset all progress?
          </Title>
        </Row>
        <Row justify="center" align="middle">
          <Col sm={20} md={16}>
            <Space>
              <StaticImage
                src="../../images/mission-control.png"
                alt="Reset Warning from Mission Control"
                width={64}
                height={64}
              />
              <Text>
                &quot;Careful, miner! Management&apos;s saying this can&apos;t
                be undone.&quot;
              </Text>
            </Space>
          </Col>
        </Row>
        <Row justify="center">
          <Button
            type="primary"
            danger
            size="large"
            onClick={() => {
              db.clearAll().then(() => {
                hide();
              });
            }}
          >
            <StaticImage
              src="../../images/satchel-charge.png"
              alt="Reset Progress"
              height={25}
              style={{ marginRight: 10 }}
            />
            Reset
          </Button>
        </Row>
      </Space>
    </Row>
  );
}
