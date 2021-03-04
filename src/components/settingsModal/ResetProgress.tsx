import { Button, Col, Row, Space, Typography } from 'antd';
import { SatchelCharge } from 'assets/other';
import { MissionControlPortrait } from 'assets/portraits';
import Image from 'components/Image';
import useDB from 'db/useDB';
const { Title, Text } = Typography;

export default function ResetProgress(props: { hide: () => void }) {
  const db = useDB();
  return (
    <Row justify="center">
      <Space size="middle" direction="vertical">
        <Row justify="center">
          <Title level={5}>Reset all progress?</Title>
        </Row>
        <Row justify="center" align="middle">
          <Col sm={20} md={16}>
            <Space>
              <Image
                src={MissionControlPortrait}
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
            icon={
              <Image
                src={SatchelCharge}
                alt="Reset Progress"
                style={{
                  height: 25,
                  marginRight: 10,
                  marginTop: -2,
                  width: 'auto',
                }}
              />
            }
            onClick={() => {
              Promise.all([
                db.frameworks.clear(),
                db.overclocks.clear(),
              ]).then(() => props.hide());
            }}
          >
            Reset
          </Button>
        </Row>
      </Space>
    </Row>
  );
}
