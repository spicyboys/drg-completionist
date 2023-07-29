import { Row, Col, Card, Progress } from 'antd';
import { graphql } from 'gatsby';
import React from 'react';
import useMinerOverallProgress from '../../hooks/useMinerOverallProgress';
import MinerDivider from './MinerDivider';

const OverviewSection = ({
  miner,
}: {
  miner: Queries.OverviewSectionMinerFragment;
}): React.JSX.Element => {
  const progress = useMinerOverallProgress(miner);

  return (
    <>
      <MinerDivider miner={miner} />
      <Row gutter={[16, 24]} justify='center'>
        <Col>
          <Card title='Overall'>
            <Progress
              type='dashboard'
              status='active'
              percent={progress?.overallProgress.acquired}
              success={{
                percent: progress?.overallProgress.forged,
              }}
            />
          </Card>
        </Col>
        <Col>
          <Card title='Overclocks'>
            <Progress
              type='dashboard'
              status='active'
              percent={progress?.overclockProgress.acquired}
              success={{
                percent: progress?.overclockProgress.forged,
              }}
            />
          </Card>
        </Col>
        <Col>
          <Card title='Weapon Paint Jobs'>
            <Progress
              type='dashboard'
              status='active'
              percent={progress?.weaponPaintProgress.acquired}
              success={{
                percent: progress?.weaponPaintProgress.forged,
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OverviewSection;

export const query = graphql`
  fragment OverviewSectionMiner on MinersJson {
    name
    ...MinerOverallProgressMiner
    ...MinerDividerMiner
  }
`;
