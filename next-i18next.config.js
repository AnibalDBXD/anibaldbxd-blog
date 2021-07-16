const path = require('path');

const SPANISH = {
  short: 'es',
  long: 'Español',
};

const ENGLISH = {
  short: 'en',
  long: 'English',
};

const SUPPORT_LANGUAGE = [SPANISH, ENGLISH];

module.exports = {
  i18n: {
    defaultLocale: SPANISH.short,
    locales: SUPPORT_LANGUAGE.map((lang) => lang.short),
    localePath: path.resolve('./config/locales'),
  },
  languages: {
    SPANISH,
    ENGLISH,
    SUPPORT_LANGUAGE,
  },
};
