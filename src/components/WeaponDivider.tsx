import React from "react";
import { Divider, Tooltip } from "antd";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function WeaponDivider(props: {
  weapon: Queries.WeaponDividerWeaponFragment;
}) {
  return (
    <Divider orientation="center">
      <Tooltip title={props.weapon.name}>
        <GatsbyImage
          image={props.weapon.outline?.childImageSharp?.gatsbyImageData!}
          alt={props.weapon.name!}
        />
      </Tooltip>
    </Divider>
  );
}

export const query = graphql`
  fragment WeaponDividerWeapon on WeaponsJson {
    name
    outline {
      childImageSharp {
        gatsbyImageData(height: 75)
      }
    }
  }
`;
