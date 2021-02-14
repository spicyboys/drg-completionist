import MinerOverclocks from "./MinerOverclocks";
import { Collapse } from "antd";
import RightOutlined from "@ant-design/icons/RightOutlined";
import Miner from "types/miner";

export default function Overclocks() {
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
      <MinerOverclocks miner={Miner.Driller} />
      <MinerOverclocks miner={Miner.Engineer} />
      <MinerOverclocks miner={Miner.Gunner} />
      <MinerOverclocks miner={Miner.Scout} />
    </Collapse>
  );
}
