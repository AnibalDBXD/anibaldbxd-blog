const dateToString = (
  date: string | Date,
  language: string = 'es',
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
