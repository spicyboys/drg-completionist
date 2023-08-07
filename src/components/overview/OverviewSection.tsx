import { Row, Col, Divider, Typography } from "antd";
import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import nullthrows from "../../utils/nullthrows";
import useMinerOverclockProgress from "../../hooks/progress/useMinerOverclockProgress";
import useMinerWeaponPaintJobProgress from "../../hooks/progress/useMinerWeaponPaintJobProgress";
import useMinerArmorPaintJobProgress from "../../hooks/progress/useMinerArmorPaintJobProgress";
import useMinerWeaponFrameworkProgress from "../../hooks/progress/useMinerWeaponFrameworkProgress";
import OverviewProgressCard from "./OverviewProgressCard";
import OverallProgressBar from "./OverallProgressBar";
const { Title } = Typography;

const OverviewSection = ({
  miner,
}: {
  miner: Queries.OverviewSectionMinerFragment;
}): React.JSX.Element => {
  const overclockProgress = useMinerOverclockProgress(miner!);
  const weaponPaintJobProgress = useMinerWeaponPaintJobProgress(miner!);
  const armorPaintJobProgress = useMinerArmorPaintJobProgress(miner!);
  const weaponFrameworkProgress = useMinerWeaponFrameworkProgress(miner!);

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
          <OverallProgressBar
            progresses={[
              overclockProgress,
              weaponPaintJobProgress,
              weaponFrameworkProgress,
              armorPaintJobProgress,
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 24]} justify="center">
        <OverviewProgressCard title="Overclocks" progress={overclockProgress} />
        <OverviewProgressCard
          title="Weapon Paint Jobs"
          progress={weaponPaintJobProgress}
        />
        <OverviewProgressCard
          title="Weapon Frameworks"
          progress={weaponFrameworkProgress}
        />
        <OverviewProgressCard
          title="Armor Paint Jobs"
          progress={armorPaintJobProgress}
        />
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
    ...MinerOverclockProgressMiner
    ...MinerWeaponPaintJobProgressMiner
    ...MinerArmorPaintJobProgressMiner
    ...MinerWeaponFrameworkProgressMiner
  }
`;
