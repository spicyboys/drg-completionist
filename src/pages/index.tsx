import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { useContext, useEffect, useState, useRef } from 'react';
import { FooterContext } from '../components/Layout';
import OverviewSection from '../components/overview/OverviewSection';
import { Card, Space } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = ({
  data: {
    allMinersJson: { nodes: miners },
  },
}: PageProps<Queries.IndexPageQuery>) => {
  const setFooter = useContext(FooterContext);
  setFooter(null);

  // #region React is Fun
  // I do all this just to make the <Space> element wrap below a certain width.
  // I love React.
  const cardRef = useRef(document.createElement('div'));
  const [width, setWidth] = useState(0);
  const [isWrapped, setIsWrapped] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      cardRef.current && observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    setIsWrapped(width < 450);
  }, [width]);
  // #endregion

  return (
    <>
      <Card
        title={
          <>
            <WarningOutlined style={{ marginRight: '0.5rem' }} /> Site Under
            Construction
          </>
        }
        style={{ background: '#6E5B0C', maxWidth: 800, margin: '0 auto' }}
        ref={cardRef}
      >
        <Space wrap={isWrapped}>
          <StaticImage
            src="../images/mission-control.png"
            alt="Mission Control Disclaimer"
            width={250}
            height={250}
          />
          <p>
            <b>Welcome, miner!</b> Management has the lads in R&D rewriting the
            site from scratch to better serve all employees throughout the next
            fiscal quarter. Please bear with us as previous functionality is
            restored, and{' '}
            <a
              href="https://github.com/spicyboys/drg-completionist/issues"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'white',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              let us know
            </a>{' '}
            if you find any (non-Glyphid) bugs in need of extermination.
          </p>
        </Space>
      </Card>

      {miners.map((miner) => (
        <OverviewSection miner={miner} key={miner.name} />
      ))}
    </>
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
