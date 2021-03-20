import { RightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import {
  AllMiners,
  AllMinersWithAllClass,
  Miner,
  MinerWithAllClass,
} from 'utils/miner';
import MinerCard from './MinerCard';
import { ProgressQuery } from './MinerCardProgressBar';

/**
 * Returns a Collapse with a card for each Miner containing an Avatar
 * and Progress Bar. Will also include an All-Class card if `allClass`
 * prop is set to true.
 * @param props
 * @returns JSX.Element
 */
export default function MinerPageLayout(props: {
  allClass?: boolean;
  category: string;
  children: (miner: Miner | MinerWithAllClass) => React.ReactNode;
  getProgress: ProgressQuery;
}) {
  const { allClass, category } = props;

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
      {allClass
        ? AllMinersWithAllClass.map((miner) => (
            <MinerCard
              key={miner}
              category={category}
              miner={miner}
              getProgress={props.getProgress}
            >
              {props.children}
            </MinerCard>
          ))
        : AllMiners.map((miner) => (
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
