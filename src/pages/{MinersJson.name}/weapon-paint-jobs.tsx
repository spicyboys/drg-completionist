import React, { useContext, useEffect } from "react";
import { graphql, type PageProps } from "gatsby";
import { FooterContext } from "../../components/Layout";
import { Row } from "antd";
import WeaponPaintJobCard from "../../components/weapon-paint-jobs/WeaponPaintJobCard";

const WeaponPaintJobs = ({
  data: {
    minersJson: miner,
    allWeaponPaintJobsJson: { nodes: weaponPaintJobs },
  },
}: PageProps<Queries.WeaponPaintJobsQuery>) => {
  const setFooter = useContext(FooterContext);
  useEffect(() => {
    setFooter(null);
  }, [setFooter]);

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
    }

    allWeaponPaintJobsJson {
      nodes {
        name
        ...WeaponPaintJobCardWeaponPaintJob
      }
    }
  }
`;
