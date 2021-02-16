/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Row } from "antd";
import React from "react";
import { Miner } from "utils/miner";
import { Frameworks } from "./FrameworkData";
import { MinerWeapons, MinerWeapon } from "utils/weapons";
import useStore from "data/useStore";
import FrameworkCard from "./FrameworkCard";
import WeaponDivider from "components/WeaponDivider";

export default function MinerFrameworks<T extends Miner>(props: { miner: T }) {
  const { miner } = props;
  const [acquiredFrameworks, dispatch] = useStore("frameworks");

  return (
    <>
      {(MinerWeapons[miner] as readonly MinerWeapon<T>[]).map((weapon) => (
        <React.Fragment key={weapon}>
          <WeaponDivider weapon={weapon} />
          <Row gutter={[16, 16]}>
            {Frameworks.map((framework) => (
              <FrameworkCard
                key={framework}
                miner={miner}
                framework={framework}
                isAcquired={
                  acquiredFrameworks.get(weapon)?.has(framework) ?? false
                }
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_FRAMEWORK",
                    payload: {
                      weapon,
                      framework,
                    },
                  })
                }
              />
            ))}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
