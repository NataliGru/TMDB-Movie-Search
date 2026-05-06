import dayjs from 'dayjs';

export const getYearFromDate = (date: string) => {
  return dayjs(date).year();
};
