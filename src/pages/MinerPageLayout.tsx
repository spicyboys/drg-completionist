import MinerCard from "./MinerCard";
import { Collapse } from "antd";
import RightOutlined from "@ant-design/icons/RightOutlined";
import Miner from "types/miner";

export default function MinerPageLayout(props: {
  children: (miner: Miner) => React.ReactNode;
  getProgress: (miner: Miner) => number;
}) {
  return (
    <Collapse
      expandIconPosition="right"
      expandIcon={(p) => (
        <RightOutlined
          style={{ marginTop: 16 }}
          rotate={p.isActive ? 90 : undefined}
        />
      )}
    >
      {[Miner.Driller, Miner.Engineer, Miner.Gunner, Miner.Scout].map(
        (miner) => (
          <MinerCard miner={miner} getProgress={props.getProgress}>
            {props.children}
          </MinerCard>
        )
      )}
    </Collapse>
  );
}
