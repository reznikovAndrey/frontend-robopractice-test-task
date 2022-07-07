import PropTypes from 'prop-types';
import { Table } from 'antd';

import generateTableColumns from '../utils/generateTableColumns';

const UsersStatistics = ({ data }) => {
  const columns = generateTableColumns();

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 'max-content' }}
      locale={{
        triggerDesc: 'сортировать по убыванию',
        triggerAsc: 'сортировать по возрастанию',
        cancelSort: 'сбросить сортировку',
      }}
    />
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
