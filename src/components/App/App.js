import React, { useEffect, useState } from 'react';
import '../../index.scss';
import { Users } from '../../components/Users';
import { Success } from '../../components/Success';


const url = 'https://reqres.in/api/users';

function App() {

  const [users, setUsers] = useState([]);
  const [isLoding, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)

        console.log(users)
      })
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false))
  }, []);

  return (
    <div className="App">
      <Users items={users} isLoading={isLoding} />
    </div>
  );
}

export default App;