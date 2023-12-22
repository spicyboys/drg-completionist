import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { Row } from 'antd';
import PickaxePartSetCard from '../../components/pickaxe/PickaxePartSetCard';

const Overclocks = ({ data }: PageProps<Queries.PickaxePartsQuery>) => {
  console.log(data);
  return (
    <Row gutter={[16, 16]}>
      {data.allPickaxePartSetsJson.nodes.map((p) => (
        <PickaxePartSetCard key={p.name} pickaxePartSet={p} />
      ))}
    </Row>
  );
};

export default Overclocks;

export const query = graphql`
  query PickaxeParts {
    allPickaxePartSetsJson {
      nodes {
        ...PickaxePartSetCardPickaxePartSet
        name
      }
    }

    allPickaxePartsJson {
      nodes {
        name
      }
    }
  }
`;
