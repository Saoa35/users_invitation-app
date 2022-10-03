import React, { useEffect, useState } from 'react';
import '../../index.scss';
import { User } from '../Users/User';
// import { Skeleton } from '../Users/Skeleton';


const url = 'https://reqres.in/api/users';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)

        // console.log(users)
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div className="App">
      <User items={users} />
    </div>
  );
}

export default App;