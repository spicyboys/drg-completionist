import React, { useCallback } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Col, Popover, Tooltip } from "antd";
import { useDB } from "../../hooks/db";
import OverclockCardPopover from "./OverclockCardPopover";
import OverclockIcon from "./OverclockIcon";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useLiveQuery } from "dexie-react-hooks";

export default function OverclockCard({
  overclock,
  miner,
  weapon,
}: {
  overclock: Queries.OverclockCardOverclockFragment;
  miner: Queries.OverclockCardMinerFragment;
  weapon: Queries.OverclockCardWeaponFragment;
}) {
  const db = useDB();
  const query = useLiveQuery(
    () =>
      db.overclocks.get({
        weapon: weapon.name,
        name: overclock.name,
      }),
    [weapon, overclock.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.overclocks.add({
        weapon: weapon.name,
        name: overclock.name,
        isForged: false,
      });
    } else if (query.isForged) {
      db.overclocks
        .where({
          weapon: weapon.name,
          name: overclock.name,
        })
        .delete();
    } else {
      db.overclocks
        .where({
          weapon: weapon.name,
          name: overclock.name,
        })
        .modify({ isForged: true });
    }
  }, [db, overclock.name, weapon, query]);

  return (
    <Col key={overclock.name} xs={24} sm={12} md={12} lg={8} xl={6} xxl={4}>
      <Card
        hoverable
        title={overclock.name}
        headStyle={{
          backgroundColor: query?.isForged ? miner.color! : "inherit",
          color: query?.isForged ? miner.contrastColor! : "#cccccc",
          fontWeight: "bold",
          transition: "all 0.3s",
        }}
        style={
          query && !query?.isForged
            ? {
                outline: `3px solid ${miner.color}`,
              }
            : undefined
        }
        onClick={onClick}
      >
        <OverclockIcon overclock={overclock} />
        <Popover
          content={() => (
            <OverclockCardPopover weapon={weapon} overclock={overclock} />
          )}
          destroyTooltipOnHide
        >
          <InfoCircleOutlined
            style={{
              color: "white",
              float: "right",
              fontSize: 14,
              marginTop: -14,
            }}
          />
        </Popover>
        <Tooltip
          title={query && !query?.isForged ? "Unforged" : undefined}
          destroyTooltipOnHide
        >
          <StaticImage
            alt={`${overclock.name} is acquired, but unforged`}
            src="../../images/unforged.png"
            height={20}
            style={{
              float: "left",
              marginTop: -20,
              opacity: query && !query?.isForged ? 1 : 0,
            }}
          />
        </Tooltip>
      </Card>
    </Col>
  );
}

export const query = graphql`
  fragment OverclockCardOverclock on WeaponsJsonOverclocks {
    name
    ...OverclockIconOverclock
    ...OverclockCardPopoverOverclock
  }

  fragment OverclockCardWeapon on WeaponsJson {
    name
    outline {
      childImageSharp {
        gatsbyImageData(height: 75)
      }
    }
  }

  fragment OverclockCardMiner on MinersJson {
    color
    contrastColor
  }
`;
