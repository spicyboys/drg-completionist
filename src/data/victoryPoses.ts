import { PickaxeIcon } from 'assets/other';
import * as VictoryPoseIconSrcs from 'assets/victoryPoses';
import { Miner } from './miner';

export const CommonVictoryPoseNames = [
  'Beer Toss',
  'Boxer',
  'Chest Thumper',
  'Classic Flex',
  'Confetti Cannon',
  // 'Crowd Pleaser', // unlocked by default
  'Feeding Lootbug',
  'Handstand',
  'Juggle',
  'Knight',
  'Lootbug Lover',
  'Pickaxe Throw',
  'Praise Me',
  // 'Proud Fist', // unlocked by default
  'Salt',
  // 'Satisfied Applause',  // unlocked by default
  'Sharp Salute',
  'Smug Pushups',
  // 'Strongman', // unlocked by default
  'Swarmer Infestation',
  'Swarmer Kick',
  'Three Point Landing',
] as const;

export const MatrixVictoryPoseNames = [
  'Barrel Drop',
  'Crystal Lover',
  'Dual Drink Drop',
  'Fingerguns',
  'Flex Them Guns',
  'Furious Clown',
  'Smooches',
  'Swarmer Stomp',
  'Theatrical Bow',
];

export type VictoryPose = {
  name: typeof MatrixVictoryPoseNames[number];
  icon: ImgSrc;
  id: string;
};

export type CommonVictoryPose = Omit<VictoryPose, 'name'> & {
  name: typeof CommonVictoryPoseNames[number];
};

/*
  CommonVictoryPoses are all victory poses that are not unlocked
  via matrix cores. They share ids over each class but are unlocked
  for each class independently. We still need to check them for each
  class but we only need to list them once since they share ids.
*/
export const CommonVictoryPoses: CommonVictoryPose[] = [
  {
    name: 'Beer Toss',
    icon: VictoryPoseIconSrcs.BeerToss,
    id: '190F3711C1D7AC47A3FBCAABEE2EACEB',
  },
  {
    name: 'Boxer',
    icon: PickaxeIcon,
    id: '5BB7B372EBF0C649AE9AE4C1B4EF4DD3',
  },
  {
    name: 'Chest Thumper',
    icon: PickaxeIcon,
    id: '7E169FA0CD0183418FD60EBAC9946D06',
  },
  {
    name: 'Classic Flex',
    icon: VictoryPoseIconSrcs.ClassicFlex,
    id: 'BDE7EC4316B6AA4AB0FBF12BEAA3FA97',
  },
  {
    name: 'Confetti Cannon',
    icon: PickaxeIcon,
    id: '4F90B17E8B1C6F458810C886ACEB717C',
  },
  {
    name: 'Feeding Lootbug',
    icon: PickaxeIcon,
    id: 'FE4584A2CD8EA14B80AD8B0193623A91',
  },
  {
    name: 'Handstand',
    icon: VictoryPoseIconSrcs.Handstand,
    id: '273243F59E165446A996724FFE672361',
  },
  {
    name: 'Juggle',
    icon: PickaxeIcon,
    id: '7EB0CB84760025458177BF164B163427',
  },
  {
    name: 'Knight',
    icon: PickaxeIcon,
    id: '7CA6C9EE2DEF294AAB91BE3AF25BA0FE',
  },
  {
    name: 'Lootbug Lover',
    icon: PickaxeIcon,
    id: 'D58031A7521D81439D1833480E6E6AB2',
  },
  {
    name: 'Pickaxe Throw',
    icon: PickaxeIcon,
    id: '4550827513464448A92448FE3AB08383',
  },
  {
    name: 'Praise Me',
    icon: VictoryPoseIconSrcs.PraiseMe,
    id: '2D13472815AE1540A47F396FE2277817',
  },
  {
    name: 'Salt',
    icon: PickaxeIcon,
    id: 'DCAE4CCDC24A884A92F4712D199C7C86',
  },
  {
    name: 'Sharp Salute',
    icon: VictoryPoseIconSrcs.SharpSalute,
    id: 'DED0597C58064E4C8EAEDECF6F6B1AD4',
  },
  {
    name: 'Smug Pushups',
    icon: VictoryPoseIconSrcs.SmugPushups,
    id: '36461DAA3216FC4DA3C8A7585AF3B670',
  },
  {
    name: 'Swarmer Infestation',
    icon: VictoryPoseIconSrcs.SwarmerInfestation,
    id: 'BA8C973D7EB4C849B9B36DC5BDAC3288',
  },
  {
    name: 'Swarmer Kick',
    icon: VictoryPoseIconSrcs.SwarmerKick,
    id: '998D680AEA18EC449A4EFD92A1C8F359',
  },
  {
    name: 'Three Point Landing',
    icon: VictoryPoseIconSrcs.ThreePointLanding,
    id: 'A91D586CE7600A468D31C1DE35A033C5',
  },
];

/*
  MatrixVictoryPoses are victory poses that are unlocked through
  matrix cores. Every class has the same unlockable victory poses
  through matrix cores but every class has different ids for a given
  victory pose, so we need to list them for each class.
*/
export const MatrixVictoryPoses: Record<Miner, VictoryPose[]> = {
  [Miner.Driller]: [
    {
      name: 'Barrel Drop',
      icon: VictoryPoseIconSrcs.BarrelDrop,
      id: 'A5482D68A2F8D64AB7372582E8DAA032',
    },
    {
      name: 'Crystal Lover',
      icon: VictoryPoseIconSrcs.CrystalLover,
      id: '1F2A0E1480086047BE16AC075B600890',
    },
    {
      name: 'Dual Drink Drop',
      icon: VictoryPoseIconSrcs.DualDrinkDrop,
      id: 'DC680DA7101FA846A14E4A56505FFB7C',
    },
    {
      name: 'Fingerguns',
      icon: VictoryPoseIconSrcs.Fingerguns,
      id: '579D94DF13434544893AAD7EE4236C94',
    },
    {
      name: 'Flex Them Guns',
      icon: VictoryPoseIconSrcs.FlexThemGuns,
      id: '6AD6EE737359854390F383A5063E818F',
    },
    {
      name: 'Furious Clown',
      icon: VictoryPoseIconSrcs.FuriousClown,
      id: 'D06F793D8403044EBF8F5289A522016A',
    },
    {
      name: 'Smooches',
      icon: VictoryPoseIconSrcs.Smooches,
      id: '6E3CCD1072151F45AC3FFC585B8C082F',
    },
    {
      name: 'Swarmer Stomp',
      icon: VictoryPoseIconSrcs.SwarmerStomp,
      id: 'EECB02473469334CA7C740B024B20951',
    },
    {
      name: 'Theatrical Bow',
      icon: VictoryPoseIconSrcs.TheatricalBow,
      id: 'CEAE52BFC7396D4FBFF23CF5A375B9FA',
    },
  ],
  [Miner.Engineer]: [
    {
      name: 'Barrel Drop',
      icon: VictoryPoseIconSrcs.BarrelDrop,
      id: '975EA783C10E4342BFF67F1370DF29A4',
    },
    {
      name: 'Crystal Lover',
      icon: VictoryPoseIconSrcs.CrystalLover,
      id: 'DE38C69FCC4A604FA6C5B12B992757D6',
    },
    {
      name: 'Dual Drink Drop',
      icon: VictoryPoseIconSrcs.DualDrinkDrop,
      id: '16BD6F06CEDB0A49AE526B708B9E3304',
    },
    {
      name: 'Fingerguns',
      icon: VictoryPoseIconSrcs.Fingerguns,
      id: '2501DB6FB63D9146A23ABB4B76BDF059',
    },
    {
      name: 'Flex Them Guns',
      icon: VictoryPoseIconSrcs.FlexThemGuns,
      id: '45C213444AF4C54BA5ADBA78BA3F8863',
    },
    {
      name: 'Furious Clown',
      icon: VictoryPoseIconSrcs.FuriousClown,
      id: '6579EF11C006FC43A61A3C5DBD8FB320',
    },
    {
      name: 'Smooches',
      icon: VictoryPoseIconSrcs.Smooches,
      id: '880C5D886F25EA4E9AB7A39C252C98F6',
    },
    {
      name: 'Swarmer Stomp',
      icon: VictoryPoseIconSrcs.SwarmerStomp,
      id: '2D65FB86EFB65C4B95B80C58AD7DB8BF',
    },
    {
      name: 'Theatrical Bow',
      icon: VictoryPoseIconSrcs.TheatricalBow,
      id: '7915F391D912494D94BCDE8E5FEB31E3',
    },
  ],
  [Miner.Engineer]: [
    {
      name: 'Barrel Drop',
      icon: VictoryPoseIconSrcs.BarrelDrop,
      id: '975EA783C10E4342BFF67F1370DF29A4',
    },
    {
      name: 'Crystal Lover',
      icon: VictoryPoseIconSrcs.CrystalLover,
      id: 'DE38C69FCC4A604FA6C5B12B992757D6',
    },
    {
      name: 'Dual Drink Drop',
      icon: VictoryPoseIconSrcs.DualDrinkDrop,
      id: '16BD6F06CEDB0A49AE526B708B9E3304',
    },
    {
      name: 'Fingerguns',
      icon: VictoryPoseIconSrcs.Fingerguns,
      id: '2501DB6FB63D9146A23ABB4B76BDF059',
    },
    {
      name: 'Flex Them Guns',
      icon: VictoryPoseIconSrcs.FlexThemGuns,
      id: '45C213444AF4C54BA5ADBA78BA3F8863',
    },
    {
      name: 'Furious Clown',
      icon: VictoryPoseIconSrcs.FuriousClown,
      id: '6579EF11C006FC43A61A3C5DBD8FB320',
    },
    {
      name: 'Smooches',
      icon: VictoryPoseIconSrcs.Smooches,
      id: '880C5D886F25EA4E9AB7A39C252C98F6',
    },
    {
      name: 'Swarmer Stomp',
      icon: VictoryPoseIconSrcs.SwarmerStomp,
      id: '2D65FB86EFB65C4B95B80C58AD7DB8BF',
    },
    {
      name: 'Theatrical Bow',
      icon: VictoryPoseIconSrcs.TheatricalBow,
      id: '7915F391D912494D94BCDE8E5FEB31E3',
    },
  ],
  [Miner.Gunner]: [
    {
      name: 'Barrel Drop',
      icon: VictoryPoseIconSrcs.BarrelDrop,
      id: '9FF744DE9DE2D743B61E0417569A6E5F',
    },
    {
      name: 'Crystal Lover',
      icon: VictoryPoseIconSrcs.CrystalLover,
      id: 'B064BB0C780BEB499A8A3C742685BDC1',
    },
    {
      name: 'Dual Drink Drop',
      icon: VictoryPoseIconSrcs.DualDrinkDrop,
      id: '4C4C0724600339478741F7937D5EA4DB',
    },
    {
      name: 'Fingerguns',
      icon: VictoryPoseIconSrcs.Fingerguns,
      id: '652B2CCAF98A654482312A5B32F5D8F0',
    },
    {
      name: 'Flex Them Guns',
      icon: VictoryPoseIconSrcs.FlexThemGuns,
      id: '603D8975A5930843933F550244B64F03',
    },
    {
      name: 'Furious Clown',
      icon: VictoryPoseIconSrcs.FuriousClown,
      id: '5F9C249980B7F14188405876B613E95A',
    },
    {
      name: 'Smooches',
      icon: VictoryPoseIconSrcs.Smooches,
      id: '96FF392D81DB6645AB797EAB207B0414',
    },
    {
      name: 'Swarmer Stomp',
      icon: VictoryPoseIconSrcs.SwarmerStomp,
      id: '4D7DD0C473708B43AC0B02B6EEB83732',
    },
    {
      name: 'Theatrical Bow',
      icon: VictoryPoseIconSrcs.TheatricalBow,
      id: '0D930FA90469BB4F906160013DF89500',
    },
  ],
  [Miner.Scout]: [
    {
      name: 'Barrel Drop',
      icon: VictoryPoseIconSrcs.BarrelDrop,
      id: 'AF862486216347459F0582F9DF6E5F8D',
    },
    {
      name: 'Crystal Lover',
      icon: VictoryPoseIconSrcs.CrystalLover,
      id: 'E88A42A1DA699D4499AB66C44237A5AD',
    },
    {
      name: 'Dual Drink Drop',
      icon: VictoryPoseIconSrcs.DualDrinkDrop,
      id: '8AEF822867E04E42833C4495A21B9D42',
    },
    {
      name: 'Fingerguns',
      icon: VictoryPoseIconSrcs.Fingerguns,
      id: 'C5AF5E9B34ECA6418147939B2170B3F4',
    },
    {
      name: 'Flex Them Guns',
      icon: VictoryPoseIconSrcs.FlexThemGuns,
      id: '252A3B113AB95F41ABC3D806CCBF7353',
    },
    {
      name: 'Furious Clown',
      icon: VictoryPoseIconSrcs.FuriousClown,
      id: '1AC31D79EE76CD4FB0C30F5E4B6B1B07',
    },
    {
      name: 'Smooches',
      icon: VictoryPoseIconSrcs.Smooches,
      id: '2C6E9634F6EC494DAEE4E7AA07DA31D7',
    },
    {
      name: 'Swarmer Stomp',
      icon: VictoryPoseIconSrcs.SwarmerStomp,
      id: '23836E524FFB4847AC0D741C755F52F6',
    },
    {
      name: 'Theatrical Bow',
      icon: VictoryPoseIconSrcs.TheatricalBow,
      id: 'B2F054F8C4409B4D9951708E25E1D848',
    },
  ],
};
