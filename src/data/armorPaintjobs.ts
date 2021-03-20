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
      icon: ArmorPaintjobIcons['All-Class']['Toxic Defender'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Regal Aegis',
      source: 'Assignment',
      requiredLevel: 60,
      icon: ArmorPaintjobIcons['All-Class']['Regal Aegis'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Black Crag',
      source: 'Assignment',
      requiredLevel: 80,
      icon: ArmorPaintjobIcons['All-Class']['Black Crag'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Scale Brigade',
      source: 'Assignment',
      requiredLevel: 100,
      icon: ArmorPaintjobIcons['All-Class']['Scale Brigade'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
  ],
  [MinerWithAllClass.Driller]: [
    {
      name: 'Chocolate Reign',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Chocolate Reign'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Chalkbuster',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Chalkbuster'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Colossus',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Colossus'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Intricate Carver',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Intricate Carver'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Mud Runner',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Mud Runner'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Muddy Path',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Muddy Path'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Driller]['Splattered'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
  ],
  [MinerWithAllClass.Engineer]: [
    {
      name: 'Orange Geek',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Orange Geek'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Dustrunner',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Dustrunner'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Ember Fury',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Ember Fury'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Grunge Buster',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Grunge Buster'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Splattered'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: "Teacher's Pet",
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]["Teacher's Pet"],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Top Dog',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Engineer]['Top Dog'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
  ],
  [MinerWithAllClass.Gunner]: [
    {
      name: 'Lime Thunder',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Lime Thunder'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Desert Road',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Desert Road'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Copperbug',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Copperbug'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Distant Field',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Distant Field'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Mercury Bulwark',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Mercury Bulwark'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Splattered'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Topsoil Defender',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Gunner]['Topsoil Defender'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
  ],
  [MinerWithAllClass.Scout]: [
    {
      name: 'Dusty Winds',
      source: 'Mastery',
      requiredLevel: 4,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Dusty Winds'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Azure Draft',
      source: 'Mastery',
      requiredLevel: 7,
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Azure Draft'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Aqua Force',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Aqua Force'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Dark Stripes',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Dark Stripes'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Frigid Tiger',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Frigid Tiger'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Splattered',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Splattered'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
    {
      name: 'Subtle Shadow',
      source: 'Lost Pack',
      icon: ArmorPaintjobIcons[MinerWithAllClass.Scout]['Subtle Shadow'],
      partID: 'GUIDGUIDGUIDGUIDGUIDGUIDGUIDGUID',
    },
  ],
};
