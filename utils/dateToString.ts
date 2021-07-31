import { i18n } from '../next-i18next.config';

const { defaultLocale } = i18n;

const dateToString = (
  date: string | Date,
  language: string = defaultLocale,
  isMonthLong?: boolean,
): string =>
  new Date(date).toLocaleString(
    language,
    {
      month: `${isMonthLong ? 'long' : 'short'}`,
      day: '2-digit',
      year: 'numeric',
    },
  );

export default dateToString;
