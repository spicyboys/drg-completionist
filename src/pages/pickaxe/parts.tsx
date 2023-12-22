import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { Row } from 'antd';
import PickaxePartSetCard from '../../components/pickaxe/PickaxePartSetCard';
import PickaxePartCard from '../../components/pickaxe/PickaxePartCard';

export default function PickaxeParts({
  data,
}: PageProps<Queries.PickaxePartsQuery>) {
  return (
    <Row gutter={[16, 16]}>
      {data.allPickaxePartSetsJson.nodes.map((p) => (
        <PickaxePartSetCard key={p.name} pickaxePartSet={p} />
      ))}
      {data.allPickaxePartsJson.nodes.map((p) => (
        <PickaxePartCard key={p.name} pickaxePart={p} />
      ))}
    </Row>
  );
}

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
        ...PickaxePartCardPickaxePart
        name
      }
    }
  }
`;
