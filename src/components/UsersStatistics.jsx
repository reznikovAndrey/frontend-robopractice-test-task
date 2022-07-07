import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { genEmptyStatsObj, sortDates } from '../utils';

const { Column } = Table;

const UsersStatistics = ({ data }) => {
  const monthDaysCols = useMemo(() => {
    const emptyStatsObj = genEmptyStatsObj();
    return Object.keys(emptyStatsObj);
  }, []);

  return (
    <Table
      dataSource={data}
      scroll={{ x: 'max-content' }}
      locale={{
        triggerDesc: 'сортировать по убыванию',
        triggerAsc: 'сортировать по возрастанию',
        cancelSort: 'сбросить сортировку',
      }}
    >
      <Column title="User" dataIndex="fullname" key="fullname" fixed="left" />
      {monthDaysCols.map((colName, idx) => (
        <Column
          title={colName === 'summary' ? 'Monthly total' : colName}
          dataIndex={colName}
          key={colName}
          align="right"
          fixed={colName === 'summary' ? 'right' : null}
          sorter={(prev, next) => {
            if (colName === 'summary') {
              return sortDates(prev, next, colName);
            }
            return sortDates(prev, next, idx + 1);
          }}
          showSorterTooltip
        />
      ))}
    </Table>
  );
};

UsersStatistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
};

export default UsersStatistics;
