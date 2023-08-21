import React, { useMemo } from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import nullthrows from '../../utils/nullthrows';

function CleanOverclockFrame() {
  return (
    <StaticImage
      alt="Clean Overclock"
      src="../../images/overclock-frames/clean.png"
    />
  );
}

function BalancedOverclockFrame() {
  return (
    <StaticImage
      alt="Clean Overclock"
      src="../../images/overclock-frames/balanced.png"
    />
  );
}

function UnstableOverclockFrame() {
  return (
    <StaticImage
      alt="Clean Overclock"
      src="../../images/overclock-frames/unstable.png"
    />
  );
}

export default function OverclockIcon({
  overclock,
}: {
  overclock: Queries.OverclockIconOverclockFragment;
}) {
  const FrameIcon = useMemo(() => {
    switch (overclock.type) {
      case 'CLEAN':
        return CleanOverclockFrame;
      case 'BALANCED':
        return BalancedOverclockFrame;
      case 'UNSTABLE':
        return UnstableOverclockFrame;
    }
  }, [overclock.type]);

  return (
    <div
      style={{
        height: 100,
        width: 100,
        margin: 'auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          transform: 'translate(-50%,-50%)',
          top: '50%',
          left: '50%',
        }}
      >
        <FrameIcon />
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -5${
              overclock.type === 'CLEAN' ? 7 : 0
            }%)`,
            top: '50%',
            left: '50%',
          }}
        >
          <GatsbyImage
            image={nullthrows(overclock.icon?.childImageSharp?.gatsbyImageData)}
            alt={overclock.name}
            style={{ height: 'auto', width: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  fragment OverclockIconOverclock on WeaponsJsonOverclocks {
    name
    type
    icon {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48)
      }
    }
  }
`;
