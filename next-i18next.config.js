const path = require('path');

const SPANISH = 'es';
const ENGLISH = 'en';

const SUPPORT_LANGUAGE = [SPANISH, ENGLISH];

module.exports = {
  i18n: {
    defaultLocale: SPANISH,
    locales: SUPPORT_LANGUAGE,
    localePath: path.resolve('./config/locales'),
  },
  languages: {
    SPANISH,
    ENGLISH,
    SUPPORT_LANGUAGE,
  },
};
