import { RightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { useMemo } from 'react';
import MinerCard, { ProgressQuery } from 'components/progressCard/MinerCard';
import { AllMiners, Miner } from 'utils/miner';

/**
 * Returns a Collapse with a card for each Miner containing an Avatar
 * and Progress Bar. Will also include an All-Class card if `allClass`
 * prop is set to true.
 * @param props
 * @returns JSX.Element
 */
export default function MinerPageLayout(props: {
  category: string;
  children:
    | ((miner: Miner) => React.ReactNode)
    | [(miner: Miner) => React.ReactNode, React.ReactNode];
  getProgress: ProgressQuery;
}) {
  const { category, children } = props;

  const [minerCardChild, extraContent] = useMemo(() => {
    if (children instanceof Function) {
      return [children, null];
    } else {
      return children;
    }
  }, [children]);

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
          {minerCardChild}
        </MinerCard>
      ))}
      {extraContent}
    </Collapse>
  );
}
