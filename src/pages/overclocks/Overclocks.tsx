import { Card } from "antd";
import { overclocks } from "./data";
import MinerOverclocks from "./MinerOverclocks";

export default function Overclocks() {
  return (
    <Card>
      <MinerOverclocks title="Driller" overclocks={overclocks.driller} />
      <MinerOverclocks
        title="Engineer"
        overclocks={overclocks.engineer}
        style={{ marginTop: 16 }}
      />
      <MinerOverclocks
        title="Gunner"
        overclocks={overclocks.gunner}
        style={{ marginTop: 16 }}
      />
      <MinerOverclocks
        title="Scout"
        overclocks={overclocks.scout}
        style={{ marginTop: 16 }}
      />
    </Card>
  );
}
