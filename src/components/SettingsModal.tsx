import { Modal, Button, Typography, Space } from "antd";
import useStore from "data/useStore";
const { Title, Text } = Typography;

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
      <Title level={4}>Clear all progress?</Title>
      <Space>
        <Text type="danger">Warning! This cannot be undone.</Text>
        <Button
          type="primary"
          danger
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </Button>
      </Space>
    </Modal>
  );
}
