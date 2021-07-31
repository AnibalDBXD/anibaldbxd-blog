/* eslint-disable import/extensions */
import spanishCommon from '../../config/locales/es/common.json';
import englishCommon from '../../config/locales/en/common.json';
import { i18n, languages } from '../../next-i18next.config';

const { defaultLocale } = i18n;
const { ENGLISH, SPANISH } = languages;

export const langs = {
  [SPANISH.short]: spanishCommon,
  [ENGLISH.short]: englishCommon,
};

export const defaultLang = langs[defaultLocale];
