import { Row, Col, Card, Progress, Divider, Typography, Tooltip } from 'antd';
import { graphql } from 'gatsby';
import React from 'react';
import useMinerOverallProgress from '../../hooks/useMinerOverallProgress';
import { GatsbyImage } from 'gatsby-plugin-image';
import nullthrows from '../../utils/nullthrows';
const { Title } = Typography;

const isComplete = (percent: number | undefined) => {
  return percent && percent >= 100 ? 'success' : 'active';
};

const OverviewSection = ({
  miner,
}: {
  miner: Queries.OverviewSectionMinerFragment;
}): React.JSX.Element => {
  const progress = useMinerOverallProgress(miner);

  return (
    <>
      <Divider orientation='left'>
        <Title level={3} style={{ margin: 0 }}>
          {miner.name}
        </Title>
      </Divider>
      <Row align='middle' style={{ marginBlock: 20 }}>
        <Col style={{ marginRight: 20 }}>
          <GatsbyImage
            image={nullthrows(miner.portrait?.childImageSharp?.gatsbyImageData)}
            alt={miner.name}
          />
        </Col>
        <Col flex='auto'>
          <Tooltip
            title={`Forged: ${
              progress?.overallProgress.forged ?? 0
            }% | Unforged: ${
              progress?.overallProgress.unforged ?? 0
            }% | Total: ${progress?.overallProgress.acquired ?? 0}%`}
            overlayStyle={{ maxWidth: 600 }}>
            <Progress
              status={isComplete(progress?.overallProgress.forged)}
              percent={progress?.overallProgress.acquired}
              success={{ percent: progress?.overallProgress.forged }}
            />
          </Tooltip>
        </Col>
      </Row>
      <Row gutter={[16, 24]} justify='center'>
        <Col>
          <Card title='Overclocks'>
            <Tooltip
              title={`Forged: ${
                progress?.overclockProgress.forged ?? 0
              }% | Unforged: ${
                progress?.overclockProgress.unforged ?? 0
              }% | Total: ${progress?.overclockProgress.acquired ?? 0}%`}
              overlayStyle={{ maxWidth: 600 }}>
              <Progress
                type='circle'
                status={isComplete(progress?.overclockProgress.forged)}
                percent={progress?.overclockProgress.acquired}
                success={{
                  percent: progress?.overclockProgress.forged,
                }}
              />
            </Tooltip>
          </Card>
        </Col>
        <Col>
          <Card title='Weapon Paint Jobs'>
            <Tooltip
              title={`Forged: ${
                progress?.weaponPaintProgress.forged ?? 0
              }% | Unforged: ${
                progress?.weaponPaintProgress.unforged ?? 0
              }% | Total: ${progress?.weaponPaintProgress.acquired ?? 0}%`}
              overlayStyle={{ maxWidth: 600 }}>
              <Progress
                type='circle'
                status={isComplete(progress?.weaponPaintProgress.forged)}
                percent={progress?.weaponPaintProgress.acquired}
                success={{
                  percent: progress?.weaponPaintProgress.forged,
                }}
              />
            </Tooltip>
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
    portrait {
      childImageSharp {
        gatsbyImageData(width: 75)
      }
    }
    ...MinerOverallProgressMiner
  }
`;
