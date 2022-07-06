import PropTypes from 'prop-types';
import { Table } from 'antd';

import { calcSummaryStatForDay } from '../utils';

const { Column } = Table;

const UsersStatistics = ({ usersStats }) => {
  const data = usersStats.map(({ id, Fullname: fullname, Days: days }) => {
    const usersMonthStat = days.reduce((acc, { Date: date, End: end, Start: start }) => {
      const day = new Date(date).getDate();
      const dayStat = calcSummaryStatForDay(start, end);
      return { ...acc, [day]: dayStat };
    }, {});

    return {
      key: id,
      User: fullname,
      ...usersMonthStat,
    };
  });

  return (
    <Table dataSource={data}>
      <Column title="User" dataIndex="User" key="user" />
    </Table>
  );
};

UsersStatistics.propTypes = {
  usersStats: PropTypes.arrayOf(PropTypes.shape({
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
