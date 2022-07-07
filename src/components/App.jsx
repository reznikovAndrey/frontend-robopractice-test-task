import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import { Layout, Spin } from 'antd';
import { debounce } from 'lodash';

import UsersStatistics from './UsersStatistics';
import SearchInput from './SearchInput';
import {
  apiUrl, calcSummaryStatForDay, genEmptyStatsObj, calcSummaryStat, searchUserByName,
} from '../utils';

const { Content } = Layout;

const App = () => {
  const [usersStats, setUsersStats] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsersStats() {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }
    fetchUsersStats();
  }, []);

  useEffect(() => {
    setLoading(true);
    // emulate request in db oh some http request
    setTimeout(() => {
      const filteredData = searchUserByName(inputVal);
      setUsersStats(filteredData);
      setLoading(false);
    }, 500);
  }, [inputVal]);

  const normalizedData = useMemo(() => {
    const emptyStatsObj = genEmptyStatsObj();

    return usersStats.map(({ id, Fullname: fullname, Days: days }) => {
      const usersMonthStat = days.reduce((acc, { Date: date, End: end, Start: start }) => {
        const day = new Date(date).getDate();
        const dayStat = calcSummaryStatForDay(start, end);
        const summary = calcSummaryStat(acc.summary, dayStat);

        return { ...acc, [day]: dayStat, summary };
      }, emptyStatsObj);

      return {
        key: id,
        fullname,
        ...usersMonthStat,
      };
    });
  }, [usersStats]);

  const onInputChange = debounce(({ target: { value } }) => setInputVal(value), 500);

  return (
    <Layout className="layout">
      <Content style={{ padding: 50 }}>
        <Spin spinning={loading}>
          <SearchInput onChange={onInputChange} />
          <UsersStatistics data={normalizedData} />
        </Spin>
      </Content>
    </Layout>
  );
};

export default App;
