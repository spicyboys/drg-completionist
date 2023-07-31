import React from "react";
import { graphql, type PageProps } from "gatsby";
import ArmorPaintJobCard from "../../components/armor-paint-jobs/ArmorPaintJobCard";
import { Row } from "antd";
import useMinerArmorPaintJobProgress from "../../hooks/progress/useMinerArmorPaintJobProgress";
import useProgressFooter from "../../hooks/progress/useProgressFooter";

const ArmorPaintJobs = ({
  data: { minersJson: miner },
}: PageProps<Queries.ArmorPaintJobsQuery>) => {
  const progress = useMinerArmorPaintJobProgress(miner!);
  useProgressFooter(progress);

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
      ...MinerArmorPaintJobProgressMiner
    }
  }
`;
