import axios from 'axios';
import { useEffect, useState } from 'react';

import UsersStatistics from '../components/UsersStatistics';
import apiUrl from '../utils';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get(apiUrl);
        setUsers(data);
      } catch (err) {
        const { name, message } = err;

        switch (name) {
          case 'AxiosError':
            console.error(message);
            break;
          default:
            throw new Error(`Unhandled error: ${err}`);
        }
      }
    }

    fetchUsers();
  }, []);

  return <UsersStatistics />;
};

export default App;
