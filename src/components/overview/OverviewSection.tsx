import { Row, Col, Card, Progress, Divider, Typography, Tooltip } from "antd";
import { graphql } from "gatsby";
import React from "react";
import useMinerOverallProgress from "../../hooks/progress/useMinerOverallProgress";
import { GatsbyImage } from "gatsby-plugin-image";
import nullthrows from "../../utils/nullthrows";
const { Title } = Typography;

const isComplete = (percent: number | undefined) => {
  return percent && percent >= 100 ? "success" : "active";
};

const OverviewSection = ({
  miner,
}: {
  miner: Queries.OverviewSectionMinerFragment;
}): React.JSX.Element => {
  const { overall, ...progress } = useMinerOverallProgress(miner) ?? {};

  return (
    <>
      <Divider orientation="left">
        <Title level={3} style={{ margin: 0 }}>
          {miner.name}
        </Title>
      </Divider>
      <Row align="middle" style={{ marginBlock: 20 }}>
        <Col style={{ marginRight: 20 }}>
          <GatsbyImage
            image={nullthrows(miner.portrait?.childImageSharp?.gatsbyImageData)}
            alt={miner.name}
          />
        </Col>
        <Col flex="auto">
          <Tooltip
            title={`Forged: ${overall?.forged ?? 0}% | Unforged: ${
              overall?.unforged ?? 0
            }% | Total: ${overall?.acquired ?? 0}%`}
            overlayStyle={{ maxWidth: 600 }}
          >
            <Progress
              status={isComplete(overall?.forged)}
              percent={overall?.acquired}
              success={{ percent: overall?.forged }}
            />
          </Tooltip>
        </Col>
      </Row>
      <Row gutter={[16, 24]} justify="center">
        {Object.entries(progress).map(([key, p]) => (
          <Col key={key}>
            <Card title={key}>
              <Tooltip
                title={`Forged: ${p?.forged ?? 0}% | Unforged: ${
                  p?.unforged ?? 0
                }% | Total: ${p?.acquired ?? 0}%`}
                overlayStyle={{ maxWidth: 600 }}
              >
                <Progress
                  type="circle"
                  status={isComplete(p?.forged)}
                  percent={p?.acquired}
                  success={{
                    percent: p?.forged,
                  }}
                />
              </Tooltip>
            </Card>
          </Col>
        ))}
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
