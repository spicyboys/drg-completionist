import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function ArmorPaintjobIcon({
  paintJob,
}: {
  paintJob: Queries.ArmorPaintJobIconArmorPaintJobFragment;
}) {
  return (
    <div
      style={{
        position: "relative",
        height: 100,
        width: 100,
        margin: "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <GatsbyImage
          image={paintJob.icon?.childImageSharp?.gatsbyImageData!}
          alt={paintJob.name!}
        />
      </div>
    </div>
  );
}

export const query = graphql`
  fragment ArmorPaintJobIconArmorPaintJob on MinersJsonArmorPaintJobs {
    name
    icon {
      childImageSharp {
        gatsbyImageData(width: 100)
      }
    }
  }
`;
