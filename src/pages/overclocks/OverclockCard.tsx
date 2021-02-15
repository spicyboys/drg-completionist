import OverclockIcon from "./OverclockIcon";
import { Overclock } from "./OverclockData";
import { Card, Col, Popover } from "antd";
import OverclockCardPopover from "./OverclockCardPopover";
import Miner from "types/miner";
import MinerColor from "utils/minerColor";
import { MinerWeapon } from "utils/minerWeapons";

export default function OverclockCard(props: {
  overclock: Overclock;
  miner: Miner;
  weapon: MinerWeapon<Miner>,
  isAcquired: boolean;
  onClick: () => void;
}) {
  return (
    <Popover
      placement="bottom"
      content={() => <OverclockCardPopover weapon={props.weapon} overclock={props.overclock} />}
    >
      <Col span={3} key={props.overclock.name}>
        <Card
          hoverable
          title={props.overclock.name}
          headStyle={
            props.isAcquired
              ? {
                color: "black",
                backgroundColor: MinerColor[props.miner],
                fontWeight: "bold",
                transition: "all .2s",
              }
              : {
                fontWeight: "bold",
                transition: "all .2s",
              }
          }
          onClick={props.onClick}
        >
          <OverclockIcon overclock={props.overclock} />
        </Card>
      </Col>
    </Popover>
  );
}
