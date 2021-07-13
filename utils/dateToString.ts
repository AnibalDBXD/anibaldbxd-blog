const dateToString = (date: string | Date, isMonthLong?: boolean): string =>
  new Date(date).toLocaleString(
    'en-US',
    {
      month: `${isMonthLong ? 'long' : 'short'}`,
      day: '2-digit',
      year: 'numeric',
    },
  );

export default dateToString;
