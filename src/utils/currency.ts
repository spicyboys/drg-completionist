import * as currencies from 'assets/currencies';

export type Currency =
  | 'credits'
  | 'bismor'
  | 'croppa'
  | 'enorPearl'
  | 'jadiz'
  | 'magnite'
  | 'umanite';

export const CurrencyIcons: Record<Currency, string> = {
  credits: currencies.Credit.png,
  bismor: currencies.Bismor.png,
  croppa: currencies.Croppa.png,
  enorPearl: currencies.EnorPearl.png,
  jadiz: currencies.Jadiz.png,
  magnite: currencies.Magnite.png,
  umanite: currencies.Umanite.png,
};

export const CurrencyNames: Record<Currency, string> = {
  credits: 'Credits',
  bismor: 'Bismor',
  croppa: 'Croppa',
  enorPearl: 'Enor Pearls',
  jadiz: 'Jadiz',
  magnite: 'Magnite',
  umanite: 'Umanite',
};
