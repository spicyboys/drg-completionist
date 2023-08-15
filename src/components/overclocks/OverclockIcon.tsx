import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import nullthrows from "../../utils/nullthrows";

export default function OverclockIcon({
  overclock,
}: {
  overclock: Queries.OverclockIconOverclockFragment;
}) {
  return (
    <div
      style={{
        height: 100,
        width: 100,
        margin: "auto",
      }}
    >
      <div
        style={{
          position: "relative",
          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <GatsbyImage
          image={nullthrows(
            overclock.type.icon?.childImageSharp?.gatsbyImageData,
          )}
          alt={overclock.type.name!}
          style={{ height: "auto", width: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -5${
              overclock.type.name === "Clean" ? 7 : 0
            }%)`,
            top: "50%",
            left: "50%",
          }}
        >
          <GatsbyImage
            image={nullthrows(overclock.icon?.childImageSharp?.gatsbyImageData)}
            alt={overclock.name}
            style={{ height: "auto", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  fragment OverclockIconOverclock on WeaponsJsonOverclocks {
    name
    type {
      name
      icon {
        childImageSharp {
          gatsbyImageData(width: 100, height: 100)
        }
      }
    }
    icon {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48)
      }
    }
  }
`;
