//this is a context api

import React, { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword , signOut} from "firebase/auth";

export const Authcontext = createContext();


//sign out 
const logOut = () => {
  return getAuth().signOut(auth);
};

const auth = getAuth(app);
const createNewUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
//login 
const signInNewUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    signInNewUser,
    logOut,
  };
  //obeserver
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth state changed:", currentUser)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Authcontext.Provider value={authInfo}> {children} </Authcontext.Provider>
  );
};

export default AuthProvider;
