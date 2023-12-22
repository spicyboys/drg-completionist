import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import nullthrows from '../../utils/nullthrows';

export default function PickaxePaintJobIcon({
  paintJob,
}: {
  paintJob: Queries.PickaxePaintJobIconPickaxePaintJobFragment;
}) {
  return (
    <div
      style={{
        height: 100,
        width: 100,
        margin: 'auto',
      }}
    >
      <GatsbyImage
        image={nullthrows(paintJob.icon?.childImageSharp?.gatsbyImageData)}
        alt={paintJob.name!}
      />
    </div>
  );
}

export const query = graphql`
  fragment PickaxePaintJobIconPickaxePaintJob on PickaxePaintJobsJson {
    name
    icon {
      childImageSharp {
        gatsbyImageData(width: 100)
      }
    }
  }
`;
