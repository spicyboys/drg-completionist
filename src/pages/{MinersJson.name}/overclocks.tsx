import React from "react";
import { graphql, type PageProps } from "gatsby";
import WeaponDivider from "../../components/WeaponDivider";
import { Row } from "antd";
import OverclockCard from "../../components/overclocks/OverclockCard";
import useMinerOverclockProgress from "../../hooks/progress/useMinerOverclockProgress";
import useProgressFooter from "../../hooks/progress/useProgressFooter";

const Overclocks = ({
  data: { minersJson: miner },
}: PageProps<Queries.OverclocksQuery>) => {
  const progress = useMinerOverclockProgress(miner!);
  useProgressFooter(progress);

  return (
    <>
      {miner?.weapons?.map((weapon) => (
        <React.Fragment key={weapon.name}>
          <WeaponDivider weapon={weapon} />
          <Row gutter={[16, 16]}>
            {weapon.overclocks?.map((overclock) => (
              <OverclockCard
                key={overclock!.name}
                overclock={overclock!}
                miner={miner!}
                weapon={weapon!}
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
};

export default Overclocks;

export const query = graphql`
  query Overclocks($id: String) {
    minersJson(id: { eq: $id }) {
      name

      weapons {
        name
        overclocks {
          name

          ...OverclockCardOverclock
        }

        ...WeaponDividerWeapon
        ...OverclockCardWeapon
      }

      ...OverclockCardMiner
      ...MinerOverclockProgressMiner
    }
  }
`;
