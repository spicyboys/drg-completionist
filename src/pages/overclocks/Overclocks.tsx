import { overclocks } from "./OverclockData";
import { ClassColors } from "utils/classColors";
import MinerOverclocks from "./MinerOverclocks";
import DrillerAvatar from "assets/portraits/Driller_portrait.png";
import EngineerAvatar from "assets/portraits/Engineer_portrait.png";
import GunnerAvatar from "assets/portraits/Gunner_portrait.png";
import ScoutAvatar from "assets/portraits/Scout_portrait.png";

export default function Overclocks() {
  return (
    <div style={{ margin: 10 }}>
      <MinerOverclocks
        title="Driller"
        img={DrillerAvatar}
        classColor={ClassColors.Driller}
        overclocks={overclocks.driller}
      />
      <MinerOverclocks
        title="Engineer"
        img={EngineerAvatar}
        overclocks={overclocks.engineer}
        classColor={ClassColors.Engineer}
        style={{ marginTop: 16 }}
      />
      <MinerOverclocks
        title="Gunner"
        img={GunnerAvatar}
        overclocks={overclocks.gunner}
        classColor={ClassColors.Gunner}
        style={{ marginTop: 16 }}
      />
      <MinerOverclocks
        title="Scout"
        img={ScoutAvatar}
        overclocks={overclocks.scout}
        classColor={ClassColors.Scout}
        style={{ marginTop: 16 }}
      />
    </div>
  );
}
