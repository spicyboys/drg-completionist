import { Col, Card } from "antd";
import { Miner, MinerColor } from "utils/miner";
import { Framework, FrameworkIcon } from "./FrameworkData";

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
        <div
          style={{
            position: "relative",
            height: 100,
            width: 100,
            margin: "auto",
          }}
        >
          <div
            style={{
              position: "absolute",
              transform: "translate(-50%,-50%)",
              top: "50%",
              left: "50%",
            }}
          >
            <img
              width="100"
              height="100"
              src={FrameworkIcon[props.framework]}
              alt={props.framework}
            />
          </div>
        </div>
      </Card>
    </Col>
  );
}
