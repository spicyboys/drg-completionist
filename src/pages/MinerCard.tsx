import { Card, Collapse, CollapsePanelProps } from 'antd';
import Image from 'components/Image';
import { Miner, MinerAvatar } from 'utils/miner';
import MinerCardProgressBar, { ProgressQuery } from './MinerCardProgressBar';

const { Panel } = Collapse;
const { Meta } = Card;

export default function MinerCard(
  props: {
    children: (miner: Miner) => React.ReactNode;
    category: string;
    miner: Miner;
    getProgress: ProgressQuery;
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { category, children, miner, getProgress, ...panelProps } = props;

  return (
    <Panel
      {...panelProps}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title={miner}
          avatar={
            <Image
              alt={miner}
              src={MinerAvatar[miner]}
              style={{ height: 64, width: 64 }}
            />
          }
          description={
            <MinerCardProgressBar
              category={category}
              miner={miner}
              getProgress={getProgress}
            />
          }
        />
      }
      key={miner}
    >
      {children(miner)}
    </Panel>
  );
}
