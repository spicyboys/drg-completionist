import { overclocks } from "./OverclockData";
import { ClassColors } from "utils/classColors";
import MinerOverclocks from "./MinerOverclocks";
import DrillerAvatar from "assets/portraits/Driller_portrait.png";
import EngineerAvatar from "assets/portraits/Engineer_portrait.png";
import GunnerAvatar from "assets/portraits/Gunner_portrait.png";
import ScoutAvatar from "assets/portraits/Scout_portrait.png";
import { Collapse } from "antd";
import RightOutlined from "@ant-design/icons/RightOutlined";

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
      />
      <MinerOverclocks
        title="Gunner"
        img={GunnerAvatar}
        overclocks={overclocks.gunner}
        classColor={ClassColors.Gunner}
      />
      <MinerOverclocks
        title="Scout"
        img={ScoutAvatar}
        overclocks={overclocks.scout}
        classColor={ClassColors.Scout}
      />
    </Collapse>
  );
}
