import { Button, Col, Row, Space, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { SatchelCharge } from 'assets/other';
import { MissionControlPortrait } from 'assets/portraits';
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
              <Avatar
                size={64}
                src={MissionControlPortrait}
                alt="Reset Warning from Mission Control"
              />
              <Text>
                {
                  '"Careful, miner! Management\'s saying this can\'t be undone."'
                }
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
              <img
                src={SatchelCharge}
                alt="Reset Progress"
                style={{ height: 25, marginRight: 10, marginTop: -2 }}
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
