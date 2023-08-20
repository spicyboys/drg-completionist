import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import nullthrows from '../../utils/nullthrows';

export default function WeaponFrameworkIcon({
  framework,
}: {
  framework: Queries.WeaponFrameworkIconWeaponFrameworkFragment;
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
        image={nullthrows(framework.icon?.childImageSharp?.gatsbyImageData)}
        alt={framework.name}
      />
    </div>
  );
}

export const query = graphql`
  fragment WeaponFrameworkIconWeaponFramework on WeaponFrameworksJson {
    name
    icon {
      childImageSharp {
        gatsbyImageData(width: 100)
      }
    }
  }
`;
