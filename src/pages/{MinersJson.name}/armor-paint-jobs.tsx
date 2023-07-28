import React, { useContext, useEffect } from "react";
import { graphql, type PageProps } from "gatsby";
import { FooterContext } from "../../components/Layout";
import ArmorPaintJobCard from "../../components/armor-paint-jobs/ArmorPaintJobCard";
import { Row } from "antd";

const ArmorPaintJobs = ({
  data: { minersJson: miner },
}: PageProps<Queries.ArmorPaintJobsQuery>) => {
  const setFooter = useContext(FooterContext);
  useEffect(() => {
    setFooter(null);
  }, [setFooter]);

  return (
    <Row gutter={[16, 16]}>
      {miner?.armorPaintJobs?.map((armorPaintJob) => (
        <ArmorPaintJobCard
          key={armorPaintJob!.name}
          paintJob={armorPaintJob!}
          miner={miner!}
        />
      ))}
    </Row>
  );
};

export default ArmorPaintJobs;

export const query = graphql`
  query ArmorPaintJobs($id: String) {
    minersJson(id: { eq: $id }) {
      name

      armorPaintJobs {
        name
        ...ArmorPaintJobCardArmorPaintJob
      }

      ...ArmorPaintJobCardMiner
    }
  }
`;
