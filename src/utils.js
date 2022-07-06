import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const apiUrl = '/api/users';

export const calcSummaryStatForDay = (start, end) => {
  const timeTo = dayjs(start, 'HH-mm');
  const timeFrom = dayjs(end, 'HH-mm');

  return timeTo
    .subtract(timeFrom.hour(), 'hours')
    .subtract(timeFrom.minute(), 'minutes')
    .format('HH-mm');
};
