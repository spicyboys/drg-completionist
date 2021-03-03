import { Button, Col, Row, Space, Typography } from 'antd';
import { SatchelCharge } from 'assets/other';
import { MissionControlPortrait } from 'assets/portraits';
import Image from 'components/Image';
import useStore from 'store/useStore';
const { Title, Text } = Typography;

export default function ResetProgress(props: { hide: () => void }) {
  const [, dispatch] = useStore();
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
              dispatch({ type: 'RESET' });
              props.hide();
            }}
          >
            Reset
          </Button>
        </Row>
      </Space>
    </Row>
  );
}
