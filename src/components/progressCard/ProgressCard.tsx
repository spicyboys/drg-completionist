import { Card, Collapse, CollapsePanelProps } from 'antd';
import Image from 'components/Image';
import ProgressCardProgressBar from './ProgressCardProgressBar';

const { Panel } = Collapse;
const { Meta } = Card;

export default function ProgressCard(
  props: {
    title: string;
    avatar: React.ReactElement<typeof Image>;
    key: string;

    children: React.ReactNode;

    progress: {
      percentage: number;
      initialStrokeColor: string;
    };
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { title, avatar, key, progress, children, ...panelProps } = props;

  return (
    <Panel
      {...panelProps}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title={title}
          avatar={avatar}
          description={<ProgressCardProgressBar {...progress} />}
        />
      }
      key={key}
    >
      {children}
    </Panel>
  );
}
