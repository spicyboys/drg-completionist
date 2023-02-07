import { Card, Collapse, CollapsePanelProps, Row } from 'antd';
import { Bosco } from 'assets/bosco';
import Image from 'components/Image';
import ProgressCardProgressBar from 'components/progressCard/ProgressCardProgressBar';
import { BoscoPaintjob } from 'data/bosco';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import { ProgressQuery } from 'types/progress';
import BoscoPaintjobCard from './BoscoPaintjobCard';

const { Panel } = Collapse;
const { Meta } = Card;

export default function BoscoPaintjobs(
  props: {
    getProgress: ProgressQuery;
    paintjobs: BoscoPaintjob[];
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { getProgress, paintjobs, ...panelProps } = props;

  const db = useDB();
  const { obtained, total } = useSuspendedLiveQuery(
    () => getProgress(db),
    []
  );
  const progressPercentage = Math.floor((obtained / total || 0) * 100);

  return (
    <Panel
      {...panelProps}
      key={1}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title="Bosco Paintjobs"
          avatar={
            <Image
              alt="Bosco Paintjob Progress"
              src={Bosco}
              style={{ height: 64, width: 'auto' }}
            />
          }
          description={
            <ProgressCardProgressBar
              initialStrokeColor="#dc8c13"
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
          <BoscoPaintjobCard key={paintjob.name} paintjob={paintjob} />
        ))}
      </Row>
    </Panel>
  );
}
