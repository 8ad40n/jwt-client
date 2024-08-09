import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export default function Home() {
  const {user} = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then(res=>{
      console.log(res.data);
      setUsers(res.data);
    })
  },[])

  return (
    <div>
      {
        user?
        <>
          <h1 className='flex justify-center'>Email: {user.email}</h1>
          <h1>All users:</h1>
          <div>
            {
              users.map(u=><h1 key={u._id}>{u.email}</h1>)
            }
          </div>
        </>:
        <>
          <h1 className='flex justify-center'>Please, Login First!</h1>
        </>
      }
    </div>
  )
}
