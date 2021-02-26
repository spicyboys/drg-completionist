import * as FrameworkIcons from 'assets/frameworks';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

export const Frameworks = [
  'Custom Engineered',
  'Fourth Relic',
  'Glyphid Trophy Hunter',
  'Mechanized',
  'Neonband',
  'Scale Brigade',
] as const;

export type Framework = typeof Frameworks[number];

export const FrameworkIcon: Record<Framework, string> = {
  'Custom Engineered': FrameworkIcons.CustomEngineered,
  'Fourth Relic': FrameworkIcons.FourthRelic,
  'Glyphid Trophy Hunter': FrameworkIcons.GlyphidTrophyHunter,
  Mechanized: FrameworkIcons.Mechanized,
  Neonband: FrameworkIcons.NeonBand,
  'Scale Brigade': FrameworkIcons.ScaleBrigade,
};

export const FrameworkIDs: Record<
  MinerWeapon<Miner>,
  Record<Framework, string>
> = {
  // Driller
  'CRSPR Flamethrower': {
    'Custom Engineered': '',
    'Fourth Relic': '',
    'Glyphid Trophy Hunter': '',
    Mechanized: '',
    Neonband: '',
    'Scale Brigade': '',
  },
  'Cryo Cannon': {
    'Custom Engineered': '',
    'Fourth Relic': '',
    'Glyphid Trophy Hunter': '',
    Mechanized: '',
    Neonband: '',
    'Scale Brigade': '',
  },
  'Subata 120': {
    'Custom Engineered': '',
    'Fourth Relic': '',
    'Glyphid Trophy Hunter': '',
    Mechanized: '',
    Neonband: '',
    'Scale Brigade': '',
  },
  'Experimental Plasma Charger': {
    'Custom Engineered': '',
    'Fourth Relic': '',
    'Glyphid Trophy Hunter': '',
    Mechanized: '',
    Neonband: '',
    'Scale Brigade': '',
  },

  // Engineer
  '"Warthog" Auto 210': {
    'Custom Engineered': '',
    'Fourth Relic': '',
    'Glyphid Trophy Hunter': '',
    Mechanized: '',
    Neonband: '',
    'Scale Brigade': '',
  },
  '"Stubby" Voltaic SMG': {
    'Custom Engineered': '',
    'Fourth Relic': '',
    'Glyphid Trophy Hunter': '',
    Mechanized: '',
    Neonband: '',
    'Scale Brigade': '',
  },
  'Deepcore 40mm PGL': {
    'Custom Engineered': '',
    'Fourth Relic': '',
    'Glyphid Trophy Hunter': '',
    Mechanized: '',
    Neonband: '',
    'Scale Brigade': '',
  },
  'Breach Cutter': {
    'Custom Engineered': '',
    'Fourth Relic': '',
    'Glyphid Trophy Hunter': '',
    Mechanized: '',
    Neonband: '',
    'Scale Brigade': '',
  },

  // Gunner
  '"Lead Storm" Powered Minigun': {
    'Custom Engineered': '8BF49946B47A524DA518320260C1058D',
    'Fourth Relic': 'E4E21C728EC3F14B9BD5DD09922BE71A',
    'Glyphid Trophy Hunter': 'D2CC36806F502F44B48B793CA29BEB36',
    Mechanized: '88D7EA8C04A0134D92B0F8011EFD162E',
    Neonband: 'DFB7BC3D2B11834A9AF6BFF79A0A9563',
    'Scale Brigade': '',
  },
  '"Thunderhead" Heavy Autocannon': {
    'Custom Engineered': '9F14F79558A8A045BD85E140E2AE32F4',
    'Fourth Relic': '0F48414B7B6FB64794D47F44FA4734D9',
    'Glyphid Trophy Hunter': '9E8A950319E70B429DED2FCB682889E8',
    Mechanized: '5E819C8FD67E85469FB4E7BAD5C4A21A',
    Neonband: '0FDB13F692F5004D99BF78E2FA909760',
    'Scale Brigade': '',
  },
  '"Bulldog" Heavy Revolver': {
    'Custom Engineered': '81AC1795976B4247BAFC9DB6AEC37E49',
    'Fourth Relic': '0A3DA1FAEE768B46A1A6B327EBF92ACF',
    'Glyphid Trophy Hunter': '126E84C51BD1274F94EC81DEFD071EDD',
    Mechanized: '920BDAB74E41504E9EEF8F444AAF63F7',
    Neonband: 'CDD14084B8900F4C96EB01358B0631A6',
    'Scale Brigade': '',
  },
  'BRT7 Burst Fire Gun': {
    'Custom Engineered': '35221568F37CBB4CB94FBB70C7693747',
    'Fourth Relic': '2E7700EBABE37E478FD88320E87ED5C5',
    'Glyphid Trophy Hunter': '0645D3A3FE33244294981110B9B1A4F5',
    Mechanized: '22936C02624E6D4EABD66848C8E09865',
    Neonband: '507DFD1792BC6A48840FA5A6C8230C17',
    'Scale Brigade': '',
  },

  // Scout
  'Deepcore GK2': {
    'Custom Engineered': 'F8C90F0567362C48B1393FD849BDE128',
    'Fourth Relic': '323068C433008A4C9DBAE9BEAE98CEC8',
    'Glyphid Trophy Hunter': '693AD44151511142B57017A8A1DDF5EF',
    Mechanized: 'CB0673BC4C11AA4F93902B57C5831EC2',
    Neonband: '70B3454C8DFD794191C764418A4DDA85',
    'Scale Brigade': 'DA09B0F43E63074998C14783A8D5437E',
  },
  'M1000 Classic': {
    'Custom Engineered': 'FA21DBFC18FAEF4B908D91878AEF735C',
    'Fourth Relic': '47DC798F5C20EC45AFCEDC7FC7F4539B',
    'Glyphid Trophy Hunter': '6E4AE16F46A83043A047FAF33B20FA41',
    Mechanized: 'D1E6565E4E08854EA4E61DE77813B0CA',
    Neonband: 'D5B515BFE3D0264A9B9F2E2326F28A3E',
    'Scale Brigade': '',
  },
  'Jury-Rigged Boomstick': {
    'Custom Engineered': 'F7A49F42665667418F0AEDE9843A8331',
    'Fourth Relic': 'AD8FCDFE884A594A8E4CEF328B87291E',
    'Glyphid Trophy Hunter': 'DBFC8021CB53DE40A0725FD5218E29EA',
    Mechanized: '27BAAE21D067E643BB2C785DD3F73D64',
    Neonband: '1322D7489E0731429F9D5B5F35A13251',
    'Scale Brigade': '',
  },
  'Zhukov NUK17': {
    'Custom Engineered': 'D5C4C5A76D441A4CB5A2216759A6B933',
    'Fourth Relic': '3B0E32B217FF8F4EBA271C11AE6242D5',
    'Glyphid Trophy Hunter': 'C68D5D7EACA4964AB71E5F6921BB85A1',
    Mechanized: '1A8EADB57EB9444391D6769B3C070847',
    Neonband: '0F46B7676CD4064BB1111DE8881D93FF',
    'Scale Brigade': '',
  },
};
