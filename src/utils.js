import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const MONTH_DAYS_QUANTITY = 31;

export const apiUrl = '/api/users';

export const calcSummaryStatForDay = (start, end) => {
  const timeTo = dayjs(end, 'HH-mm');
  const timeFrom = dayjs(start, 'HH-mm');

  return timeTo
    .subtract(timeFrom.hour(), 'hours')
    .subtract(timeFrom.minute(), 'minutes')
    .format('HH:mm');
};

export const genEmptyStatsObj = () => {
  const noStatsObj = Object.fromEntries(
    [...Array(MONTH_DAYS_QUANTITY).keys()].map((key) => [key + 1, '0']),
  );
  noStatsObj.summary = '0';
  return noStatsObj;
};
