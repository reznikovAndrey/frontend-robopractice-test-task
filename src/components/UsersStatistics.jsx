import PropTypes from 'prop-types';
import { Table } from 'antd';

const { Column } = Table;

const UsersStatistics = ({ data }) => (
  <Table dataSource={data}>
    <Column title="User" dataIndex="User" key="user" />
  </Table>
);

UsersStatistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    Fullname: PropTypes.string,
    Days: PropTypes.arrayOf(PropTypes.shape({
      Date: PropTypes.string,
      End: PropTypes.string,
      Start: PropTypes.string,
    })),
  })).isRequired,
};

export default UsersStatistics;
