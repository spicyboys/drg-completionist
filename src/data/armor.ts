import PaintjobIconSrcs from 'assets/armorPaintjobs';
import { MinerWithAllClass } from 'utils/miner';

// All-Class Paintjobs are identical with no class-specific variation.
// Default and DLC Paintjobs excluded for now.
export const ArmorPaintjobNames = {
  [MinerWithAllClass.AllClass]: [
    'Black Crag',
    'Regal Aegis',
    'Scale Brigade',
    'Toxic Defender',
  ],
  [MinerWithAllClass.Driller]: [
    //'Default Paintjob',
    'Chalkbuster',
    'Chocolate Reign',
    'Colossus',
    'Intricate Carver',
    'Mud Runner',
    'Muddy Path',
    'Splattered',
  ],
  [MinerWithAllClass.Engineer]: [
    //'Default Paintjob',
    'Dustrunner',
    'Ember Fury',
    'Grunge Buster',
    'Orange Geek',
    'Splattered',
    "Teacher's Pet",
    'Top Dog',
  ],
  [MinerWithAllClass.Gunner]: [
    //'Default Paintjob',
    'Copperbug',
    'Desert Road',
    'Distant Field',
    'Lime Thunder',
    'Mercury Bulwark',
    'Splattered',
    'Topsoil Defender',
  ],
  [MinerWithAllClass.Scout]: [
    //'Default Paintjob',
    'Aqua Force',
    'Azure Draft',
    'Dark Stripes',
    'Dusty Winds',
    'Frigid Tiger',
    'Splattered',
    'Subtle Shadow',
  ],
} as const;

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

export type ArmorPaintjobNames = {
  [K in MinerWithAllClass]: typeof ArmorPaintjobNames[K];
};

export const ArmorPaintjobIcons: {
  [K in MinerWithAllClass]: Record<ArmorPaintjobNames[K][number], ImgSrc>;
} = {
  [MinerWithAllClass.AllClass]: {
    'Black Crag': PaintjobIconSrcs.AllClass.BlackCrag,
    'Toxic Defender': PaintjobIconSrcs.AllClass.ToxicDefender,
    'Regal Aegis': PaintjobIconSrcs.AllClass.RegalAegis,
    // TODO: Fix Scale Brigade's icon SRC below once script is run again.
    'Scale Brigade': PaintjobIconSrcs.AllClass.RegalAegis,
  },
  [MinerWithAllClass.Driller]: {
    Chalkbuster: PaintjobIconSrcs.Driller.Chalkbuster,
    'Chocolate Reign': PaintjobIconSrcs.Driller.ChocolateReign,
    Colossus: PaintjobIconSrcs.Driller.Colossus,
    'Intricate Carver': PaintjobIconSrcs.Driller.IntricateCarver,
    'Mud Runner': PaintjobIconSrcs.Driller.MudRunner,
    'Muddy Path': PaintjobIconSrcs.Driller.MuddyPath,
    Splattered: PaintjobIconSrcs.Driller.DSplattered,
  },
  [MinerWithAllClass.Engineer]: {
    Dustrunner: PaintjobIconSrcs.Engineer.Dustrunner,
    'Ember Fury': PaintjobIconSrcs.Engineer.EmberFury,
    'Grunge Buster': PaintjobIconSrcs.Engineer.GrungeBuster,
    'Orange Geek': PaintjobIconSrcs.Engineer.OrangeGeek,
    Splattered: PaintjobIconSrcs.Engineer.ESplattered,
    "Teacher's Pet": PaintjobIconSrcs.Engineer.TeacherPet,
    'Top Dog': PaintjobIconSrcs.Engineer.TopDog,
  },
  [MinerWithAllClass.Gunner]: {
    Copperbug: PaintjobIconSrcs.Gunner.Copperbug,
    'Desert Road': PaintjobIconSrcs.Gunner.DesertRoad,
    'Distant Field': PaintjobIconSrcs.Gunner.DistantField,
    'Lime Thunder': PaintjobIconSrcs.Gunner.LimeThunder,
    'Mercury Bulwark': PaintjobIconSrcs.Gunner.MercuryBulwark,
    Splattered: PaintjobIconSrcs.Gunner.GSplattered,
    'Topsoil Defender': PaintjobIconSrcs.Gunner.TopsoilDefender,
  },
  [MinerWithAllClass.Scout]: {
    'Aqua Force': PaintjobIconSrcs.Scout.AquaForce,
    'Azure Draft': PaintjobIconSrcs.Scout.AzureDraft,
    'Dark Stripes': PaintjobIconSrcs.Scout.DarkStripes,
    'Dusty Winds': PaintjobIconSrcs.Scout.DustyWinds,
    'Frigid Tiger': PaintjobIconSrcs.Scout.FrigidTiger,
    Splattered: PaintjobIconSrcs.Scout.SSplattered,
    'Subtle Shadow': PaintjobIconSrcs.Scout.SubtleShadow,
  },
} as const;

type ItemSource = 'Assignment' | 'Lost Pack' | 'Mastery' | 'DLC';

export type ArmorPaintjob = {
  name: typeof ArmorPaintjobNames[MinerWithAllClass][number];
  source: ItemSource;
  requiredLevel?: number;
  icon: ImgSrc;
  partID: string;
};

export const ArmorPaintjobs: Record<MinerWithAllClass, ArmorPaintjob[]> = {
  [MinerWithAllClass.AllClass]: [
    {
      name: 'Toxic Defender',
      source: 'Assignment',
      requiredLevel: 40,
      icon: ArmorPaintjobIcons[MinerWithAllClass.AllClass]['Toxic Defender'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Regal Aegis',
      source: 'Assignment',
      requiredLevel: 60,
      icon: ArmorPaintjobIcons[MinerWithAllClass.AllClass]['Regal Aegis'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Black Crag',
      source: 'Assignment',
      requiredLevel: 80,
      icon: ArmorPaintjobIcons[MinerWithAllClass.AllClass]['Black Crag'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Scale Brigade',
      source: 'Assignment',
      requiredLevel: 100,
      icon: ArmorPaintjobIcons[MinerWithAllClass.AllClass]['Scale Brigade'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
  ],
  [MinerWithAllClass.Driller]: [
    {
      name: 'Chocolate Reign',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Chocolate Reign'],
      partID: '0067BE4964B9994BBFCAC5E5C17B03B9',
    },
    {
      name: 'Chalkbuster',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Chalkbuster'],
      partID: '87C03FBC6A0015428436DE9826153138',
    },
    {
      name: 'Colossus',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Colossus'],
      partID: '7B7CFF339A6ED34FBAF957A441F1B0E2',
    },
    {
      name: 'Intricate Carver',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Intricate Carver'],
      partID: '9AFAF0D7BA0AC04794468ABA5A40DA19',
    },
    {
      name: 'Mud Runner',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Mud Runner'],
      partID: 'DEAE9D528AC86143885CBB46AD0609DB',
    },
    {
      name: 'Muddy Path',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Muddy Path'],
      partID: '69784395ADA2984B9BCDE55D5E841D35',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Splattered'],
      partID: '57FAB47289D73842A06CD8B1A23B7F20',
    },
  ],
  [MinerWithAllClass.Engineer]: [
    {
      name: 'Orange Geek',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Orange Geek'],
      partID: '84153686DBDAEE449C8F4377AC8DFCD9',
    },
    {
      name: 'Dustrunner',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Dustrunner'],
      partID: 'A83BA78A1B3A544A8DC7DF05B3FC8107',
    },
    {
      name: 'Ember Fury',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Ember Fury'],
      partID: 'AEC426D6D7C9C94397F6CCD24158C205',
    },
    {
      name: 'Grunge Buster',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Grunge Buster'],
      partID: '9407F1F4A350F64D8F3983957453348F',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Splattered'],
      partID: 'D98820D55F70A04FA042A415B075F06B',
    },
    {
      name: "Teacher's Pet",
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]["Teacher's Pet"],
      partID: '8D63DDC8925C314DA793D3614FCECAF1',
    },
    {
      name: 'Top Dog',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Top Dog'],
      partID: '0B7F5F735F584745BBBCF5E215A050FA',
    },
  ],
  [MinerWithAllClass.Gunner]: [
    {
      name: 'Lime Thunder',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Lime Thunder'],
      partID: '43E91AA86E539E4C8DA45FC4D3986A7A',
    },
    {
      name: 'Desert Road',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Desert Road'],
      partID: 'FDA5B5BA82D505458DEDFC8955624C29',
    },
    {
      name: 'Copperbug',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Copperbug'],
      partID: '636D6F16A842EF4BB133752E2380335A',
    },
    {
      name: 'Distant Field',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Distant Field'],
      partID: 'A5C6CB1D3E00144D9D3C8D169C022E4B',
    },
    {
      name: 'Mercury Bulwark',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Mercury Bulwark'],
      partID: 'CCF825C68F5D394B879635CB6EA9E5AA',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Splattered'],
      partID: 'CC9ED1C95FBBC849801E72AD273429D1',
    },
    {
      name: 'Topsoil Defender',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Topsoil Defender'],
      partID: '32F6E884D938A242886AB3C2AD4D7DC3',
    },
  ],
  [MinerWithAllClass.Scout]: [
    {
      name: 'Dusty Winds',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Dusty Winds'],
      partID: '496E73679E73444CB665C03EB9A5D1D3',
    },
    {
      name: 'Azure Draft',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Azure Draft'],
      partID: 'D10335DC017E15489538A293410DD051',
    },
    {
      name: 'Aqua Force',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Aqua Force'],
      partID: 'DB0DDEAF4409274A8D41FB1054226986',
    },
    {
      name: 'Dark Stripes',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Dark Stripes'],
      partID: 'C06B545F56FF8842873DFD5C89E2F5AD',
    },
    {
      name: 'Frigid Tiger',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Frigid Tiger'],
      partID: '8B15FB3727AA7745AFEC119D0F9A4B47',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Splattered'],
      partID: '34415C4EE679BF418365F807398A8405',
    },
    {
      name: 'Subtle Shadow',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Subtle Shadow'],
      partID: 'C6A248B74E7FB64792BD5E393745C6FC',
    },
  ],
};
