import React from "react";
import { graphql, type PageProps } from "gatsby";
import WeaponDivider from "../../components/WeaponDivider";
import { Row } from "antd";
import WeaponFrameworkCard from "../../components/weapon-frameworks/WeaponFrameworkCard";
import useMinerWeaponFrameworkProgress from "../../hooks/progress/useMinerWeaponFrameworkProgress";
import useProgressFooter from "../../hooks/progress/useProgressFooter";

const WeaponFrameworks = ({
  data: { minersJson: miner },
}: PageProps<Queries.WeaponFrameworksQuery>) => {
  const progress = useMinerWeaponFrameworkProgress(miner!);
  useProgressFooter(progress);

  return (
    <>
      {miner?.weapons?.map((weapon) => (
        <React.Fragment key={weapon.name}>
          <WeaponDivider weapon={weapon} />
          <Row gutter={[16, 16]}>
            {weapon.frameworks?.map(({ framework }) => (
              <WeaponFrameworkCard
                key={framework.name}
                framework={framework}
                miner={miner}
                weapon={weapon}
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
};

export default WeaponFrameworks;

export const query = graphql`
  query WeaponFrameworks($id: String) {
    minersJson(id: { eq: $id }) {
      name

      weapons {
        name
        frameworks {
          framework {
            name
            ...WeaponFrameworkCardWeaponFramework
          }
        }

        ...WeaponDividerWeapon
        ...WeaponFrameworkCardWeapon
      }

      ...WeaponFrameworkCardMiner
    }
  }
`;
