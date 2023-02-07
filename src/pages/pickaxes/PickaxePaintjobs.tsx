import { Card, Collapse, CollapsePanelProps, Row } from 'antd';
import { PaintPickaxeIcon } from 'assets/other';
import Image from 'components/Image';
import ProgressCardProgressBar from 'components/progressCard/ProgressCardProgressBar';
import { PickaxePaintjobName } from 'data/pickaxes';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import { ProgressQuery } from 'types/progress';
import PaintjobCard from './PaintjobCard';

const { Panel } = Collapse;
const { Meta } = Card;

export default function PickaxePaintjobs(
  props: {
    getProgress: ProgressQuery;
    paintjobs: PickaxePaintjobName[];
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { getProgress, paintjobs, ...panelProps } = props;

  const db = useDB();
  const { obtained, total } = useSuspendedLiveQuery(() => getProgress(db), []);
  const progressPercentage = Math.floor((obtained / total || 0) * 100);

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
            <ProgressCardProgressBar
              initialStrokeColor="#b00f86"
              percentage={progressPercentage}
              obtained={obtained}
              total={total}
            />
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
