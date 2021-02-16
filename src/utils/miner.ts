import DrillerAvatar from 'assets/portraits/Driller_portrait.png';
import EngineerAvatar from 'assets/portraits/Engineer_portrait.png';
import GunnerAvatar from 'assets/portraits/Gunner_portrait.png';
import ScoutAvatar from 'assets/portraits/Scout_portrait.png';

export enum Miner {
  Driller = 'Driller',
  Engineer = 'Engineer',
  Gunner = 'Gunner',
  Scout = 'Scout',
}

export const AllMiners = [
  Miner.Driller,
  Miner.Engineer,
  Miner.Gunner,
  Miner.Scout,
] as const;

export const MinerAvatar: Record<Miner, string> = {
  [Miner.Driller]: DrillerAvatar,
  [Miner.Engineer]: EngineerAvatar,
  [Miner.Gunner]: GunnerAvatar,
  [Miner.Scout]: ScoutAvatar,
};

export const MinerColor: Record<Miner, string> = {
  [Miner.Driller]: '#f7fe00',
  [Miner.Engineer]: '#ed1d0a',
  [Miner.Gunner]: '#3d7029',
  [Miner.Scout]: '#4351ff',
};
