import React, { useEffect, useState } from 'react';
import '../../index.scss';

const url = 'https://reqres.in/api/users';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)

        console.log(users)
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;