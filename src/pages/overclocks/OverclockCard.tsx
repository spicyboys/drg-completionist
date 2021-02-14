import OverclockIcon from "./OverclockIcon";
import { Overclock } from "./data";
import { Card, Col } from "antd";

enum ClassColors {
  "Driller" = "#f7fe00",
  "Engineer" = "#ed1d0a",
  "Gunner" = "#3d7029",
  "Scout" = "#4351ff",
};

export default function OverclockCard(props: {
  overclock: Overclock;
  isAcquired: boolean;
  onClick: () => void;
}) {
  return (
    <Col span={3} key={props.overclock.name}>
      <Card
        hoverable
        title={props.overclock.name}
        headStyle={
          props.isAcquired
            ? {
              color: "black",
              backgroundColor: ClassColors[props.overclock.class],
              transition: "all .2s",
            }
            : {
              transition: "all .2s",
            }
        }
        onClick={props.onClick}
      >
        <OverclockIcon overclock={props.overclock} />
      </Card>
    </Col>
  );
}
