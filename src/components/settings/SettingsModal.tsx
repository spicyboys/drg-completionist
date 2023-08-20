import React from 'react';
import { Modal, Spin } from 'antd';
import { Suspense, lazy } from 'react';

const SettingsModalContent = lazy(() => import('./SettingsModalContent'));

export default function SettingsModal({
  open,
  hide,
}: {
  open: boolean;
  hide: () => void;
}) {
  return (
    <Modal
      title="Settings"
      width={600}
      open={open}
      onCancel={hide}
      footer={null}
      destroyOnClose
    >
      <Suspense fallback={<Spin />}>
        <SettingsModalContent hide={hide} />
      </Suspense>
    </Modal>
  );
}
