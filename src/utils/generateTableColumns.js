import { mock } from './index';

const MONTH_DAYS_QUANTITY = 31;

const sortByTime = (prev, next, colname) => {
  const { hours: prevHours, minutes: prevMinutes } = prev[colname] ?? mock;
  const { hours: nextHours, minutes: nextMinutes } = next[colname] ?? mock;

  if (prevHours === nextHours) {
    return prevMinutes - nextMinutes;
  }

  return prevHours - nextHours;
};

const USERNAME_COLUMN = {
  title: 'User',
  dataIndex: 'fullname',
  key: 'fullname',
  fixed: 'left',
  render: (fullname) => fullname,
};

const SUMMARY_COLUMN = {
  title: 'Monthly total',
  dataIndex: 'summary',
  key: 'summary',
  align: 'right',
  fixed: 'right',
  render: ({ hours, minutes }) => `${hours}:${minutes}`,
  sorter: (prev, next) => sortByTime(prev, next, 'summary'),
};

export default () => {
  const monthColumns = [...Array(MONTH_DAYS_QUANTITY).keys()]
    .map((key) => key + 1)
    .map((dayNum) => ({
      title: dayNum,
      dataIndex: dayNum,
      key: dayNum,
      align: 'right',
      render: (obj) => (!obj ? '0' : `${obj.hours}:${obj.minutes}`),
      sorter: (prev, next) => sortByTime(prev, next, dayNum),
    }));
  return [
    USERNAME_COLUMN,
    ...monthColumns,
    SUMMARY_COLUMN,
  ];
};
