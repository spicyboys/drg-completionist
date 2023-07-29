import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { useContext } from 'react';
import { FooterContext } from '../components/Layout';
import OverviewSection from '../components/overview/OverviewSection';

const pageStyles = {
  padding: 24,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage = ({
  data: {
    allMinersJson: { nodes: miners },
  },
}: PageProps<Queries.IndexPageQuery>) => {
  const setFooter = useContext(FooterContext);

  setFooter(null);

  return (
    <main style={pageStyles}>
      {miners.map((miner) => (
        <OverviewSection miner={miner} key={miner.name} />
      ))}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Overview</title>;

export const query = graphql`
  query IndexPage {
    allMinersJson {
      nodes {
        name
        ...OverviewSectionMiner
      }
    }
  }
`;
