import { Card, Collapse, CollapsePanelProps } from 'antd';
import PaintPickaxeIcon from 'assets/other/paintPickaxeIcon.png';
import PickaxeProgressBar, { ProgressQuery } from './PickaxeProgressBar';

const { Panel } = Collapse;
const { Meta } = Card;

export default function PickaxePaintjobs(
  props: {
    getProgress: ProgressQuery;
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { getProgress, ...panelProps } = props;

  return (
    <Panel
      {...panelProps}
      key={1}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title="Pickaxe Paintjobs"
          avatar={
            // TODO: Replace this with WebP-optimized Image component
            <img
              alt="Pickaxe Paintjobs Progress"
              src={PaintPickaxeIcon}
              style={{ height: 64, width: 64 }}
            />
          }
          description={
            <PickaxeProgressBar barColor="#b00f86" getProgress={getProgress} />
          }
        />
      }
    >
      {/* {children(miner)} */}
    </Panel>
  );
}
