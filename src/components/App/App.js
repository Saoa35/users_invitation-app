import React, { useEffect, useState } from 'react';
import '../../index.scss';
import { Users } from '../../components/Users';
import { Success } from '../../components/Success';


const url = 'https://reqres.in/api/users';

function App() {

  const [users, setUsers] = useState([]);
  const [isLoding, setLoading] = useState(true);
  const [serchValue, setSerchValue] = useState('');

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)
      })
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false))
  }, []);

  const onChangeSerchValue = (e) => {
    setSerchValue(e.target.value)
  }

  return (
    <div className="App">
      <Users 
        items={users} 
        isLoading={isLoding} 
        serchValue={serchValue} 
        onChangeSerchValue={onChangeSerchValue} />
    </div>
  );
}

export default App;