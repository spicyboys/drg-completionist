import CustomEngineeredIcon from 'assets/frameworks/Custom_Engineered.png';
import FourthRelicIcon from 'assets/frameworks/Fourth_Relic.png';
import GlyphidTrophyHunterIcon from 'assets/frameworks/Glyphid_Trophy_Hunter.png';
import MechanizedIcon from 'assets/frameworks/Mechanized.png';
import NeonBandIcon from 'assets/frameworks/Neon_Band.png';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

export const Frameworks = [
  'Custom Engineered',
  'Fourth Relic',
  'Glyphid Trophy Hunter',
  'Mechanized',
  'Neonband',
] as const;

export type Framework = typeof Frameworks[number];

export const FrameworkIcon: Record<Framework, string> = {
  'Custom Engineered': CustomEngineeredIcon,
  'Fourth Relic': FourthRelicIcon,
  'Glyphid Trophy Hunter': GlyphidTrophyHunterIcon,
  Mechanized: MechanizedIcon,
  Neonband: NeonBandIcon,
};

export const FrameworkIDs: Record<
  MinerWeapon<Miner>,
  Record<Framework, string>
> = {
  'Deepcore GK2': {
    'Custom Engineered': 'F8C90F0567362C48B1393FD849BDE128',
    'Fourth Relic': '323068C433008A4C9DBAE9BEAE98CEC8',
    'Glyphid Trophy Hunter': '693AD44151511142B57017A8A1DDF5EF',
    Mechanized: 'CB0673BC4C11AA4F93902B57C5831EC2',
    Neonband: '70B3454C8DFD794191C764418A4DDA85',
  },
};
