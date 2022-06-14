import { Language } from './types';

export enum Locales {
  en = 'EN',
  lt = 'LT',
  de = 'DE',
  lv = 'LV',
  ee = 'EE',
  ru = 'RU',
  sq = 'SQ',
  system = 'system',
}

export const languages: Language[] = [
  { value: Locales.en, label: 'English' },
  { value: Locales.lt, label: 'Lietuvių kalba' },
  { value: Locales.de, label: 'Deutsch' },
  { value: Locales.lv, label: 'Latvietis valoda' },
  { value: Locales.ee, label: 'Eestlane keel' },
  { value: Locales.ru, label: 'Pусский ' },
  { value: Locales.sq, label: 'Shqip ' },
  { value: Locales.system, label: 'System ' },
];
