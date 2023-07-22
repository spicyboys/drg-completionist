import React from "react";
import { graphql, PageProps } from "gatsby";
import WeaponDivider from "../../components/WeaponDivider";

const Miner = (props: PageProps<Queries.MinerQuery>) => {
  console.log(props.data);
  const weapons = props.data.minersJson?.weapons!;
  return (
    <>
      {weapons.map((weapon) => (
        <React.Fragment key={weapon.name}>
          <WeaponDivider weapon={weapon} />
          {/* <Row gutter={[16, 16]}>
            {weapon.overclocks!.map((overclock) => (
              <OverclockCard
                key={overclock.name}
                overclock={overclock}
                miner={miner}
                weapon={weapon as MinerWeapon<Miner>}
              />
            ))}
          </Row> */}
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
        ...WeaponDivider
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
        }
      }
    }
  }
`;
