import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Miner = (props: PageProps<Queries.MinerQuery>) => {
  console.log(props.data.minersJson?.name);
  return (
    <GatsbyImage
      image={props.data.minersJson?.portrait?.childImageSharp?.gatsbyImageData!}
      alt="Miner Portrait"
    />
  );
};

export default Miner;

export const query = graphql`
  query Miner($id: String) {
    minersJson(id: { eq: $id }) {
      name
      portrait {
        childImageSharp {
          gatsbyImageData(width: 100, height: 100)
        }
      }
    }
  }
`;
