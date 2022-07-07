const MONTH_DAYS_QUANTITY = 31;

const sortByTime = (prev, next, colname) => {
  const [prevHours, prevMins = 0] = prev[colname].split(':').map((el) => +el);
  const [nextHours, nextMins = 0] = next[colname].split(':').map((el) => +el);

  if (prevHours === nextHours) {
    return prevMins - nextMins;
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
  render: (summaryData) => summaryData,
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
      render: (dayData) => dayData,
      sorter: (prev, next) => sortByTime(prev, next, dayNum),
    }));
  return [
    USERNAME_COLUMN,
    ...monthColumns,
    SUMMARY_COLUMN,
  ];
};
