import Miner from "types/miner";

import DrillerAvatar from "assets/portraits/Driller_portrait.png";
import EngineerAvatar from "assets/portraits/Engineer_portrait.png";
import GunnerAvatar from "assets/portraits/Gunner_portrait.png";
import ScoutAvatar from "assets/portraits/Scout_portrait.png";

const MinerAvatar: Record<Miner, string> = {
  [Miner.Driller]: DrillerAvatar,
  [Miner.Engineer]: EngineerAvatar,
  [Miner.Gunner]: GunnerAvatar,
  [Miner.Scout]: ScoutAvatar,
};

export default MinerAvatar;
