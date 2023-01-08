import * as PaintjobIconSrcs from 'assets/weaponPaintjobs';

// These are weapon paintjobs that are unlocked for each weapon
// individually
export const UniqueWeaponPaintjobNames = [
  'First Stripe',
  'Deepcore',
  'The Company Special',
] as const;

// These are weapon paintjobs that acquired through cosmetic
// matrix cores and are unlocked for every weapon of a class
// at once.
export const MatrixWeaponPaintjobNames = [
  'Beyond the Circuit',
  'Dark Descent',
  'Desert Ranger',
  'Digital Danger',
  'Ghostly Pale',
  'Jungle Raid',
  'Metallic Vintage',
  'Mint Assault',
  'Primal Blood',
  'Tool of Destruction',
  'Trusty Rusty',
  'Warmonger',
  // Season 1
  'Copper Patinate',
  'Deep Sea Defender',
  'Moss Crawler',
  'Scratched Metal',
  // Season 2
  'Bootcamp',
  'Fiery',
  'Predator',
  'Salt Crystal',
] as const;

// These are weapon paintjobs that are not acquired through cosmetic
// matrix cores but still unlocked for every weapon of a class at once.
export const CommonWeaponPaintjobNames = [
  // Exclude DLC paintjobs for now until we have a switch to enable DLC content.
  // 'Dark Future',
  // 'Biohazard',
  // 'Dawn of the Dread',
  // 'MegaCorp',
  // 'Rival Tech',
  // 'Robot Rebellion',
  // 'Roughneck',
  // 'The Supporter',

  // Season 3
  'Acid Wash',
  'Golden Mauve',
  'Military',
  'Sleek',
]

export type MatrixWeaponPaintjob = {
  name: typeof MatrixWeaponPaintjobNames[number];
  icon: ImgSrc;
  id: string;
}

export type UniqueWeaponPaintjob = Omit<MatrixWeaponPaintjob, 'name'> & {
  name: typeof UniqueWeaponPaintjobNames[number];
};

export type CommonWeaponPaintjob = Omit<MatrixWeaponPaintjob, 'name'> & {
  name: typeof CommonWeaponPaintjobNames[number];
}

export const MatrixWeaponPaintjobs: MatrixWeaponPaintjob[] = [
  {
    name: 'Beyond the Circuit',
    icon: PaintjobIconSrcs.BeyondTheCircuit,
    id: 'D826AB19A2BEE94384AF511D9D7FE1FD',
  },
  {
    name: 'Dark Descent',
    icon: PaintjobIconSrcs.DarkDescent,
    id: 'EABD44801F5E934A8E69BE4B0EED7C35',
  },
  {
    name: 'Desert Ranger',
    icon: PaintjobIconSrcs.DesertRanger,
    id: 'BA5793B566282C40A2FB7778C799A96C',
  },
  {
    name: 'Digital Danger',
    icon: PaintjobIconSrcs.DigitalDanger,
    id: '7466A7F7766C18459E6BA5C9BEEFF312',
  },
  {
    name: 'Ghostly Pale',
    icon: PaintjobIconSrcs.GhostlyPale,
    id: 'A17A38BA612F4A498F92BE6703328208',
  },
  {
    name: 'Jungle Raid',
    icon: PaintjobIconSrcs.JungleRaid,
    id: '1957D372B4B35C4D954C51A780C473E5',
  },
  {
    name: 'Metallic Vintage',
    icon: PaintjobIconSrcs.MetallicVintage,
    id: 'E88044A4EC7D1241A8ACFECB00CD8E4F',
  },
  {
    name: 'Mint Assault',
    icon: PaintjobIconSrcs.MintAssault,
    id: '51B09F80D624FB4BB3D205189686B06E',
  },
  {
    name: 'Primal Blood',
    icon: PaintjobIconSrcs.PrimalBlood,
    id: '6FD2A372F8B4AA4DAB32181383E9784B',
  },
  {
    name: 'Tool of Destruction',
    icon: PaintjobIconSrcs.ToolOfDestruction,
    id: '0E4D7888ACE8774493ABFE9791AA4401',
  },
  {
    name: 'Trusty Rusty',
    icon: PaintjobIconSrcs.TrustyRusty,
    id: '3396FB4FAECC3048B0B789D09399B690',
  },
  {
    name: 'Warmonger',
    icon: PaintjobIconSrcs.Warmonger,
    id: '26B8E6D501A45E46977CAD539A6C94E7',
  },
  {
    name: 'Copper Patinate',
    icon: PaintjobIconSrcs.CopperPatinate,
    id: '4A1FC304A8E3DD4E943E7133DCBE8BB4',
  },
  {
    name: 'Deep Sea Defender',
    icon: PaintjobIconSrcs.DeepSeaDefender,
    id: '13A9CBE045098D4B8105D0D5AFE380EC',
  },
  {
    name: 'Moss Crawler',
    icon: PaintjobIconSrcs.MossCrawler,
    id: 'CEA1CFF97FBEC24B8E9E08AC756CE034',
  },
  {
    name: 'Scratched Metal',
    icon: PaintjobIconSrcs.ScratchedMetal,
    id: 'AB17B146AA0D0348A19206EFB2188835',
  },
  {
    name: 'Bootcamp',
    icon: PaintjobIconSrcs.BootCamp,
    id: 'A134866D6E29CD4C8AA37704DDBDC3A7',
  },
  {
    name: 'Fiery',
    icon: PaintjobIconSrcs.Fiery,
    id: 'A6173B15A79B5149AB59124FBCCA31EE',
  },
  {
    name: 'Predator',
    icon: PaintjobIconSrcs.Predator,
    id: 'F5E185065AD96C478E32B3644C87B0B9',
  },
  {
    name: 'Salt Crystal',
    icon: PaintjobIconSrcs.SaltCrystal,
    id: '5902CD23C3DA1B4CBB5FF01057F15E37',
  },
]

export const CommonWeaponPaintjobs: CommonWeaponPaintjob[] = [
  {
    name: 'Acid Wash',
    icon: PaintjobIconSrcs.AcidWash,
    id: 'A5C3686A9799F5468C5B06D949ADC008'
  },
  {
    name: 'Golden Mauve',
    icon: PaintjobIconSrcs.GoldenMauve,
    id: 'D61ADA8A49A2634093621B772D845E3A'
  },
  {
    name: 'Military',
    icon: PaintjobIconSrcs.Military,
    id: '07050D026A127B4B9C614D5812BD0563'
  },
  {
    name: 'Sleek',
    icon: PaintjobIconSrcs.Sleek,
    id: '68BBAA8468499C4AB03DDFEF6771E3E1'
  },
]

export const UniqueWeaponPaintjobs: UniqueWeaponPaintjob[] = [
  {
    name: 'First Stripe',
    icon: PaintjobIconSrcs.FirstStripe,
    id: '08D558F65F0C5945BAA4F9649A56589C'
  },
  {
    name: 'Deepcore',
    icon: PaintjobIconSrcs.Deepcore,
    id: 'A5854A679A019D4DAA0178EE23FE4E9E'
  },
  {
    name: 'The Company Special',
    icon: PaintjobIconSrcs.TheCompanySpecial,
    id: 'BF510980B965B540918AA0A29D8E052B'
  },
]
