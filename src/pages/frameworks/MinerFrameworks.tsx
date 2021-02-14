import { Row, Divider } from "antd";
import React from "react";
import Miner from "types/miner";
import { Frameworks } from "./FrameworkData";
import { MinerWeapons } from "utils/minerWeapons";

export default function MinerOverclocks(props: { miner: Miner }) {
  const { miner } = props;

  return (
    <>
      {(MinerWeapons[miner] as readonly string[]).map((weapon) => (
        <React.Fragment key={weapon}>
          <Divider orientation="left">{weapon}</Divider>
          <Row gutter={[16, 16]}>
            {Frameworks.map((overclock) => (
              <h1>{overclock}</h1>
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
