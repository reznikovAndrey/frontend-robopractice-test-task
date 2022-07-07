import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { genEmptyStatsObj } from '../utils';

const { Column } = Table;

const UsersStatistics = ({ data }) => {
  const monthDaysCols = useMemo(() => {
    const emptyStatsObj = genEmptyStatsObj();
    return Object.keys(emptyStatsObj);
  }, []);

  return (
    <Table dataSource={data} scroll={{ x: 'max-content' }}>
      <Column title="User" dataIndex="fullname" key="fullname" />
      {monthDaysCols.map((colName) => (
        <Column
          title={colName === 'summary' ? 'Monthly total' : colName}
          dataIndex={colName}
          key={colName}
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
