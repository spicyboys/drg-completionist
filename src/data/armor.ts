import PaintjobIconSrcs from 'assets/armorPaintjobs';
import { Miner } from 'data/miner';

// All-Class Paintjobs are identical with no class-specific variation.
// Default and DLC Paintjobs excluded for now.
export const ArmorPaintjobNames = {
  [Miner.Driller]: [
    //'Default Paintjob',
    'Chalkbuster',
    'Chocolate Reign',
    'Colossus',
    'Intricate Carver',
    'Mud Runner',
    'Muddy Path',
    'Splattered',
    // SEASON 1
    'Chipped Shadow',
    'Gritty Sandbox',
    'Moss Crawler',
    'Speckled Predator',
    // SEASON 2
    'Boot Camp',
    'Oxidized Copper',
    'Rusty Colossus',
    'Dark Neon',
    // SEASON 3,
    'Platinum',
    'Umber Corrosion',
    'Monochromatic',
    //'Verdigris',
  ],
  [Miner.Engineer]: [
    //'Default Paintjob',
    'Dustrunner',
    'Ember Fury',
    'Grunge Buster',
    'Orange Geek',
    'Splattered',
    "Teacher's Pet",
    'Top Dog',
    // SEASON 1
    'Chipped Shadow',
    'Gritty Sandbox',
    'Moss Crawler',
    'Speckled Predator',
    // SEASON 2
    'Boot Camp',
    'Oxidized Copper',
    'Rusty Colossus',
    'Dark Neon',
    // SEASON 3,
    'Platinum',
    'Umber Corrosion',
    'Monochromatic',
    //'Verdigris',
  ],
  [Miner.Gunner]: [
    //'Default Paintjob',
    'Copperbug',
    'Desert Road',
    'Distant Field',
    'Lime Thunder',
    'Mercury Bulwark',
    'Splattered',
    'Topsoil Defender',
    // SEASON 1
    'Chipped Shadow',
    'Gritty Sandbox',
    'Moss Crawler',
    'Speckled Predator',
    // SEASON 2
    'Boot Camp',
    'Oxidized Copper',
    'Rusty Colossus',
    'Dark Neon',
    // SEASON 3,
    'Platinum',
    'Umber Corrosion',
    'Monochromatic',
    //'Verdigris',
  ],
  [Miner.Scout]: [
    //'Default Paintjob',
    'Aqua Force',
    'Azure Draft',
    'Dark Stripes',
    'Dusty Winds',
    'Frigid Tiger',
    'Splattered',
    'Subtle Shadow',
    // SEASON 1
    'Chipped Shadow',
    'Gritty Sandbox',
    'Moss Crawler',
    'Speckled Predator',
    // SEASON 2
    'Boot Camp',
    'Oxidized Copper',
    'Rusty Colossus',
    'Dark Neon',
    // SEASON 3,
    'Platinum',
    'Umber Corrosion',
    'Monochromatic',
    //'Verdigris',
  ],
} as const;

export type ArmorPaintjobNames = {
  [K in Miner]: typeof ArmorPaintjobNames[K];
};

export const CommonArmorPaintjobNames = [
  'Black Crag',
  'Regal Aegis',
  'Scale Brigade',
  'Toxic Defender',
] as const;

// Including this extra DLC array in case we ever want to include DLC paintjobs in the tracker
// export const ArmorPaintjobNamesWithDLC = {
//   [MinerWithAllClass.AllClass]: [
//     ...ArmorPaintjobNames[MinerWithAllClass.AllClass],
//     'Dawn of the Dread',
//     'MegaCorp',
//     'Roughneck',
//   ],
//   [MinerWithAllClass.Driller]: [
//     ...ArmorPaintjobNames[MinerWithAllClass.Driller],
//     'Dark Future',
//     'The Supporter',
//   ],
//   [MinerWithAllClass.Engineer]: [
//     ...ArmorPaintjobNames[MinerWithAllClass.Engineer],
//     'Dark Future',
//     'The Supporter',
//   ],
//   [MinerWithAllClass.Gunner]: [
//     ...ArmorPaintjobNames[MinerWithAllClass.Gunner],
//     'Dark Future',
//     'The Supporter',
//   ],
//   [MinerWithAllClass.Scout]: [
//     ...ArmorPaintjobNames[MinerWithAllClass.Scout],
//     'Dark Future',
//     'The Supporter',
//   ],
// } as const;

export const ArmorPaintjobIcons: {
  [K in Miner]: Record<ArmorPaintjobNames[K][number], ImgSrc>;
} = {
  [Miner.Driller]: {
    Chalkbuster: PaintjobIconSrcs.Driller.Chalkbuster,
    'Chocolate Reign': PaintjobIconSrcs.Driller.ChocolateReign,
    Colossus: PaintjobIconSrcs.Driller.Colossus,
    'Intricate Carver': PaintjobIconSrcs.Driller.IntricateCarver,
    'Mud Runner': PaintjobIconSrcs.Driller.MudRunner,
    'Muddy Path': PaintjobIconSrcs.Driller.MuddyPath,
    Splattered: PaintjobIconSrcs.Driller.DSplattered,
    // The following paintjobs are from season passes and old ones are now obtainable through
    // Lost Packs. They are named the same but are unique to the class so we add them to every class.
    // SEASON 1
    'Chipped Shadow': PaintjobIconSrcs.Driller.DChippedShadow,
    'Gritty Sandbox': PaintjobIconSrcs.Driller.DGrittySandbox,
    'Moss Crawler': PaintjobIconSrcs.Driller.DMossCrawler,
    'Speckled Predator': PaintjobIconSrcs.Driller.DSpeckledPredator,
    // SEASON 2
    'Boot Camp': PaintjobIconSrcs.AllClass.BootCamp,
    'Oxidized Copper': PaintjobIconSrcs.Driller.DOxidizedCopper,
    'Rusty Colossus': PaintjobIconSrcs.Driller.DRustyColossus,
    'Dark Neon': PaintjobIconSrcs.Driller.DDarkNeon,
    // SEASON 3
    Platinum: PaintjobIconSrcs.Driller.DPlatinum,
    'Umber Corrosion': PaintjobIconSrcs.Driller.DUmberCorrosion,
    Monochromatic: PaintjobIconSrcs.Driller.DMonochromatic,
    // FIXME: Add correct paintjobsrc when the wiki has a png for it
    // Verdigris: PaintjobIconSrcs.Driller.DPlatinum,
  },
  [Miner.Engineer]: {
    Dustrunner: PaintjobIconSrcs.Engineer.Dustrunner,
    'Ember Fury': PaintjobIconSrcs.Engineer.EmberFury,
    'Grunge Buster': PaintjobIconSrcs.Engineer.GrungeBuster,
    'Orange Geek': PaintjobIconSrcs.Engineer.OrangeGeek,
    Splattered: PaintjobIconSrcs.Engineer.ESplattered,
    "Teacher's Pet": PaintjobIconSrcs.Engineer.TeacherPet,
    'Top Dog': PaintjobIconSrcs.Engineer.TopDog,
    // SEASON 1
    'Chipped Shadow': PaintjobIconSrcs.Engineer.EChippedShadow,
    'Gritty Sandbox': PaintjobIconSrcs.Engineer.EGrittySandbox,
    'Moss Crawler': PaintjobIconSrcs.Engineer.EMossCrawler,
    'Speckled Predator': PaintjobIconSrcs.Engineer.ESpeckledPredator,
    // SEASON 2
    'Boot Camp': PaintjobIconSrcs.AllClass.BootCamp,
    'Oxidized Copper': PaintjobIconSrcs.Engineer.EOxidizedCopper,
    'Rusty Colossus': PaintjobIconSrcs.Engineer.ERustyColossus,
    'Dark Neon': PaintjobIconSrcs.Engineer.EDarkNeon,
    // SEASON 3
    Platinum: PaintjobIconSrcs.Engineer.EPlatinum,
    'Umber Corrosion': PaintjobIconSrcs.Engineer.EUmberCorrosion,
    Monochromatic: PaintjobIconSrcs.Engineer.EMonochromatic,
    // FIXME: Add correct paintjobsrc when the wiki has a png for it
    // Verdigris: PaintjobIconSrcs.Engineer.EPlatinum,
  },
  [Miner.Gunner]: {
    Copperbug: PaintjobIconSrcs.Gunner.Copperbug,
    'Desert Road': PaintjobIconSrcs.Gunner.DesertRoad,
    'Distant Field': PaintjobIconSrcs.Gunner.DistantField,
    'Lime Thunder': PaintjobIconSrcs.Gunner.LimeThunder,
    'Mercury Bulwark': PaintjobIconSrcs.Gunner.MercuryBulwark,
    Splattered: PaintjobIconSrcs.Gunner.GSplattered,
    'Topsoil Defender': PaintjobIconSrcs.Gunner.TopsoilDefender,
    // SEASON 1
    'Chipped Shadow': PaintjobIconSrcs.Gunner.GChippedShadow,
    'Gritty Sandbox': PaintjobIconSrcs.Gunner.GGrittySandbox,
    'Moss Crawler': PaintjobIconSrcs.Gunner.GMossCrawler,
    'Speckled Predator': PaintjobIconSrcs.Gunner.GSpeckledPredator,
    // SEASON 2
    'Boot Camp': PaintjobIconSrcs.AllClass.BootCamp,
    'Oxidized Copper': PaintjobIconSrcs.Gunner.GOxidizedCopper,
    'Rusty Colossus': PaintjobIconSrcs.Gunner.GRustyColossus,
    'Dark Neon': PaintjobIconSrcs.Gunner.GDarkNeon,
    // SEASON 3
    Platinum: PaintjobIconSrcs.Gunner.GPlatinum,
    'Umber Corrosion': PaintjobIconSrcs.Gunner.GUmberCorrosion,
    Monochromatic: PaintjobIconSrcs.Gunner.GMonochromatic,
    // FIXME: Add correct paintjobsrc when the wiki has a png for it
    // Verdigris: PaintjobIconSrcs.Gunner.GPlatinum,
  },
  [Miner.Scout]: {
    'Aqua Force': PaintjobIconSrcs.Scout.AquaForce,
    'Azure Draft': PaintjobIconSrcs.Scout.AzureDraft,
    'Dark Stripes': PaintjobIconSrcs.Scout.DarkStripes,
    'Dusty Winds': PaintjobIconSrcs.Scout.DustyWinds,
    'Frigid Tiger': PaintjobIconSrcs.Scout.FrigidTiger,
    Splattered: PaintjobIconSrcs.Scout.SSplattered,
    'Subtle Shadow': PaintjobIconSrcs.Scout.SubtleShadow,
    // SEASON 1
    'Chipped Shadow': PaintjobIconSrcs.Scout.SChippedShadow,
    'Gritty Sandbox': PaintjobIconSrcs.Scout.SGrittySandbox,
    'Moss Crawler': PaintjobIconSrcs.Scout.SMossCrawler,
    'Speckled Predator': PaintjobIconSrcs.Scout.SSpeckledPredator,
    // SEASON 2
    'Boot Camp': PaintjobIconSrcs.AllClass.BootCamp,
    'Oxidized Copper': PaintjobIconSrcs.Scout.SOxidizedCopper,
    'Rusty Colossus': PaintjobIconSrcs.Scout.SRustyColossus,
    'Dark Neon': PaintjobIconSrcs.Scout.SDarkNeon,
    // SEASON 3
    Platinum: PaintjobIconSrcs.Scout.SPlatinum,
    'Umber Corrosion': PaintjobIconSrcs.Scout.SUmberCorrosion,
    Monochromatic: PaintjobIconSrcs.Scout.SMonochromatic,
    // FIXME: Add correct paintjobsrc when the wiki has a png for it
    // Verdigris: PaintjobIconSrcs.Scout.SPlatinum,
  },
} as const;

export const CommonArmorPaintjobIcons: Record<
  typeof CommonArmorPaintjobNames[number],
  ImgSrc
> = {
  'Black Crag': PaintjobIconSrcs.AllClass.BlackCrag,
  'Toxic Defender': PaintjobIconSrcs.AllClass.ToxicDefender,
  'Regal Aegis': PaintjobIconSrcs.AllClass.RegalAegis,
  'Scale Brigade': PaintjobIconSrcs.AllClass.ScaleBrigade,
} as const;

type ItemSource =
  | 'Assignment'
  | 'Lost Pack'
  | 'Mastery'
  | 'DLC'
  | 'Performance Pass';

export type ArmorPaintjob = {
  name: typeof ArmorPaintjobNames[Miner][number];
  source: ItemSource;
  requiredLevel?: number;
  icon: ImgSrc;
  partID: string;
};

export type CommonArmorPaintjob = Omit<ArmorPaintjob, 'name'> & {
  name: typeof CommonArmorPaintjobNames[number];
};

// These are technically implemeneted as unlocking four _unique_ paint jobs,
// one per class. However, since they're all given via promotion assignments,
// all four are acquired at the same time. Therefore, we only save one of the
// GUIDs (the drillers's, specifically, because of alphabetical ordering).
export const CommonArmorPaintjobs: CommonArmorPaintjob[] = [
  {
    name: 'Toxic Defender',
    source: 'Assignment',
    requiredLevel: 40,
    icon: CommonArmorPaintjobIcons['Toxic Defender'],
    partID: '725D907BAD703B42BDB1ECF8F6088AB9',
  },
  {
    name: 'Regal Aegis',
    source: 'Assignment',
    requiredLevel: 60,
    icon: CommonArmorPaintjobIcons['Regal Aegis'],
    partID: '99CD0CDB80834B4AA993F1E2C4671D4B',
  },
  {
    name: 'Black Crag',
    source: 'Assignment',
    requiredLevel: 80,
    icon: CommonArmorPaintjobIcons['Black Crag'],
    partID: 'BA2540C7DD0B144182F3287B87E17E60',
  },
  {
    name: 'Scale Brigade',
    source: 'Assignment',
    requiredLevel: 100,
    icon: CommonArmorPaintjobIcons['Scale Brigade'],
    partID: '71901424329FB349A131DA3FE28D4E0E',
  },
];

export const ArmorPaintjobs: Record<Miner, ArmorPaintjob[]> = {
  [Miner.Driller]: [
    {
      name: 'Chocolate Reign',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[Miner.Driller]['Chocolate Reign'],
      partID: '0067BE4964B9994BBFCAC5E5C17B03B9',
    },
    {
      name: 'Chalkbuster',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[Miner.Driller]['Chalkbuster'],
      partID: '87C03FBC6A0015428436DE9826153138',
    },
    {
      name: 'Colossus',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Colossus'],
      partID: '7B7CFF339A6ED34FBAF957A441F1B0E2',
    },
    {
      name: 'Intricate Carver',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Intricate Carver'],
      partID: '9AFAF0D7BA0AC04794468ABA5A40DA19',
    },
    {
      name: 'Mud Runner',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Mud Runner'],
      partID: 'DEAE9D528AC86143885CBB46AD0609DB',
    },
    {
      name: 'Muddy Path',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Muddy Path'],
      partID: '69784395ADA2984B9BCDE55D5E841D35',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Splattered'],
      partID: '57FAB47289D73842A06CD8B1A23B7F20',
    },
    {
      name: 'Chipped Shadow',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Chipped Shadow'],
      partID: '6D4484D9C7735E458534D22736F1A102',
    },
    {
      name: 'Gritty Sandbox',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Gritty Sandbox'],
      partID: '1E6694482ACDF6429F4414FBB57DB425',
    },
    {
      name: 'Moss Crawler',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Moss Crawler'],
      partID: '06E632BD0EA81B4F816FCD6FDC6FBC00',
    },
    {
      name: 'Speckled Predator',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Speckled Predator'],
      partID: '4DA2F824D40C4745B9513D2C0F5408E3',
    },
    {
      name: 'Boot Camp',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Boot Camp'],
      partID: '76A055C246FD1A449BFB9BA01B6DECE6',
    },
    {
      name: 'Oxidized Copper',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Oxidized Copper'],
      partID: '2A14F0B7679C8E4092A22D5AE81958F1',
    },
    {
      name: 'Rusty Colossus',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Rusty Colossus'],
      partID: 'BEE7FE68C4B8774DA0F02397E1C93FED',
    },
    {
      name: 'Dark Neon',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Driller]['Dark Neon'],
      partID: '20AEB23D23D6DC4091559AD5FD39B65B',
    },
    {
      name: 'Platinum',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Driller]['Platinum'],
      partID: '991F0335FEAC364F89E229EBFDB134B5',
    },
    {
      name: 'Umber Corrosion',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Driller]['Umber Corrosion'],
      partID: 'A6CBF667B184EB41B0E70A68E74974C1',
    },
    {
      name: 'Monochromatic',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Driller]['Monochromatic'],
      partID: 'D60954FDC866C9439346C07333D35046',
    },
    // {
    //   name: 'Verdigris',
    //   source: 'Performance Pass',
    //   icon: ArmorPaintjobIcons[Miner.Driller]['Verdigris'],
    //   partID: '4DDAA57F8F95204CAB9EA459B788B9D4',
    // },
  ],
  [Miner.Engineer]: [
    {
      name: 'Orange Geek',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[Miner.Engineer]['Orange Geek'],
      partID: '84153686DBDAEE449C8F4377AC8DFCD9',
    },
    {
      name: 'Dustrunner',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[Miner.Engineer]['Dustrunner'],
      partID: 'A83BA78A1B3A544A8DC7DF05B3FC8107',
    },
    {
      name: 'Ember Fury',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Ember Fury'],
      partID: 'AEC426D6D7C9C94397F6CCD24158C205',
    },
    {
      name: 'Grunge Buster',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Grunge Buster'],
      partID: '9407F1F4A350F64D8F3983957453348F',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Splattered'],
      partID: 'D98820D55F70A04FA042A415B075F06B',
    },
    {
      name: "Teacher's Pet",
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]["Teacher's Pet"],
      partID: '8D63DDC8925C314DA793D3614FCECAF1',
    },
    {
      name: 'Top Dog',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Top Dog'],
      partID: '0B7F5F735F584745BBBCF5E215A050FA',
    },
    {
      name: 'Chipped Shadow',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Chipped Shadow'],
      partID: '6DA8284FC3DD8F4D8BBE44FBB7A542C1',
    },
    {
      name: 'Gritty Sandbox',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Gritty Sandbox'],
      partID: 'C14F47E385A9024F858AED9E799C1A64',
    },
    {
      name: 'Moss Crawler',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Moss Crawler'],
      partID: 'AF35AD61182F47459F6711ED3BA5B92B',
    },
    {
      name: 'Speckled Predator',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Speckled Predator'],
      partID: 'A0295288A7DA2543A3248338BE467B47',
    },
    {
      name: 'Boot Camp',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Boot Camp'],
      partID: '0FEE03065A88E04FABBD480E88866FC2',
    },
    {
      name: 'Oxidized Copper',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Oxidized Copper'],
      partID: 'A322EAA8764605429D9ECE4861BA74BE',
    },
    {
      name: 'Rusty Colossus',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Rusty Colossus'],
      partID: 'D4FF134E9A992E4383E5108419FAA24C',
    },
    {
      name: 'Dark Neon',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Dark Neon'],
      partID: '6416B08F69346446A2E2D5E26D72D50D',
    },
    {
      name: 'Platinum',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Platinum'],
      partID: '5F1A219C7E21D440942F23B2A0B9007D',
    },
    {
      name: 'Umber Corrosion',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Umber Corrosion'],
      partID: 'F75E0920F6110F47A4A5870796DD6F72',
    },
    {
      name: 'Monochromatic',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Engineer]['Monochromatic'],
      partID: '80C5FEE77494DA418B09A402E19D3AAB',
    },
    // {
    //   name: 'Verdigris',
    //   source: 'Performance Pass',
    //   icon: ArmorPaintjobIcons[Miner.Engineer]['Verdigris'],
    //   partID: '62205D9CE9733B468E5CD48ADA95B419',
    // },
  ],
  [Miner.Gunner]: [
    {
      name: 'Lime Thunder',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[Miner.Gunner]['Lime Thunder'],
      partID: '43E91AA86E539E4C8DA45FC4D3986A7A',
    },
    {
      name: 'Desert Road',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[Miner.Gunner]['Desert Road'],
      partID: 'FDA5B5BA82D505458DEDFC8955624C29',
    },
    {
      name: 'Copperbug',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Copperbug'],
      partID: '636D6F16A842EF4BB133752E2380335A',
    },
    {
      name: 'Distant Field',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Distant Field'],
      partID: 'A5C6CB1D3E00144D9D3C8D169C022E4B',
    },
    {
      name: 'Mercury Bulwark',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Mercury Bulwark'],
      partID: 'CCF825C68F5D394B879635CB6EA9E5AA',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Splattered'],
      partID: 'CC9ED1C95FBBC849801E72AD273429D1',
    },
    {
      name: 'Topsoil Defender',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Topsoil Defender'],
      partID: '32F6E884D938A242886AB3C2AD4D7DC3',
    },
    {
      name: 'Chipped Shadow',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Chipped Shadow'],
      partID: 'ACE0879FFF188340966A399E51036A7B',
    },
    {
      name: 'Gritty Sandbox',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Gritty Sandbox'],
      partID: '1827EC14F67CC94B8A4A4139E9E66632',
    },
    {
      name: 'Moss Crawler',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Moss Crawler'],
      partID: 'EB0C73AE6BFC27429401A8FB1F57D351',
    },
    {
      name: 'Speckled Predator',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Speckled Predator'],
      partID: 'DD20854F867A3A498877CC70DA47AEAC',
    },
    {
      name: 'Boot Camp',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Boot Camp'],
      partID: 'E4867400CCF42F43B46162D454CB7CBF',
    },
    {
      name: 'Oxidized Copper',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Oxidized Copper'],
      partID: '1941FE0DA7CCB94389B96424F31B488F',
    },
    {
      name: 'Rusty Colossus',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Rusty Colossus'],
      partID: '34209A6C6611824E82739737BE583B2D',
    },
    {
      name: 'Dark Neon',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Dark Neon'],
      partID: 'CD8312BB3DA39946B08106FC4B0E0851',
    },
    {
      name: 'Platinum',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Platinum'],
      partID: '47166F69713F2345A80516CA89DBD488',
    },
    {
      name: 'Umber Corrosion',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Umber Corrosion'],
      partID: 'B24E61B38047184185E9151C95C902B9',
    },
    {
      name: 'Monochromatic',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Gunner]['Monochromatic'],
      partID: '56CE32F232D4AB4A9DB4B72906FF7A4D',
    },
    // {
    //   name: 'Verdigris',
    //   source: 'Performance Pass',
    //   icon: ArmorPaintjobIcons[Miner.Gunner]['Verdigris'],
    //   partID: '6B19D4CAB6F5294480DEE30835D9E1AF',
    // },
  ],
  [Miner.Scout]: [
    {
      name: 'Dusty Winds',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[Miner.Scout]['Dusty Winds'],
      partID: '496E73679E73444CB665C03EB9A5D1D3',
    },
    {
      name: 'Azure Draft',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[Miner.Scout]['Azure Draft'],
      partID: 'D10335DC017E15489538A293410DD051',
    },
    {
      name: 'Aqua Force',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Aqua Force'],
      partID: 'DB0DDEAF4409274A8D41FB1054226986',
    },
    {
      name: 'Dark Stripes',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Dark Stripes'],
      partID: 'C06B545F56FF8842873DFD5C89E2F5AD',
    },
    {
      name: 'Frigid Tiger',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Frigid Tiger'],
      partID: '8B15FB3727AA7745AFEC119D0F9A4B47',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Splattered'],
      partID: '34415C4EE679BF418365F807398A8405',
    },
    {
      name: 'Subtle Shadow',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Subtle Shadow'],
      partID: 'C6A248B74E7FB64792BD5E393745C6FC',
    },
    {
      name: 'Chipped Shadow',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Chipped Shadow'],
      partID: '114F31626C3C8E4BB942C3CE5224BD48',
    },
    {
      name: 'Gritty Sandbox',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Gritty Sandbox'],
      partID: 'A93353C34966F74EBBE8661DD0CBACAC',
    },
    {
      name: 'Moss Crawler',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Moss Crawler'],
      partID: 'AC7859D4EADE724B86F9F3F5822D589C',
    },
    {
      name: 'Speckled Predator',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Speckled Predator'],
      partID: '9ADDF74402712E4886CA083DE74A68DA',
    },
    {
      name: 'Boot Camp',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Boot Camp'],
      partID: '58B96806B23BEA4FB451A00089A7AB04',
    },
    {
      name: 'Oxidized Copper',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Oxidized Copper'],
      partID: '0010DF5D741CD34F99173679895C9F53',
    },
    {
      name: 'Rusty Colossus',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Rusty Colossus'],
      partID: 'ABFDA3495970A44C839BDC25C6116BA2',
    },
    {
      name: 'Dark Neon',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[Miner.Scout]['Dark Neon'],
      partID: 'A02B17E7121A7845AE3D743C38F3CD3B',
    },
    {
      name: 'Platinum',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Scout]['Platinum'],
      partID: '02F3C2B10143E9449C3A70DA42FA0543',
    },
    {
      name: 'Umber Corrosion',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Scout]['Umber Corrosion'],
      partID: '305AB8CF5122BD46A57D3E68BEBB476B',
    },
    {
      name: 'Monochromatic',
      source: 'Performance Pass',
      icon: ArmorPaintjobIcons[Miner.Scout]['Monochromatic'],
      partID: '39CBB611A0A6CD47B3753AD0228FEC64',
    },
    // {
    //   name: 'Verdigris',
    //   source: 'Performance Pass',
    //   icon: ArmorPaintjobIcons[Miner.Scout]['Verdigris'],
    //   partID: 'AD73D5D2BAD5644EB7B5E5CC9DDFAA0B',
    // },
  ],
};
