import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import { Layout } from 'antd';

import UsersStatistics from '../components/UsersStatistics';
import { apiUrl, calcSummaryStatForDay, noStatsObj } from '../utils';

const { Content } = Layout;

const App = () => {
  const [usersStats, setUsersStats] = useState([]);

  useEffect(() => {
    async function fetchUsersStats() {
      try {
        const { data } = await axios.get(apiUrl);
        setUsersStats(data);
      } catch (err) {
        const { name, message } = err;

        switch (name) {
          case 'AxiosError':
            console.error(message);
            break;
          default:
            throw new Error(`Unhandled error: ${name}`);
        }
      }
    }

    fetchUsersStats();
  }, []);

  const normalizedData = useMemo(() => usersStats.map(({ id, Fullname: fullname, Days: days }) => {
    const usersMonthStat = days.reduce((acc, { Date: date, End: end, Start: start }) => {
      const day = new Date(date).getDate();
      const dayStat = calcSummaryStatForDay(start, end);
      return { ...acc, [day]: dayStat };
    }, noStatsObj);

    return {
      key: id,
      fullname,
      ...usersMonthStat,
    };
  }), [usersStats]);

  return (
    <Layout className="layout">
      <Content style={{ padding: 50 }}>
        <UsersStatistics data={normalizedData} />
      </Content>
    </Layout>
  );
};

export default App;
