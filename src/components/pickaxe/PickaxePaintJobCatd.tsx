import { useCallback } from 'react';
import { useDB } from '../../hooks/db';
import { useLiveQuery } from 'dexie-react-hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { Badge, Card, Col } from 'antd';
import React from 'react';
import PickaxePaintJobIcon from './PickaxePaintJobIcon';

export default function PickaxePaintJobCard({
  pickaxePaintJob,
}: {
  pickaxePaintJob: Queries.PickaxePaintjobCardPickaxePaintJobFragment;
}) {
  const db = useDB();
  const query = useLiveQuery(
    () =>
      db.pickaxeParts.get({
        name: pickaxePaintJob.name,
        component: 'PAINT_JOB',
      }),
    [pickaxePaintJob.name],
  );

  const { color } = useStaticQuery<Queries.PickaxePaintJobCardColorsQuery>(
    graphql`
      query PickaxePaintJobCardColors {
        minersJson(name: { eq: "Scout" }) {
          color
        }
      }
    `,
  ).minersJson!;

  /** When clicked, add new entry to IndexedDB if Paintjob doesn't exist,
   *  or delete its entry if it does. */
  const toggleEntry = useCallback(() => {
    if (query === undefined) {
      db.pickaxeParts.add({
        name: pickaxePaintJob.name,
        component: 'PAINT_JOB',
      });
    } else {
      db.pickaxeParts
        .where({ name: pickaxePaintJob.name, component: 'PAINT_JOB' })
        .delete();
    }
  }, [db.pickaxeParts, pickaxePaintJob.name, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12}>
      <Badge.Ribbon className="pickaxe-ribbon" text={pickaxePaintJob.name}>
        <Card
          hoverable
          onClick={toggleEntry}
          size="small"
          style={{
            backgroundColor: query ? color : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <PickaxePaintJobIcon paintJob={pickaxePaintJob} />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}

export const query = graphql`
  fragment PickaxePaintjobCardPickaxePaintJob on PickaxePaintJobsJson {
    name
    ...PickaxePaintJobIconPickaxePaintJob
  }
`;
