import { useLiveQuery } from 'dexie-react-hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useDB } from '../../hooks/db';
import { useCallback } from 'react';
import { Card, Col, Row } from 'antd';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import nullthrows from '../../utils/nullthrows';

export default function PickaxePartCard({
  pickaxePart,
}: {
  pickaxePart: Queries.PickaxePartCardPickaxePartFragment;
}) {
  const db = useDB();
  const query = useLiveQuery(
    () => db.pickaxeParts.get({ name: pickaxePart.name, component: 'BLADES' }),
    [pickaxePart],
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.pickaxeParts.add({ name: pickaxePart.name, component: 'BLADES' });
    } else {
      db.pickaxeParts.where({ name: pickaxePart.name }).delete();
    }
  }, [db.pickaxeParts, pickaxePart.name, query]);

  const { color, contrastColor } =
    useStaticQuery<Queries.PickaxePartCardColorsQuery>(graphql`
      query PickaxePartCardColors {
        minersJson(name: { eq: "Engineer" }) {
          color
          contrastColor
        }
      }
    `).minersJson!;

  return (
    <Col xxl={6} xl={8} lg={12} md={12} sm={12} xs={24}>
      <Card
        hoverable
        title={pickaxePart.name}
        headStyle={{
          backgroundColor: query ? color : 'inherit',
          color: query ? contrastColor : '#cccccc',
          fontWeight: 'bold',
          transition: 'all 0.3s',
        }}
        onClick={onClick}
      >
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <GatsbyImage
              image={nullthrows(
                pickaxePart.icon?.childImageSharp?.gatsbyImageData,
              )}
              alt={pickaxePart.name}
              style={{
                border: '2px solid #cccccc',
                height: 110,
                width: 'auto',
              }}
            />
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export const query = graphql`
  fragment PickaxePartCardPickaxePart on PickaxePartsJson {
    name
    icon {
      childImageSharp {
        gatsbyImageData(height: 110)
      }
    }
  }
`;
