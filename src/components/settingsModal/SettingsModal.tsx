import { Col, Divider, Modal, Row, Typography } from 'antd';
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
      <BuyMeACoffee />
      <Divider dashed />
      <GitHubButtons />
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
        <Col span={18} style={{ textAlign: 'center' }}>
          Up-to-date as of Deep Rock Galactic version{' '}
          <Text code>1.33.49660.0</Text>
        </Col>
      </Row>
      <Divider dashed />
      <Row justify="center">
        <Text>Made with &#x2665; in ATX</Text>
      </Row>
    </Modal>
  );
}
