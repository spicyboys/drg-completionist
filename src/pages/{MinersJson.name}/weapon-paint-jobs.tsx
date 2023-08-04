import React from "react";
import { graphql, type PageProps } from "gatsby";
import { Row } from "antd";
import WeaponPaintJobCard from "../../components/weapon-paint-jobs/WeaponPaintJobCard";
import useMinerWeaponPaintJobProgress from "../../hooks/progress/useMinerWeaponPaintJobProgress";
import useProgressFooter from "../../hooks/progress/useProgressFooter";

const WeaponPaintJobs = ({
  data: { minersJson: miner },
}: PageProps<Queries.WeaponPaintJobsQuery>) => {
  const progress = useMinerWeaponPaintJobProgress(miner!);
  useProgressFooter(progress);

  const weaponPaintJobs = [
    ...miner!.commonWeaponPaintJobs.map(
      (weaponPaintJob) => weaponPaintJob.weaponPaintJob
    ),
    ...miner!.uniqueWeaponPaintJobs,
  ];

  return (
    <Row gutter={[16, 16]}>
      {weaponPaintJobs.map((weaponPaintJob) => (
        <WeaponPaintJobCard
          key={weaponPaintJob.name}
          paintJob={weaponPaintJob}
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
      commonWeaponPaintJobs {
        weaponPaintJob {
          ...WeaponPaintJobCardWeaponPaintJob
        }
      }
      uniqueWeaponPaintJobs {
        ...WeaponPaintJobCardWeaponPaintJob
      }
      ...ArmorPaintJobCardMiner
      ...MinerWeaponPaintJobProgressMiner
    }
  }
`;
