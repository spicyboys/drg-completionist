import * as frames from 'assets/overclocks/frames';
import * as icons from 'assets/overclocks/icons';
import type { Currency } from 'types/currency';

// All currencies are optional except credits
type Price = Readonly<Partial<Record<Currency, number>> & { credits: number }>;

type Effects = Readonly<{
  buffs: string[];
  nerfs: string[];
}>;

export type Overclock = Readonly<{
  name: string;
  id: string;
  type: keyof typeof frames;
  icon: keyof typeof icons;
  price: Price;
  effects: Effects;
  description: string;
}>;
