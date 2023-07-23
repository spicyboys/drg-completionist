import React from "react";
import { graphql, PageProps } from "gatsby";
import WeaponDivider from "../../components/WeaponDivider";
import { Row } from "antd";
import OverclockCard from "../../components/overclocks/OverclockCard";

const Miner = (props: PageProps<Queries.MinerQuery>) => {
  return (
    <>
      {props.data.minersJson?.weapons?.map((weapon) => (
        <React.Fragment key={weapon.name}>
          <WeaponDivider weapon={weapon} />
          <Row gutter={[16, 16]}>
            {weapon.overclocks?.map((overclock) => (
              <OverclockCard
                key={overclock!.name}
                overclock={overclock!}
                miner={props.data.minersJson!}
                weapon={weapon!}
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
};

export default Miner;

export const query = graphql`
  query Miner($id: String) {
    minersJson(id: { eq: $id }) {
      weapons {
        name
        overclocks {
          name
          type {
            icon {
              childImageSharp {
                gatsbyImageData(width: 100, height: 100)
              }
            }
          }

          ...OverclockCardOverclock
        }

        ...WeaponDividerWeapon
        ...OverclockCardWeapon
      }

      ...OverclockCardMiner
    }
  }
`;
