import React, { useCallback } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Col, Popover, Tooltip } from "antd";
import { useDB } from "../../hooks/db";
import OverclockCardPopover from "./OverclockCardPopover";
import OverclockIcon from "./OverclockIcon";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useLiveQuery } from "dexie-react-hooks";

export default function OverclockCard(props: {
  overclock: Queries.OverclockCardOverclockFragment;
  miner: Queries.OverclockCardMinerFragment;
  weapon: Queries.OverclockCardWeaponFragment;
}) {
  const db = useDB();
  const query = useLiveQuery(
    () =>
      db.overclocks.get({
        weapon: props.weapon.name,
        name: props.overclock.name,
      }),
    [props.weapon, props.overclock.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.overclocks.add({
        weapon: props.weapon.name,
        name: props.overclock.name,
        isForged: false,
      });
    } else if (query.isForged) {
      db.overclocks
        .where({
          weapon: props.weapon.name,
          name: props.overclock.name,
        })
        .delete();
    } else {
      db.overclocks
        .where({
          weapon: props.weapon.name,
          name: props.overclock.name,
        })
        .modify({ isForged: true });
    }
  }, [db, props.overclock.name, props.weapon, query]);

  return (
    <Col
      key={props.overclock.name}
      xs={24}
      sm={12}
      md={12}
      lg={8}
      xl={6}
      xxl={4}
    >
      <Card
        hoverable
        title={props.overclock.name}
        headStyle={{
          backgroundColor: query?.isForged ? props.miner.color! : "inherit",
          color: query?.isForged ? props.miner.contrastColor! : "#cccccc",
          fontWeight: "bold",
          transition: "all 0.3s",
        }}
        style={
          query && !query?.isForged
            ? {
                outline: `3px solid ${props.miner.color}`,
              }
            : undefined
        }
        onClick={onClick}
      >
        <OverclockIcon overclock={props.overclock} />
        <Popover
          content={() => (
            <OverclockCardPopover
              weapon={props.weapon}
              overclock={props.overclock}
            />
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
            alt={`${props.overclock.name} is acquired, but unforged`}
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
