import { Card, Collapse, CollapsePanelProps, Row } from 'antd';
import { PaintPickaxeIcon } from 'assets/other';
import Image from 'components/Image';
import { PickaxePaintjobNames } from 'data/pickaxes';
import PaintjobCard from './PaintjobCard';
import PickaxeProgressBar, { ProgressQuery } from './PickaxeProgressBar';

const { Panel } = Collapse;
const { Meta } = Card;

export default function PickaxePaintjobs(
  props: {
    getProgress: ProgressQuery;
    paintjobs: typeof PickaxePaintjobNames;
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { getProgress, paintjobs, ...panelProps } = props;

  return (
    <Panel
      {...panelProps}
      key={1}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title="Pickaxe Paintjobs"
          avatar={
            <Image
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
      <Row gutter={[16, 16]}>
        {paintjobs.map((paintjob) => (
          <PaintjobCard key={paintjob} paintjob={paintjob} />
        ))}
      </Row>
    </Panel>
  );
}
