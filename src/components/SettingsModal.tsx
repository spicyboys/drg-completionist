import { Modal, Typography, Space, Divider, Row, Col } from 'antd';
import GitHubButton from 'react-github-btn';
const { Text } = Typography;
import AnalyzeSaveFile from './AnalyzeSaveFile';
import ResetProgress from './ResetProgress';

export default function SettingsModal(props: {
  isVisible: boolean;
  hide: () => void;
}) {
  return (
    <Modal
      title="Settings"
      visible={props.isVisible}
      onCancel={props.hide}
      footer={null}
    >
      <AnalyzeSaveFile />
      <Divider dashed />
      <ResetProgress hide={props.hide} />
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
