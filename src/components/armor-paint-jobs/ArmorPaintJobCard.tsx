import React, { useCallback } from "react";
import { Badge, Card, Col } from "antd";
import { useDB } from "../../hooks/db";
import ArmorPaintJobIcon from "./ArmorPaintJobIcon";
import { graphql } from "gatsby";
import { useLiveQuery } from "dexie-react-hooks";

export default function ArmorPaintJobCard({
  miner,
  paintJob,
}: {
  miner: Queries.ArmorPaintJobCardMinerFragment;
  paintJob: Queries.ArmorPaintJobCardArmorPaintJobFragment;
}) {
  const db = useDB();
  const query = useLiveQuery(
    () => db.armorPaintjobs.get({ miner: miner.name, name: paintJob.name }),
    [miner.name, paintJob.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.armorPaintjobs.add({
        miner: miner.name,
        name: paintJob.name,
      });
    } else {
      db.armorPaintjobs
        .where({
          miner: miner.name,
          name: paintJob.name,
        })
        .delete();
    }
  }, [db.armorPaintjobs, miner.name, paintJob.name, query]);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12} key={paintJob.name}>
      <Badge.Ribbon className="armor-paintjob-ribbon" text={paintJob.name}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query ? miner.color! : "inherit",
            transition: "all 0.3s ease",
          }}
        >
          <ArmorPaintJobIcon paintJob={paintJob} />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}

export const query = graphql`
  fragment ArmorPaintJobCardMiner on MinersJson {
    name
    color
  }

  fragment ArmorPaintJobCardArmorPaintJob on MinersJsonArmorPaintJobs {
    name
    ...ArmorPaintJobIconArmorPaintJob
  }
`;
