import React from "react";
import { Tooltip } from "antd";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/footer.css";

const FOOTER_HEIGHT = 50;

export type ProgressFooterProps = Readonly<{
  totalItems: number;
  completedItems: number;
  unforgedItems?: number;
}>;

export default function ProgressFooter({
  totalItems,
  completedItems,
  unforgedItems,
}: ProgressFooterProps) {
  const progress = (completedItems / totalItems) * 100;
  const partialProgress = unforgedItems && (unforgedItems / totalItems) * 100;

  const { allMinersJson: miners } = useStaticQuery<Queries.ProgressFooterQuery>(
    graphql`
      query ProgressFooter {
        allMinersJson {
          nodes {
            color
          }
        }
      }
    `
  );

  const backgroundColor = `linear-gradient(to right, ${miners.nodes
    .map(
      (miner, index, arr) =>
        `${miner.color} ${index * (100 / (arr.length - 1))}%`
    )
    .join(", ")})`;

  const animationColor = `linear-gradient(270deg, ${miners.nodes
    .map((miner) => `${miner.color}`)
    .join(", ")}`;

  const text = `Progress: ${Math.round(
    progress
  )}% (${completedItems} / ${totalItems})`;

  return (
    <div
      className={progress === 100 ? "completeAnimation" : undefined}
      style={{
        background: progress === 100 ? animationColor : backgroundColor,
        backgroundSize: progress === 100 ? "800% 800%" : "initial",
        height: FOOTER_HEIGHT,
        width: "100%",
        zIndex: 4,
      }}
    >
      {/* Unforged Section */}
      <div
        style={{
          background: `
          repeating-linear-gradient(
            -55deg,
            #333333,
            #333333 10px,
            #444444 10px,
            #444444 20px
          )`,
          float: "right",
          height: "100%",
          position: "absolute",
          right: 0,
          transition: "all 0.3s",
          width: `${100 - progress}%`,
          zIndex: 1,
        }}
      ></div>
      {/* Unfilled Section */}
      <div
        style={{
          backgroundColor: "#141414",
          height: "100%",
          position: "absolute",
          right: 0,
          transition: "all 0.3s",
          width:
            partialProgress === undefined
              ? `${100 - progress}%`
              : `${100 - progress - partialProgress}%`,
          zIndex: 2,
        }}
      ></div>
      {/* Completed Section */}
      <div
        style={{
          color: "#FFFFFFCC",
          fontWeight: "bold",
          height: FOOTER_HEIGHT,
          lineHeight: `${FOOTER_HEIGHT}px`,
          position: "absolute",
          textAlign: "center",
          textShadow: "2px 2px 5px black",
          width: "100%",
          zIndex: 3,
        }}
      >
        {unforgedItems ? (
          <Tooltip
            destroyTooltipOnHide
            title={
              partialProgress &&
              `Forged + Unforged: ${Math.round(
                ((completedItems + unforgedItems) / totalItems) * 100
              )}%`
            }
          >
            {text}
          </Tooltip>
        ) : (
          text
        )}
      </div>
    </div>
  );
}
