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
  [Miner.Driller]: '#D19724',
  [Miner.Engineer]: '#892F30',
  [Miner.Gunner]: '#446043',
  [Miner.Scout]: '#106193',
};

export const MinerColorContrastText: Record<Miner, string> = {
  [Miner.Driller]: '#161616',
  [Miner.Engineer]: '#ECECEC',
  [Miner.Gunner]: '#FFFFFFE6',
  [Miner.Scout]: '#FFFFFFF2',
};
