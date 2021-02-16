import RightOutlined from "@ant-design/icons/RightOutlined";
import { Collapse } from "antd";
import { AllMiners, Miner } from "utils/miner";
import MinerCard from "./MinerCard";

export default function MinerPageLayout(props: {
  children: (miner: Miner) => React.ReactNode;
  getProgress: (miner: Miner) => number;
}) {
  return (
    <Collapse
      expandIconPosition="right"
      defaultActiveKey={[
        ...AllMiners.filter(
          (m) => Math.round(props.getProgress(m) * 100) !== 100
        ),
      ]}
      expandIcon={(p) => (
        <RightOutlined
          style={{ marginTop: 16 }}
          rotate={p.isActive ? 90 : undefined}
        />
      )}
    >
      {AllMiners.map((miner) => (
        <MinerCard key={miner} miner={miner} getProgress={props.getProgress}>
          {props.children}
        </MinerCard>
      ))}
    </Collapse>
  );
}
