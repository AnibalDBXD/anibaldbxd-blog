const dateToString = (date: string | Date): string => new Date(date).toLocaleString(
  'en-US',
  {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  },
);

export default dateToString;
