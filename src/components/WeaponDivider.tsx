import React from "react";
import { Divider, Tooltip } from "antd";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function WeaponDivider(props: {
  weapon: Queries.WeaponDividerFragment;
}) {
  return (
    <Divider orientation="center">
      <Tooltip title={props.weapon.name}>
        <GatsbyImage
          image={props.weapon.outline?.childImageSharp?.gatsbyImageData!}
          alt={props.weapon.name!}
          style={{ height: 75, width: "auto" }}
        />
      </Tooltip>
    </Divider>
  );
}

export const query = graphql`
  fragment WeaponDivider on WeaponsJson {
    name
    outline {
      childImageSharp {
        gatsbyImageData(height: 75)
      }
    }
  }
`;
