import * as PaintjobIconSrcs from 'assets/weaponPaintjobs';
import { Miner } from './miner';

// These are weapon paintjobs that are unlocked for each weapon
// individually
export const UniqueWeaponPaintjobNames = [
  // These are obtainable through weapon mod upgrades and not via
  // matrix cores or lost packs. Since we do not want to track buyable
  // paintjobs, we do not track these.
  // 'First Stripe',
  // 'Deepcore',
  // 'The Company Special',
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
];

type WeaponPaintjob = {
  name: string;
  icon: ImgSrc;
  id: string;
};

export type MatrixWeaponPaintjob = Omit<WeaponPaintjob, 'name'> & {
  name: typeof MatrixWeaponPaintjobNames[number];
  matrixCoreIds: Record<Miner, string>;
};

export type UniqueWeaponPaintjob = Omit<WeaponPaintjob, 'name'> & {
  name: typeof UniqueWeaponPaintjobNames[number];
};

export type CommonWeaponPaintjob = Omit<WeaponPaintjob, 'name'> & {
  name: typeof CommonWeaponPaintjobNames[number];
};

export const MatrixWeaponPaintjobs: MatrixWeaponPaintjob[] = [
  {
    name: 'Beyond the Circuit',
    icon: PaintjobIconSrcs.BeyondTheCircuit,
    id: 'D826AB19A2BEE94384AF511D9D7FE1FD',
    matrixCoreIds: {
      [Miner.Driller]: '78FD630A6E171948AE7971FA6E2D8938',
      [Miner.Engineer]: '6D10449F24DD664B9A74BBC5F27ACB45',
      [Miner.Gunner]: '18A46CD106DB914EA97E83969CB2F5AA',
      [Miner.Scout]: '00A771FF5D0E0A4A99EA88742216979F',
    },
  },
  {
    name: 'Dark Descent',
    icon: PaintjobIconSrcs.DarkDescent,
    id: 'EABD44801F5E934A8E69BE4B0EED7C35',
    matrixCoreIds: {
      [Miner.Driller]: '271E933D027AC143B4A66DEAEF7751F2',
      [Miner.Engineer]: '97BC96DADBC9454086FA5AD869A4B267',
      [Miner.Gunner]: '40EDCF0270C14D49A6D9A2ABBFB9C72B',
      [Miner.Scout]: '423651EE4BD218478DAAC0E6EDA454A4',
    },
  },
  {
    name: 'Desert Ranger',
    icon: PaintjobIconSrcs.DesertRanger,
    id: 'BA5793B566282C40A2FB7778C799A96C',
    matrixCoreIds: {
      [Miner.Driller]: 'E90A88FF1C5F21469B05C127E91E742E',
      [Miner.Engineer]: '155AF38BBE9B5845952E516057FB58A7',
      [Miner.Gunner]: '7C24E9B36958914A988B44228B28947A',
      [Miner.Scout]: '30F5B84AB6C163469A817A7FB24C04D9',
    },
  },
  {
    name: 'Digital Danger',
    icon: PaintjobIconSrcs.DigitalDanger,
    id: '7466A7F7766C18459E6BA5C9BEEFF312',
    matrixCoreIds: {
      [Miner.Driller]: 'DD099E18A977854B8D598DC6F571CFD1',
      [Miner.Engineer]: 'AD6637CBDC4129448AD5EAD550DBD821',
      [Miner.Gunner]: 'CB16F211D171CB4AAF0BCA6654E90F34',
      [Miner.Scout]: 'E3757D9719D1D54F9812D68760FEE738',
    },
  },
  {
    name: 'Ghostly Pale',
    icon: PaintjobIconSrcs.GhostlyPale,
    id: 'A17A38BA612F4A498F92BE6703328208',
    matrixCoreIds: {
      [Miner.Driller]: '7C4A8041FAB53744835782DCBC680BF3',
      [Miner.Engineer]: '8500B75544EEAC41AD48486F36662352',
      [Miner.Gunner]: 'AA29C52DC8E3C144A64AF5085354D95D',
      [Miner.Scout]: 'AEB31F34C467AB47B1A3171D01204280',
    },
  },
  {
    name: 'Jungle Raid',
    icon: PaintjobIconSrcs.JungleRaid,
    id: '1957D372B4B35C4D954C51A780C473E5',
    matrixCoreIds: {
      [Miner.Driller]: 'F1AF1C0FFA2F0E41BBABE5C3E1FA2FF5',
      [Miner.Engineer]: '1918F6DC5B8304408A8529DFC1082826',
      [Miner.Gunner]: '2C96A7F1A58DD44084C30EC13E927ACF',
      [Miner.Scout]: '03DD947E247E31498A465DE4E1C5DEFD',
    },
  },
  {
    name: 'Metallic Vintage',
    icon: PaintjobIconSrcs.MetallicVintage,
    id: 'E88044A4EC7D1241A8ACFECB00CD8E4F',
    matrixCoreIds: {
      [Miner.Driller]: '54FA656BB5C13045B014FC3FA6B44F2B',
      [Miner.Engineer]: '33E8BCA42DD7414FA117A3BA91E9033B',
      [Miner.Gunner]: '00433EDBCE2C7C429E73C083F5E343FB',
      [Miner.Scout]: '69B282971E7C7C4AAC5459A866DDA508',
    },
  },
  {
    name: 'Mint Assault',
    icon: PaintjobIconSrcs.MintAssault,
    id: '51B09F80D624FB4BB3D205189686B06E',
    matrixCoreIds: {
      [Miner.Driller]: '268CD890C6FBFA4BA45276EA2F765B43',
      [Miner.Engineer]: 'D73DF2942A28AC4487C942ADA0B0E3C9',
      [Miner.Gunner]: '898F556E7FB0E24A82BAE1B632B63FDC',
      [Miner.Scout]: '0AD58675EBBE9D4D9F74FDA8F01A0AB3',
    },
  },
  {
    name: 'Primal Blood',
    icon: PaintjobIconSrcs.PrimalBlood,
    id: '6FD2A372F8B4AA4DAB32181383E9784B',
    matrixCoreIds: {
      [Miner.Driller]: '88582CAC3BAE11468101A90365A9D408',
      [Miner.Engineer]: '2E3D76F816A102458CB7ECE40A3EE379',
      [Miner.Gunner]: 'A61ED1A342B6CD46904FB0E72B14A2A4',
      [Miner.Scout]: '837261BE1333C145B4EB5A516B2051A8',
    },
  },
  {
    name: 'Tool of Destruction',
    icon: PaintjobIconSrcs.ToolOfDestruction,
    id: '0E4D7888ACE8774493ABFE9791AA4401',
    matrixCoreIds: {
      [Miner.Driller]: '448A069E1A2E6146A4D7A128BFB95BDA',
      [Miner.Engineer]: '0FD44B1BCA3D5247932CB6E71F3E96EF',
      [Miner.Gunner]: '2CA9299DB4E7B54987FED5DA8339C5DA',
      [Miner.Scout]: 'B6005D67F948404BB4EC5D8E65EDC5D9',
    },
  },
  {
    name: 'Trusty Rusty',
    icon: PaintjobIconSrcs.TrustyRusty,
    id: '3396FB4FAECC3048B0B789D09399B690',
    matrixCoreIds: {
      [Miner.Driller]: 'C2946BCF130E67458BFA362975CA5041',
      [Miner.Engineer]: '2A80200C16DB0A4E875411B6DD06A648',
      [Miner.Gunner]: '7EDAE191C63AF54E94BC93446C855E73',
      [Miner.Scout]: '78125D11F52EFC4494AFA3F4CEEE8268',
    },
  },
  {
    name: 'Warmonger',
    icon: PaintjobIconSrcs.Warmonger,
    id: '26B8E6D501A45E46977CAD539A6C94E7',
    matrixCoreIds: {
      [Miner.Driller]: 'E41681A6A2EA8444B2E75BDF8970DADA',
      [Miner.Engineer]: 'D15B2C0C2F865C4A8F5EB354CB11C78F',
      [Miner.Gunner]: 'E880C5F6E793A44FBAC97FAD188ACF5F',
      [Miner.Scout]: 'EC3273875A4E724482CF62D7D8EECF16',
    },
  },
  {
    name: 'Copper Patinate',
    icon: PaintjobIconSrcs.CopperPatinate,
    id: '4A1FC304A8E3DD4E943E7133DCBE8BB4',
    matrixCoreIds: {
      [Miner.Driller]: '233EEADDBE69824C95A54F8E6EE5890A',
      [Miner.Engineer]: '360FB03A7A269544BB9EBFC8245989AE',
      [Miner.Gunner]: '83B646875E92304DA952A3206C110F3E',
      [Miner.Scout]: '6779F384A21673499A9002637ECBAA46',
    },
  },
  {
    name: 'Deep Sea Defender',
    icon: PaintjobIconSrcs.DeepSeaDefender,
    id: '13A9CBE045098D4B8105D0D5AFE380EC',
    matrixCoreIds: {
      [Miner.Driller]: 'F6F74FDF6196354FAC5598C73A538243',
      [Miner.Engineer]: '3654386F8EBFAB469320BC7736F90576',
      [Miner.Gunner]: '1B0C2AFDE87EE248BDB0C514885CEB3D',
      [Miner.Scout]: '00B80CE48D60D44DA2FC4355DE6EE779',
    },
  },
  {
    name: 'Moss Crawler',
    icon: PaintjobIconSrcs.MossCrawler,
    id: 'CEA1CFF97FBEC24B8E9E08AC756CE034',
    matrixCoreIds: {
      [Miner.Driller]: '85C6761A23941B4C99D057BBC4B782C4',
      [Miner.Engineer]: '0CFEEF98743FB54BA3117F779EFE8742',
      [Miner.Gunner]: '979BA7B07E64FA4E9AC70FE9D60A91E6',
      [Miner.Scout]: '61A8CB22946F2944A27E63F90CE9DF10',
    },
  },
  {
    name: 'Scratched Metal',
    icon: PaintjobIconSrcs.ScratchedMetal,
    id: 'AB17B146AA0D0348A19206EFB2188835',
    matrixCoreIds: {
      [Miner.Driller]: 'CB9A7CA26E4E7E49A9187C27550AE4FB',
      [Miner.Engineer]: 'D0BC5173DA67984F9351F108D741ABAA',
      [Miner.Gunner]: '37882DD95D76D743A6E9A8C5E003FD74',
      [Miner.Scout]: '8A1E2E7687BCC34CA7549385E498D8B6',
    },
  },
  {
    name: 'Bootcamp',
    icon: PaintjobIconSrcs.BootCamp,
    id: 'A134866D6E29CD4C8AA37704DDBDC3A7',
    matrixCoreIds: {
      [Miner.Driller]: '7350B6B3D4F50E47B88506912DF3794E',
      [Miner.Engineer]: 'B09D3A6D5BB10641AA885CE8925023E1',
      [Miner.Gunner]: 'BEBA3366595205468FEDFFEA86B5422D',
      [Miner.Scout]: '842C503279719F40871550F1097D152E',
    },
  },
  {
    name: 'Fiery',
    icon: PaintjobIconSrcs.Fiery,
    id: 'A6173B15A79B5149AB59124FBCCA31EE',
    matrixCoreIds: {
      [Miner.Driller]: '18FF5E85CE0A8348A5E94BDC8949E395',
      [Miner.Engineer]: '1C343792D42DDC42B09038A008392E19',
      [Miner.Gunner]: '2E1C8B6347269F419B5B69667BE0C881',
      [Miner.Scout]: '95ACAE4DA8FD544AB3C8CB4955D2886A',
    },
  },
  {
    name: 'Predator',
    icon: PaintjobIconSrcs.Predator,
    id: 'F5E185065AD96C478E32B3644C87B0B9',
    matrixCoreIds: {
      [Miner.Driller]: '88F055CCA9528E47B8BEA427E9E9A404',
      [Miner.Engineer]: '3C0294A4822E53459FF9F734751AB350',
      [Miner.Gunner]: '22AFA7B7CFAC864EACABB60E1029B072',
      [Miner.Scout]: '5E37143B8DE5E04CA8530F8562FE0CC8',
    },
  },
  {
    name: 'Salt Crystal',
    icon: PaintjobIconSrcs.SaltCrystal,
    id: '5902CD23C3DA1B4CBB5FF01057F15E37',
    matrixCoreIds: {
      [Miner.Driller]: '634BE5BC2166CF4BA70CB35C60BEDE2D',
      [Miner.Engineer]: '7C6FE46B2456FE46B977C706DE1EA858',
      [Miner.Gunner]: '11669DB685CC62479C1BDF855C2DF42F',
      [Miner.Scout]: 'E73C3FD3D2667045ACBAA8A5C24DC0EF',
    },
  },
];

export const CommonWeaponPaintjobs: CommonWeaponPaintjob[] = [
  {
    name: 'Acid Wash',
    icon: PaintjobIconSrcs.AcidWash,
    id: 'A5C3686A9799F5468C5B06D949ADC008',
  },
  {
    name: 'Golden Mauve',
    icon: PaintjobIconSrcs.GoldenMauve,
    id: 'D61ADA8A49A2634093621B772D845E3A',
  },
  {
    name: 'Military',
    icon: PaintjobIconSrcs.Military,
    id: '07050D026A127B4B9C614D5812BD0563',
  },
  {
    name: 'Sleek',
    icon: PaintjobIconSrcs.Sleek,
    id: '68BBAA8468499C4AB03DDFEF6771E3E1',
  },
];

export const UniqueWeaponPaintjobs: UniqueWeaponPaintjob[] = [
  // {
  //   name: 'First Stripe',
  //   icon: PaintjobIconSrcs.FirstStripe,
  //   id: '08D558F65F0C5945BAA4F9649A56589C',
  // },
  // {
  //   name: 'Deepcore',
  //   icon: PaintjobIconSrcs.Deepcore,
  //   id: 'A5854A679A019D4DAA0178EE23FE4E9E',
  // },
  // {
  //   name: 'The Company Special',
  //   icon: PaintjobIconSrcs.TheCompanySpecial,
  //   id: 'BF510980B965B540918AA0A29D8E052B',
  // },
];
