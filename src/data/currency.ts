import * as currencies from 'assets/currencies';
import { Currency } from 'types/currency';

export const CurrencyIcons: Record<Currency, ImgSrc> = {
  credits: currencies.Credit,
  bismor: currencies.Bismor,
  croppa: currencies.Croppa,
  enorPearl: currencies.EnorPearl,
  jadiz: currencies.Jadiz,
  magnite: currencies.Magnite,
  umanite: currencies.Umanite,
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
