import * as BoscoIconSrcs from 'assets/bosco';
import { ItemSource } from 'types/itemSource';

export const BoscoID = 'D3AF4B9E940FEF41A7DB46914463F084';

export const BoscoFrameworkNames = [
  'Surplus Barrel', // Season 1
  'Barbaric', // Season 2
  'Blister Bot', // Season 3
] as const;

export const BoscoPaintjobNames = [
  'Moss Crawler', // Season 1
  'Icy', // Season 2
  'Plague Splatter', // Season 3
] as const;

export type BoscoFramework = {
  name: typeof BoscoFrameworkNames[number];
  itemSource: ItemSource;
  icon: ImgSrc;
  id: string;
};

export type BoscoPaintjob = {
  name: typeof BoscoPaintjobNames[number];
  itemSource: ItemSource;
  icon: ImgSrc;
  id: string;
};

export const BoscoFrameworks: BoscoFramework[] = [
  {
    name: 'Surplus Barrel',
    itemSource: ItemSource.CargoCrate,
    icon: BoscoIconSrcs.SurplusBarrel,
    id: 'E1F54D6D564D444BADB545DE13C4006C',
  },
  {
    name: 'Barbaric',
    itemSource: ItemSource.CargoCrate,
    icon: BoscoIconSrcs.Barbaric,
    id: '553A721DF7E80846B1BC2BCFDF8B5BED',
  },
  {
    name: 'Blister Bot',
    itemSource: ItemSource.PerformancePass,
    icon: BoscoIconSrcs.BlisterBot,
    id: '53A500B162010A4D98EE451003382E1D',
  },
];

export const BoscoPaintjobs: BoscoPaintjob[] = [
  {
    name: 'Moss Crawler',
    itemSource: ItemSource.LostPack,
    icon: BoscoIconSrcs.MossCrawler,
    id: '2E20820B0B45894A86621F34854D28F4',
  },
  {
    name: 'Icy',
    itemSource: ItemSource.LostPack,
    icon: BoscoIconSrcs.Icy,
    id: '403074E98B134541A214DB59205CA366',
  },
  {
    name: 'Plague Splatter',
    itemSource: ItemSource.PerformancePass,
    icon: BoscoIconSrcs.PlagueSplatter,
    id: '4A35D244688F7A45808671EAF3F3F170',
  },
];
