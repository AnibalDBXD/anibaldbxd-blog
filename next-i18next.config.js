const path = require('path');

// es: Spanish
// en: English

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localePath: path.resolve('./config/locales'),
  },
};
