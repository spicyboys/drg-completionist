import { Modal, Typography, Divider, Row, Col } from 'antd';
const { Text } = Typography;
import AnalyzeSaveFile from './AnalyzeSaveFile';
import BuyMeACoffee from './BuyMeACoffee';
import GitHubButtons from './GitHubButtons';
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
      <GitHubButtons />
      <Divider dashed />
      <BuyMeACoffee />
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
