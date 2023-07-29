import React, { useContext, useEffect } from "react";
import { graphql, type PageProps } from "gatsby";
import { FooterContext } from "../../components/Layout";
import { Row } from "antd";
import WeaponPaintJobCard from "../../components/weapon-paint-jobs/WeaponPaintJobCard";
import useMinerWeaponPaintJobProgress from "../../hooks/useMinerWeaponPaintJobProgress";
import ProgressFooter from "../../components/ProgressFooter";

const WeaponPaintJobs = ({
  data: {
    minersJson: miner,
    allWeaponPaintJobsJson: { nodes: weaponPaintJobs },
  },
}: PageProps<Queries.WeaponPaintJobsQuery>) => {
  const progress = useMinerWeaponPaintJobProgress(miner!);
  const setFooter = useContext(FooterContext);
  useEffect(() => {
    if (progress) {
      setFooter(<ProgressFooter {...progress} />);
    }
  }, [setFooter, progress]);

  return (
    <Row gutter={[16, 16]}>
      {weaponPaintJobs.map((weaponPaintJob) => (
        <WeaponPaintJobCard
          key={weaponPaintJob!.name}
          paintJob={weaponPaintJob!}
          miner={miner!}
        />
      ))}
    </Row>
  );
};

export default WeaponPaintJobs;

export const query = graphql`
  query WeaponPaintJobs($id: String) {
    minersJson(id: { eq: $id }) {
      name
      ...ArmorPaintJobCardMiner
      ...MinerWeaponPaintJobProgressMiner
    }

    allWeaponPaintJobsJson {
      nodes {
        name
        ...WeaponPaintJobCardWeaponPaintJob
      }
    }
  }
`;
