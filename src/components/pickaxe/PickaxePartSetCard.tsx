import { Card, Checkbox, Col, Divider, Row } from 'antd';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useCallback, useMemo } from 'react';
import nullthrows from '../../utils/nullthrows';
import { useDB } from '../../hooks/db';
import { useLiveQuery } from 'dexie-react-hooks';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';

const CheckboxOptions: Queries.PickaxeComponent[] = [
  'BLADES',
  'HANDLE',
  'HEAD',
  'POMMEL',
  'SHAFT',
];

export default function PickaxePartSetCard({
  pickaxePartSet,
}: {
  pickaxePartSet: Queries.PickaxePartSetCardPickaxePartSetFragment;
}) {
  const db = useDB();
  const checkedParts = useLiveQuery(
    () => db.pickaxeParts.where({ name: pickaxePartSet.name }).toArray(),
    [pickaxePartSet.name],
  )?.map((p) => p.component);

  const { color, contrastColor } =
    useStaticQuery<Queries.PickaxePartSetCardColorsQuery>(graphql`
      query PickaxePartSetCardColors {
        minersJson(name: { eq: "Driller" }) {
          color
          contrastColor
        }
      }
    `).minersJson!;

  /**
   * Check for newly checked and unchecked partsAdd and delete IndexedDB
   * entries and add and delete IndexedDB entries, respectively.
   */
  const setCheckedParts = useCallback(
    (values: CheckboxValueType[]) => {
      // Filter for parts that aren't currently checked and add entries
      const newlyCheckedItems = values.filter(
        (v) => !checkedParts?.includes(v as Queries.PickaxeComponent),
      );
      if (newlyCheckedItems.length > 0) {
        db.pickaxeParts.bulkAdd(
          newlyCheckedItems.map((i) => ({
            name: pickaxePartSet.name,
            component: i as Queries.PickaxeComponent,
          })),
        );
      }

      // Filter for parts that were previously checked and delete entries
      const newlyUncheckedItems = checkedParts
        ? checkedParts.filter((v) => !values.includes(v))
        : values;
      if (newlyUncheckedItems.length > 0) {
        db.pickaxeParts
          .where({ name: pickaxePartSet.name })
          .and((p) => newlyUncheckedItems.includes(p.component))
          .delete();
      }
    },
    [checkedParts, db.pickaxeParts, pickaxePartSet.name],
  );

  // Checks if all checkboxes are currently checked.
  const isComplete = useMemo(() => {
    if (checkedParts === undefined) {
      return false;
    }
    return checkedParts.length === CheckboxOptions.length;
  }, [checkedParts]);

  // Checks if only some of the checkboxes are currently checked.
  const isPartiallyComplete = useMemo(() => {
    if (checkedParts === undefined) {
      return false;
    }
    return (
      checkedParts.length !== 0 &&
      checkedParts.length !== CheckboxOptions.length
    );
  }, [checkedParts]);

  /**
   * Toggle between checking and unchecking all checkboxes
   * when card header is clicked.
   * Also adds and deletes all IndexedDB entries appropriately.
   */
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // We only want to register clicks to the header
      if (
        e.target instanceof HTMLElement &&
        !e.target.matches('.ant-card-head, .ant-card-head *')
      ) {
        return;
      }

      if (isComplete) {
        // If all checked, delete all part entries from set (except Paintjob)
        db.pickaxeParts
          .where({
            name: pickaxePartSet.name,
          })
          .delete();
      } else {
        // Otherwise, add entries for all currently unchecked parts
        db.pickaxeParts.bulkAdd(
          CheckboxOptions.filter((c) => !checkedParts?.includes(c)).map(
            (p) => ({
              name: pickaxePartSet.name,
              component: p,
            }),
          ),
        );
      }
    },
    [checkedParts, db.pickaxeParts, isComplete, pickaxePartSet.name],
  );

  return (
    <Col xxl={6} xl={8} lg={12} md={12} sm={12} xs={24}>
      <Card
        hoverable
        title={pickaxePartSet.name}
        onClick={onClick}
        headStyle={{
          backgroundColor: isComplete ? color : 'inherit',
          color: isComplete ? contrastColor : '#cccccc',
          fontWeight: 'bold',
          transition: 'all 0.3s',
        }}
        style={
          isPartiallyComplete
            ? {
                outline: `3px solid ${color}`,
              }
            : undefined
        }
      >
        <Row justify="space-between">
          <Col span={11} style={{ textAlign: 'center' }}>
            <GatsbyImage
              alt={pickaxePartSet.name}
              image={nullthrows(
                pickaxePartSet.icon?.childImageSharp?.gatsbyImageData,
              )}
              style={{
                border: '2px solid #cccccc',
              }}
            />
          </Col>
          <Col span={2}>
            <Divider type="vertical" style={{ height: '100%' }} />
          </Col>
          <Col span={11}>
            <Row align="middle" justify="space-between">
              <Checkbox.Group
                onChange={setCheckedParts}
                style={{ width: '100%', whiteSpace: 'nowrap' }}
                value={checkedParts ?? []}
              >
                {CheckboxOptions.map((option) => (
                  <Col key={option} span={24}>
                    <Checkbox
                      value={option}
                      style={{ textTransform: 'capitalize' }}
                    >
                      {option.toLocaleLowerCase()}
                    </Checkbox>
                  </Col>
                ))}
              </Checkbox.Group>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export const query = graphql`
  fragment PickaxePartSetCardPickaxePartSet on PickaxePartSetsJson {
    name
    icon {
      childImageSharp {
        gatsbyImageData(height: 110)
      }
    }
  }
`;
