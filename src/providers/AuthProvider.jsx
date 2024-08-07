import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

  const [user, setUser] = useState(null);

  // Register
  const RegisterWithPassword = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  } 

  // Login 
  const LoginWithPassword = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout
  const Logout = ()=>{
    return signOut(auth);
  }

  // Manage User:
  useEffect(()=>{
    const unSubscribe = (auth, currentUser =>{
        console.log("Current User: ",currentUser);
        setUser(currentUser);
    });
    return ()=> unSubscribe();
  },[])

  const authInfo = {
    RegisterWithPassword,
    LoginWithPassword,
    Logout,
    user,
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
