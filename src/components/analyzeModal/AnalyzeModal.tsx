import { Modal, Spin } from 'antd';
import { lazy, Suspense } from 'react';

export default function AnalyzeModal(props: {
  isVisible: boolean;
  hide: () => void;
}) {
  const AnalyzeSaveFile = lazy(() => import('./AnalyzeSaveFile'));
  return (
    <Modal
      title="Analyze Save File"
      width={600}
      visible={props.isVisible}
      onCancel={props.hide}
      footer={null}
      destroyOnClose
    >
      <Suspense fallback={<Spin />}>
        <AnalyzeSaveFile hide={props.hide} />
      </Suspense>
    </Modal>
  );
}
