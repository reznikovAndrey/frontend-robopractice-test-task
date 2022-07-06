import axios from 'axios';
import { useEffect, useState } from 'react';

import UsersStatistics from '../components/UsersStatistics';
import { apiUrl } from '../utils';

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

  return <UsersStatistics usersStats={usersStats} />;
};

export default App;
