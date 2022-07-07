import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const dataFromServer = require('./data/data.json');

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

export const calcSummaryStat = (prev, add) => {
  const hoursForAdding = +dayjs(add, 'HH:mm').hour();
  const minsForAdding = +dayjs(add, 'HH:mm').minute();

  if (prev === '0') {
    return `${hoursForAdding}:${minsForAdding}`;
  }

  const [prevHours, prevMins] = prev.split(':').map((el) => +el);
  const additionalHours = Math.floor((prevMins + minsForAdding) / 60);

  const hours = prevHours + hoursForAdding + additionalHours;
  const minutes = (prevMins + minsForAdding) % 60;

  return `${hours}:${minutes}`;
};

export const formatStatOutput = (data) => dayjs(data).format('HH:mm');

export const genEmptyStatsObj = () => {
  const noStatsObj = Object.fromEntries(
    [...Array(MONTH_DAYS_QUANTITY).keys()].map((key) => [key + 1, '0']),
  );
  noStatsObj.summary = '0';
  return noStatsObj;
};

export const searchUserByName = (username) => {
  if (!username) {
    return dataFromServer;
  }
  return dataFromServer
    .filter(({ Fullname: fullname }) => fullname.toLowerCase().includes(username.toLowerCase()));
};
