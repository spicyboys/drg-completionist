import outlines from 'assets/weapons/outlines';
import { Miner } from 'data/miner';

export const MinerWeapons = {
  [Miner.Driller]: [
    'CRSPR Flamethrower',
    'Cryo Cannon',
    'Corrosive Sludge Pump',
    'Subata 120',
    'Experimental Plasma Charger',
    'Colette Wave Cooker',
  ],
  [Miner.Engineer]: [
    '"Warthog" Auto 210',
    '"Stubby" Voltaic SMG',
    'Lok-1 Smart Rifle',
    'Deepcore 40mm PGL',
    'Breach Cutter',
    'Shard Diffractor',
  ],
  [Miner.Gunner]: [
    '"Lead Storm" Powered Minigun',
    '"Thunderhead" Heavy Autocannon',
    '"Hurricane" Guided Rocket System',
    '"Bulldog" Heavy Revolver',
    'BRT7 Burst Fire Gun',
    'ArmsKore Coil Gun',
  ],
  [Miner.Scout]: [
    'Deepcore GK2',
    'M1000 Classic',
    'DRAK-25 Plasma Carbine',
    'Jury-Rigged Boomstick',
    'Zhukov NUK17',
    'Nishanka Boltshark X-80',
  ],
} as const;

export type MinerWeapon<T extends Miner> = typeof MinerWeapons[T][number];

export const WeaponOutlines: Record<MinerWeapon<Miner>, ImgSrc> = {
  // Driller
  'CRSPR Flamethrower': outlines.driller.Flamethrower,
  'Cryo Cannon': outlines.driller.CryoCannon,
  'Subata 120': outlines.driller.Subata,
  'Experimental Plasma Charger': outlines.driller.Epc,
  'Corrosive Sludge Pump': outlines.driller.SludgePump,
  'Colette Wave Cooker': outlines.driller.WaveCooker,

  // Engineer
  '"Warthog" Auto 210': outlines.engineer.Shotgun,
  '"Stubby" Voltaic SMG': outlines.engineer.StubbySMG,
  'Deepcore 40mm PGL': outlines.engineer.GrenadeLauncher,
  'Breach Cutter': outlines.engineer.BreachCutter,
  'Lok-1 Smart Rifle': outlines.engineer.LockOnRifle,
  'Shard Diffractor': outlines.engineer.ShardDiffractor,

  // Gunner
  '"Lead Storm" Powered Minigun': outlines.gunner.Minigun,
  '"Thunderhead" Heavy Autocannon': outlines.gunner.Autocannon,
  '"Bulldog" Heavy Revolver': outlines.gunner.Revolver,
  'BRT7 Burst Fire Gun': outlines.gunner.BurstFireGun,
  '"Hurricane" Guided Rocket System': outlines.gunner.Hurricane,
  'ArmsKore Coil Gun': outlines.gunner.Coilgun,

  // Scout
  'Deepcore GK2': outlines.scout.AssaultRifle,
  'M1000 Classic': outlines.scout.M1000,
  'Jury-Rigged Boomstick': outlines.scout.Boomstick,
  'Zhukov NUK17': outlines.scout.Zhukov,
  'DRAK-25 Plasma Carbine': outlines.scout.PlasmaCarbine,
  'Nishanka Boltshark X-80': outlines.scout.Crossbow,
};

export const WeaponIDs: Record<MinerWeapon<Miner>, string> = {
  // Driller
  'CRSPR Flamethrower': '91FB7410E53FB64EBAC7558E2C415E58',
  'Cryo Cannon': '82082AAB25319F43B43A8458F5228E8C',
  'Subata 120': '9D772549A4B54045A1377F38795655C1',
  'Experimental Plasma Charger': '4E96F432D0182343A62E81D821A1480F',
  'Corrosive Sludge Pump': 'F1985B1C74C1A548B789B8AC8517FE4E',
  'Colette Wave Cooker': '299FDB2466194E419C213EED4B50FA02',

  // Engineer
  '"Warthog" Auto 210': 'B66739F359A40443B70D9BACF8AA2D39',
  '"Stubby" Voltaic SMG': 'DDB5DA9086CD4442AF6006DE2A4390A9',
  'Deepcore 40mm PGL': '501A4F4CCC24CB42B0287F2AF9AE120D',
  'Breach Cutter': '28D22472C409224EAFFACAC8B1377287',
  'Lok-1 Smart Rifle': '192AC9D763B05942A4A92436658CDAC2',
  'Shard Diffractor': 'F9CC8DCBB9EBC44F9B0CB80D58F30031',

  // Gunner
  '"Lead Storm" Powered Minigun': 'DF573B09420B2E408BCE3AB9D36542F8',
  '"Thunderhead" Heavy Autocannon': '763A96F020192646A61D41F498BE4285',
  '"Bulldog" Heavy Revolver': 'D8A5F7F6BD131D45ACBD2CFE7E5416CC',
  'BRT7 Burst Fire Gun': 'B95EDEC1BDDB1C478E5DC57322105134',
  '"Hurricane" Guided Rocket System': 'A3ED6A8ACE08CD4DB471A10C697B6B64',
  'ArmsKore Coil Gun': '00356685FFB79E4598D8F64C15CD4A9B',

  // Scout
  'Deepcore GK2': '1AF31165BCB11C48A5A3D1A6BA5A3540',
  'M1000 Classic': '79E91BF15AC1694BA7987C696959C0D1',
  'Jury-Rigged Boomstick': '895756CB9017B0419D74C47AC45A16A5',
  'Zhukov NUK17': '9736EE110D4C8749A224AF6F2DBA0160',
  'DRAK-25 Plasma Carbine': '3DF53AB5B7F66048B686F785F634E5A4',
  'Nishanka Boltshark X-80': '0598B596016E324886832D1A6D62F981',
};
