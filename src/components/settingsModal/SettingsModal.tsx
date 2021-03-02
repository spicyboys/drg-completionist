import { Modal, Spin } from 'antd';
import { Suspense, lazy } from 'react';

export default function SettingsModal(props: {
  isVisible: boolean;
  hide: () => void;
}) {
  const Settings = lazy(() => import('./Settings'));
  return (
    <Modal
      title="Settings"
      width={600}
      visible={props.isVisible}
      onCancel={props.hide}
      footer={null}
      destroyOnClose
    >
      <Suspense fallback={<Spin />}>
        <Settings hide={props.hide} />
      </Suspense>
    </Modal>
  );
}
