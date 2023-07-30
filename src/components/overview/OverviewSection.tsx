import { Row, Col, Card, Progress } from "antd";
import { graphql } from "gatsby";
import React from "react";
import useMinerOverallProgress from "../../hooks/useMinerOverallProgress";
import { GatsbyImage } from "gatsby-plugin-image";
import nullthrows from "../../utils/nullthrows";

const OverviewSection = ({
  miner,
}: {
  miner: Queries.OverviewSectionMinerFragment;
}): React.JSX.Element => {
  const progress = useMinerOverallProgress(miner);

  return (
    <>
      <Row align="middle" style={{ marginBlock: 20 }}>
        <Col style={{ marginRight: 20 }}>
          <GatsbyImage
            image={nullthrows(miner.portrait?.childImageSharp?.gatsbyImageData)}
            alt={miner.name}
          />
        </Col>
        <Col flex="auto">
          <Progress
            percent={progress?.overallProgress.acquired}
            success={{ percent: progress?.overallProgress.forged }}
          />
        </Col>
      </Row>
      <Row gutter={[16, 24]} justify="center">
        <Col>
          <Card title="Overclocks">
            <Progress
              type="dashboard"
              status="active"
              percent={progress?.overclockProgress.acquired}
              success={{
                percent: progress?.overclockProgress.forged,
              }}
            />
          </Card>
        </Col>
        <Col>
          <Card title="Weapon Paint Jobs">
            <Progress
              type="dashboard"
              status="active"
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
    portrait {
      childImageSharp {
        gatsbyImageData(width: 75)
      }
    }
    ...MinerOverallProgressMiner
  }
`;
