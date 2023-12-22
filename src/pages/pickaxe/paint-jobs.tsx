import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { Row } from 'antd';
import PickaxePaintJobCard from '../../components/pickaxe/PickaxePaintJobCatd';

export default function PickaxePaintJobs({
  data,
}: PageProps<Queries.PickaxePaintJobsQuery>) {
  return (
    <Row gutter={[16, 16]}>
      {data.allPickaxePaintJobsJson.nodes.map((p) => (
        <PickaxePaintJobCard key={p.name} pickaxePaintJob={p} />
      ))}
    </Row>
  );
}

export const query = graphql`
  query PickaxePaintJobs {
    allPickaxePaintJobsJson {
      nodes {
        name
        ...PickaxePaintjobCardPickaxePaintJob
      }
    }
  }
`;
