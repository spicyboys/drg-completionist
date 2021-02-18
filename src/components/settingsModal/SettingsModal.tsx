import { Modal, Typography, Divider, Row, Col } from 'antd';
import BuyMeACoffee from './BuyMeACoffee';
import GitHubButtons from './GitHubButtons';
import ResetProgress from './ResetProgress';

const { Text } = Typography;

export default function SettingsModal(props: {
  isVisible: boolean;
  hide: () => void;
}) {
  return (
    <Modal
      title="Settings"
      width={600}
      visible={props.isVisible}
      onCancel={props.hide}
      footer={null}
    >
      <ResetProgress hide={props.hide} />
      <Divider dashed />
      <GitHubButtons />
      <Divider dashed />
      <BuyMeACoffee />
      <Divider dashed />
      <Row justify="center">
        <Col span={18} style={{ textAlign: 'center' }}>
          <Text type="secondary">
            This website is not affiliated with Ghost Ship Games in any way.
            <br />
            (But we really admire their work.)
          </Text>
        </Col>
      </Row>
      <Divider dashed />
      <Row justify="center">
        <Text>Made with &#x2665; in ATX</Text>
      </Row>
    </Modal>
  );
}
