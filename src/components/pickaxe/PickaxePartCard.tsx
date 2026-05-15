import { useLiveQuery } from 'dexie-react-hooks';
import { graphql } from 'gatsby';
import { useDB } from '../../hooks/db';
import { useCallback, type KeyboardEvent } from 'react';
import { Card, Col, Row } from 'antd';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import nullthrows from '../../utils/nullthrows';

export default function PickaxePartCard({
  pickaxePart,
  color,
  contrastColor,
}: {
  pickaxePart: Queries.PickaxePartCardPickaxePartFragment;
  color: string | null | undefined;
  contrastColor: string | null | undefined;
}) {
  const db = useDB();
  const query = useLiveQuery(
    () => db.pickaxeParts.get({ name: pickaxePart.name, component: 'BLADES' }),
    [pickaxePart.name],
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.pickaxeParts.add({ name: pickaxePart.name, component: 'BLADES' });
    } else {
      db.pickaxeParts.where({ name: pickaxePart.name }).delete();
    }
  }, [db.pickaxeParts, pickaxePart.name, query]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );

  return (
    <Col xxl={6} xl={8} lg={12} md={12} sm={12} xs={24}>
      <Card
        hoverable
        tabIndex={0}
        role="button"
        aria-pressed={!!query}
        aria-label={pickaxePart.name}
        title={pickaxePart.name}
        headStyle={{
          backgroundColor: query ? (color ?? undefined) : 'inherit',
          color: query ? (contrastColor ?? undefined) : '#cccccc',
          fontWeight: 'bold',
          transition: 'all 0.3s',
        }}
        onClick={onClick}
        onKeyDown={onKeyDown}
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
