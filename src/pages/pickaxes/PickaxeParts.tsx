import { Card, Collapse, CollapsePanelProps } from 'antd';
import PickaxeIcon from 'assets/other/pickaxeIcon.png';
import PickaxeProgressBar, { ProgressQuery } from './PickaxeProgressBar';

const { Panel } = Collapse;
const { Meta } = Card;

export default function PickaxeParts(
  props: {
    getProgress: ProgressQuery;
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { getProgress, ...panelProps } = props;

  return (
    <Panel
      {...panelProps}
      key={0}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title="Pickaxe Parts"
          avatar={
            // TODO: Replace this with WebP-optimized Image component
            <img
              alt="Pickaxe Parts Progress"
              src={PickaxeIcon}
              style={{ height: 64, width: 64 }}
            />
          }
          description={
            <PickaxeProgressBar barColor="#dc8c13" getProgress={getProgress} />
          }
        />
      }
    >
      {/* {children(miner)} */}
    </Panel>
  );
}
