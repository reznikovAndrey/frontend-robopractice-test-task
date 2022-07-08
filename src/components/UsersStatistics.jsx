import PropTypes from 'prop-types';
import { Table } from 'antd';

import generateTableColumns from '../utils/generateTableColumns';

const UsersStatistics = ({ data }) => {
  const columns = generateTableColumns();

  return (
    <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
  );
};

UsersStatistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
    summary: PropTypes.exact({
      hours: PropTypes.number,
      minutes: PropTypes.number,
    }).isRequired,
  })).isRequired,
};

export default UsersStatistics;
