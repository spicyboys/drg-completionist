import { PlayerRankIcon } from 'assets/other';
import * as Avatars from 'assets/portraits';

export enum Miner {
  Driller = 'Driller',
  Engineer = 'Engineer',
  Gunner = 'Gunner',
  Scout = 'Scout',
}

// For item types with some members usable by all Miners (e.g., Paintjobs).
export enum MinerWithAllClass {
  AllClass = 'All-Class',
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

export const AllMinersWithAllClass = [
  ...AllMiners,
  MinerWithAllClass.AllClass,
] as const;

export const MinerAvatar: Record<MinerWithAllClass, ImgSrc> = {
  [MinerWithAllClass.AllClass]: PlayerRankIcon,
  [MinerWithAllClass.Driller]: Avatars.DrillerPortrait,
  [MinerWithAllClass.Engineer]: Avatars.EngineerPortrait,
  [MinerWithAllClass.Gunner]: Avatars.GunnerPortrait,
  [MinerWithAllClass.Scout]: Avatars.ScoutPortrait,
};

export const MinerColor: Record<MinerWithAllClass, string> = {
  [MinerWithAllClass.AllClass]: '#0076D1',
  [MinerWithAllClass.Driller]: '#D19724',
  [MinerWithAllClass.Engineer]: '#892F30',
  [MinerWithAllClass.Gunner]: '#446043',
  [MinerWithAllClass.Scout]: '#106193',
};

export const MinerColorContrastText: Record<MinerWithAllClass, string> = {
  [MinerWithAllClass.AllClass]: '#000000',
  [MinerWithAllClass.Driller]: '#161616',
  [MinerWithAllClass.Engineer]: '#ECECEC',
  [MinerWithAllClass.Gunner]: '#FFFFFFE6',
  [MinerWithAllClass.Scout]: '#FFFFFFF2',
};
