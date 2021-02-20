import { Modal } from 'antd';
import AnalyzeSaveFile from './AnalyzeSaveFile';

export default function AnalyzeModal(props: {
  isVisible: boolean;
  hide: () => void;
}) {
  return (
    <Modal
      title="Analyze Save File"
      width={600}
      visible={props.isVisible}
      onCancel={props.hide}
      footer={null}
      destroyOnClose
    >
      <AnalyzeSaveFile hide={props.hide} />
    </Modal>
  );
}
