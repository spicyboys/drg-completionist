import OverclockIcon from "./OverclockIcon";
import { Overclock } from "./OverclockData";
import { ClassColors } from "utils/classColors";
import { Card, Col, Popover } from "antd";
import OverclockCardPopover from "./OverclockCardPopover";

export default function OverclockCard(props: {
  overclock: Overclock;
  isAcquired: boolean;
  onClick: () => void;
}) {
  return (
    <Popover
      title={props.overclock.name}
      content={() => <OverclockCardPopover overclock={props.overclock} />}
    >
      <Col span={3} key={props.overclock.name}>
        <Card
          hoverable
          title={props.overclock.name}
          headStyle={
            props.isAcquired
              ? {
                  color: "black",
                  backgroundColor: ClassColors[props.overclock.class],
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
