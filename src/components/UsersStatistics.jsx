import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { noStatsObj } from '../utils';

const { Column } = Table;

const UsersStatistics = ({ data }) => {
  const monthDaysCols = useMemo(() => Object.keys(noStatsObj), []);

  return (
    <Table dataSource={data}>
      <Column title="User" dataIndex="fullname" key="fullname" />
      {monthDaysCols.map((day) => <Column title={day} dataIndex={day} key={day} />)}
    </Table>
  );
};

UsersStatistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
  })).isRequired,
};

export default UsersStatistics;
