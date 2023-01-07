import * as Avatars from 'assets/portraits';

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

export const MinerIDs: Record<Miner, string> = {
  [Miner.Driller]: '9EDD56F1EEBCC5488D5B5E5B80B62DB4',
  [Miner.Engineer]: '85EF626C65F1024A8DFEB5D0F3909D2E',
  [Miner.Gunner]: 'AE56E180FEC0C44D96FA29C28366B97B',
  [Miner.Scout]: '30D8EA17D8FBBA4C95306DE9655C2F8C',
};
