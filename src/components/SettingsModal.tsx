import { Modal, Button, Typography, Space, Divider, Row, Col } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import GitHubButton from 'react-github-btn';
import { SatchelCharge } from 'assets/other';
import { MissionControlPortrait } from 'assets/portraits';
import useStore from 'data/useStore';
const { Title, Text } = Typography;
import AnalyzeSaveFile from './AnalyzeSaveFile';

export default function SettingsModal(props: {
  isVisible: boolean;
  hide: () => void;
}) {
  const [, dispatch] = useStore();
  return (
    <Modal
      title="Settings"
      visible={props.isVisible}
      onCancel={props.hide}
      footer={null}
    >
      <AnalyzeSaveFile />
      <Divider dashed />
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
                {
                  '"Careful, miner! Management\'s saying this can\'t be undone."'
                }
              </Text>
            </Space>
          </Row>
        </Space>
      </Row>
      <Divider dashed />
      <Row justify={'center'}>
        <Space>
          <GitHubButton
            href="https://github.com/BobertForever/drg-completionist"
            data-size="large"
            data-show-count="true"
            aria-label="Star BobertForever/drg-completionist on GitHub"
          >
            Star
          </GitHubButton>
          <GitHubButton
            href="https://github.com/BobertForever/drg-completionist/fork"
            data-color-scheme="no-preference: light; light: light; dark: light;"
            data-icon="octicon-repo-forked"
            data-size="large"
            data-show-count="true"
            aria-label="Fork BobertForever/drg-completionist on GitHub"
          >
            Fork
          </GitHubButton>
          <GitHubButton
            href="https://github.com/BobertForever/drg-completionist/issues"
            data-color-scheme="no-preference: light; light: light; dark: light;"
            data-icon="octicon-issue-opened"
            data-size="large"
            data-show-count="true"
            aria-label="Issue BobertForever/drg-completionist on GitHub"
          >
            Issue
          </GitHubButton>
        </Space>
      </Row>
      <Divider dashed />
      <div style={{ textAlign: 'center' }}>
        <a href="https://www.buymeacoffee.com/robort">
          <img
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a Glyphid Slammer&emoji=🍺&slug=robort&button_colour=FFDD00&font_colour=111111&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
            alt="Buy me a Glyphid Slammer, because coffee is for pointy-eared leaf-lovers."
          />
        </a>
      </div>
      <Divider dashed />
      <Row justify={'center'}>
        <Col span={17} style={{ textAlign: 'center' }}>
          <Text type={'secondary'}>
            This website is not affiliated with Ghost Ship Games. (But we really
            admire their work.)
          </Text>
        </Col>
      </Row>
      <Divider dashed />
      <Row justify={'center'}>
        <Text>Made with &#x2665; in ATX</Text>
      </Row>
    </Modal>
  );
}
