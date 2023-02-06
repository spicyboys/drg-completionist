import { Card, Collapse, CollapsePanelProps, Row } from 'antd';
import { Bosco } from 'assets/bosco';
import Image from 'components/Image';
import { BoscoFramework } from 'data/bosco';
import { ProgressQuery } from 'types/progress';
import BoscoFrameworkCard from './BoscoFrameworkCard';
import BoscoProgressBar from './BoscoProgressBar';

const { Panel } = Collapse;
const { Meta } = Card;

export default function BoscoFrameworks(
  props: {
    getProgress: ProgressQuery;
    frameworks: BoscoFramework[];
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { getProgress, frameworks, ...panelProps } = props;

  return (
    <Panel
      {...panelProps}
      key={1}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title="Bosco Frameworks"
          avatar={
            <Image
              alt="Bosco Framework Progress"
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
        {frameworks.map((framework) => (
          <BoscoFrameworkCard key={framework.name} framework={framework} />
        ))}
      </Row>
    </Panel>
  );
}
