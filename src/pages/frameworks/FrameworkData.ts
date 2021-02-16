import CustomEngineeredIcon from 'assets/frameworks/Custom_Engineered.png';
import FourthRelicIcon from 'assets/frameworks/Fourth_Relic.png';
import GlyphidTrophyHunterIcon from 'assets/frameworks/Glyphid_Trophy_Hunter.png';
import MechanizedIcon from 'assets/frameworks/Mechanized.png';
import NeonBandIcon from 'assets/frameworks/Neon_Band.png';

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
