import { Card, Collapse, CollapsePanelProps, Image } from 'antd';
import { Miner, MinerAvatar } from 'utils/miner';
import MinerCardProgressBar from './MinerCardProgressBar';

const { Panel } = Collapse;
const { Meta } = Card;

export default function MinerCard(
  props: {
    children: (miner: Miner) => React.ReactNode;
    miner: Miner;
    getProgress: (miner: Miner) => number;
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { children, miner, getProgress, ...panelProps } = props;

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
              preview={false}
              src={MinerAvatar[miner]}
              style={{ height: 64, width: 64 }}
            />
          }
          description={
            <MinerCardProgressBar miner={miner} getProgress={getProgress} />
          }
        />
      }
      key={miner}
    >
      {children(miner)}
    </Panel>
  );
}
