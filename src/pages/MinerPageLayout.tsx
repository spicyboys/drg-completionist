import { RightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { AllMiners, Miner } from 'utils/miner';
import MinerCard from './MinerCard';
import { ProgressQuery } from './MinerCardProgressBar';

export default function MinerPageLayout(props: {
  category: string;
  children: (miner: Miner) => React.ReactNode;
  getProgress: ProgressQuery;
}) {
  const { category } = props;

  return (
    <Collapse
      className="unselectable"
      expandIconPosition="right"
      defaultActiveKey={[...AllMiners]}
      expandIcon={(p) => (
        <RightOutlined
          style={{ marginTop: 16 }}
          rotate={p.isActive ? 90 : undefined}
        />
      )}
    >
      {AllMiners.map((miner) => (
        <MinerCard
          key={miner}
          category={category}
          miner={miner}
          getProgress={props.getProgress}
        >
          {props.children}
        </MinerCard>
      ))}
    </Collapse>
  );
}
