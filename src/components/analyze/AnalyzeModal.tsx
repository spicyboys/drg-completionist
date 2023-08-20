import React, { lazy, Suspense } from 'react';
import { Modal, Spin } from 'antd';

const AnalyzeModalContent = lazy(() => import('./AnalyzeModalContent'));

export default function AnalyzeModal({
  open,
  hide,
}: {
  open: boolean;
  hide: () => void;
}) {
  return (
    <Modal
      title="Analyze Save File"
      width={600}
      open={open}
      onCancel={hide}
      footer={null}
      destroyOnClose
    >
      <Suspense fallback={<Spin />}>
        <AnalyzeModalContent hide={hide} />
      </Suspense>
    </Modal>
  );
}
