export const Frameworks = [
  "Custom Engineered",
  "Fourth Relic",
  "Glyphid Trophy Hunter",
  "Mechanized",
  "Neonband",
] as const;

export type Framework = typeof Frameworks[number];
