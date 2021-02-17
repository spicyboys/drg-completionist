import { Button, Typography, Space, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { SatchelCharge } from 'assets/other';
import { MissionControlPortrait } from 'assets/portraits';
import useStore from 'data/useStore';
const { Title, Text } = Typography;

export default function ResetProgress(props: { hide: () => void }) {
  const [, dispatch] = useStore();
  return (
    <Row justify={'center'}>
      <Space size={'middle'} direction={'vertical'}>
        <Row justify={'center'}>
          <Title level={4}>Clear all progress?</Title>
        </Row>
        <Row justify={'center'}>
          <Button
            type={'primary'}
            danger
            size={'large'}
            icon={
              <img
                src={SatchelCharge}
                alt={'Reset Progress'}
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
        <Row justify={'center'} align={'middle'}>
          <Space>
            <Avatar
              size={64}
              src={MissionControlPortrait}
              alt={'Warning from Mission Control'}
            />
            <Text strong>
              {'"Careful, miner! Management\'s saying this can\'t be undone."'}
            </Text>
          </Space>
        </Row>
      </Space>
    </Row>
  );
}
