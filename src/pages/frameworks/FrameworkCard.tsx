import { Col, Card } from "antd";
import { Miner, MinerColor } from "utils/miner";
import { Framework } from "./FrameworkData";
import FrameworkIcon from "./FrameworkIcon";

export default function FrameworkCard<T extends Miner>(props: {
  miner: T;
  framework: Framework;
  isAcquired: boolean;
  onClick: () => void;
}) {
  return (
    <Col span={3} key={props.framework}>
      <Card
        hoverable
        title={props.framework}
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
        <FrameworkIcon framework={props.framework} />
      </Card>
    </Col>
  );
}
