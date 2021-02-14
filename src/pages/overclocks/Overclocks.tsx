import { Card } from "antd";
import { overclocks } from "./data";
import MinerOverclocks from "./MinerOverclocks";
import DrillerAvatar from "assets/portraits/Driller_portrait.png";
import EngineerAvatar from "assets/portraits/Engineer_portrait.png";
import GunnerAvatar from "assets/portraits/Gunner_portrait.png";
import ScoutAvatar from "assets/portraits/Scout_portrait.png";

export default function Overclocks() {
  return (
    <Card>
      <MinerOverclocks
        title="Driller"
        img={DrillerAvatar}
        overclocks={overclocks.driller}
      />
      <MinerOverclocks
        title="Engineer"
        img={EngineerAvatar}
        overclocks={overclocks.engineer}
        style={{ marginTop: 16 }}
      />
      <MinerOverclocks
        title="Gunner"
        img={GunnerAvatar}
        overclocks={overclocks.gunner}
        style={{ marginTop: 16 }}
      />
      <MinerOverclocks
        title="Scout"
        img={ScoutAvatar}
        overclocks={overclocks.scout}
        style={{ marginTop: 16 }}
      />
    </Card>
  );
}
