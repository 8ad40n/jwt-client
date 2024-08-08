import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export default function Home() {
  const {user} = useContext(AuthContext);
  return (
    <div>
      {
        user?
        <>
          <h1 className='flex justify-center'>Email: {user.email}</h1>
        </>:
        <>
          <h1 className='flex justify-center'>Please, Login First!</h1>
        </>
      }
    </div>
  )
}
