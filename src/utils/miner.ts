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

export const MinerAvatar: Record<Miner, ImgSrc> = {
  [Miner.Driller]: Avatars.DrillerPortrait,
  [Miner.Engineer]: Avatars.EngineerPortrait,
  [Miner.Gunner]: Avatars.GunnerPortrait,
  [Miner.Scout]: Avatars.ScoutPortrait,
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
