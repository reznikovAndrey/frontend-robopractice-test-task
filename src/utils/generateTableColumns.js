const MONTH_DAYS_QUANTITY = 31;

const USERNAME_COLUMN = {
  title: 'User',
  dataIndex: 'fullname',
  key: 'fullname',
};

const SUMMARY_COLUMN = {
  title: 'Monthly total',
  dataIndex: 'summary',
  key: 'summary',
};

export default () => {
  const monthColumns = [...Array(MONTH_DAYS_QUANTITY).keys()].map((dayNum) => ({
    title: dayNum + 1,
    dataIndex: dayNum + 1,
    key: dayNum + 1,
  }));
  return [
    USERNAME_COLUMN,
    ...monthColumns,
    SUMMARY_COLUMN,
  ];
};
