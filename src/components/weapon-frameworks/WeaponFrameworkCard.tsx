import React from "react";
import { Badge, Card, Col } from "antd";
import { useCallback } from "react";
import { useDB } from "../../hooks/db";
import { useLiveQuery } from "dexie-react-hooks";
import { graphql } from "gatsby";
import WeaponFrameworkIcon from "./WeaponFrameworkIcon";

export default function WeaponFrameworkCard({
  miner,
  weapon,
  framework,
}: {
  miner: Queries.WeaponFrameworkCardMinerFragment;
  weapon: Queries.WeaponFrameworkCardWeaponFragment;
  framework: Queries.WeaponFrameworkCardWeaponFrameworkFragment;
}) {
  const db = useDB();
  const query = useLiveQuery(
    () => db.frameworks.get({ weapon: weapon.name, name: framework.name }),
    [weapon, framework]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.frameworks.add({
        weapon: weapon.name,
        name: framework.name,
      });
    } else {
      db.frameworks
        .where({
          weapon: weapon.name,
          name: framework.name,
        })
        .delete();
    }
  }, [db.frameworks, framework, weapon, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12}>
      <Badge.Ribbon className="framework-ribbon" text={framework.name}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query ? miner.color : "inherit",
            transition: "all 0.3s ease",
          }}
        >
          <WeaponFrameworkIcon framework={framework} />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}

export const query = graphql`
  fragment WeaponFrameworkCardMiner on MinersJson {
    name
    color
  }

  fragment WeaponFrameworkCardWeapon on WeaponsJson {
    name
  }

  fragment WeaponFrameworkCardWeaponFramework on WeaponFrameworksJson {
    name
    ...WeaponFrameworkIconWeaponFramework
  }
`;
