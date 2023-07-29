import React from 'react';
import { Divider, Tooltip } from 'antd';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import nullthrows from '../../utils/nullthrows';

export default function MinerDivider({
  miner,
}: {
  miner: Queries.MinerDividerMinerFragment;
}) {
  return (
    <Divider orientation='center'>
      <Tooltip title={miner.name}>
        <GatsbyImage
          image={nullthrows(miner.portrait?.childImageSharp?.gatsbyImageData)}
          alt={miner.name}
        />
      </Tooltip>
    </Divider>
  );
}

export const query = graphql`
  fragment MinerDividerMiner on MinersJson {
    name
    portrait {
      childImageSharp {
        gatsbyImageData(height: 75)
      }
    }
  }
`;
