import { Card, Collapse, CollapsePanelProps, Row } from 'antd';
import { Bosco } from 'assets/bosco';
import Image from 'components/Image';
import { BoscoPaintjob } from 'data/bosco';
import { ProgressQuery } from './BoscoPage';
import BoscoPaintjobCard from './BoscoPaintjobCard';
import BoscoProgressBar from './BoscoProgressBar';

const { Panel } = Collapse;
const { Meta } = Card;

export default function BoscoPaintjobs(
  props: {
    getProgress: ProgressQuery;
    paintjobs: BoscoPaintjob[];
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
          title="Bosco Paintjobs"
          avatar={
            <Image
              alt="Bosco Paintjob Progress"
              src={Bosco}
              style={{ height: 64, width: 'auto' }}
            />
          }
          description={
            <BoscoProgressBar barColor="#dc8c13" getProgress={getProgress} />
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
