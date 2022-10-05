import React, { useEffect, useState } from 'react';
import '../../index.scss';
import { Users } from '../../components/Users';
import { Success } from '../../components/Success';


const url = 'https://reqres.in/api/users';

function App() {

  const [users, setUsers] = useState([]);
  const [isLoding, setLoading] = useState(true);
  const [serchValue, setSerchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

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

  const onClickInvite = (id) => {
    if(invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length}/>
      ) : (
        <Users 
          items={users} 
          isLoading={isLoding} 
          serchValue={serchValue} 
          onChangeSerchValue={onChangeSerchValue} 
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}/>
      )}
    </div>
  );
}

export default App;