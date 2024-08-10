import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext= createContext(null);



export default function AuthProviders({children}) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register with password
  const RegisterWithPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login with password
  const LoginWithPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };



  // Sign Out
  const Logout= ()=>{
    setLoading(true);
    return signOut(auth);
  }


  // Manage user
  useEffect( ()=>{
    const unsubscribe= onAuthStateChanged( auth, (currentUser)=>{
      const userEmail= currentUser?.email || user?.email;
      const loggedUser = {email: userEmail};

      // console.log("User in Auth state change ", currentUser);
      setUser(currentUser);
      setLoading(false);

      if(currentUser)
      {
        axios.post("https://jwt-server-five.vercel.app/jwt", loggedUser, {
          withCredentials: true
        })
        .then(res=>{
          // console.log("Token response", res.data);
          
        })
      }
      else
      {
        axios.post("https://jwt-server-five.vercel.app/logout", loggedUser, {
          withCredentials: true
        })
        .then(res=>{
          // console.log(res.data);
        })
      }

    } );
    return ()=>{
      unsubscribe();
    }
  } ,[])


  const authInfo={
    RegisterWithPassword,
    LoginWithPassword,
    Logout,
    loading,
    user,
  }

  return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}