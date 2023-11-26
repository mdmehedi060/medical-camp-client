

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import app from './../assets/Firebase/firebase.config';






export const Authcontext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();

// Google signin
const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }



// Register
  const createUser =(email,password)=>{
    setLoading(true)
 return createUserWithEmailAndPassword(auth, email, password)
    
  }
// Signin
const signIn=(email,password)=>{
  setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
 
}

  // signout
  const logOut =()=>{
    setLoading(true)
    return signOut(auth);
  }

useEffect(()=>{
const unSuscribe = onAuthStateChanged(auth, currentUser=>{
  // console.log('user in the auth state changed',currentUser);
  setUser(currentUser)
  setLoading(false)
 })
 return ()=>{
  unSuscribe()
  
 }
},[])




  const authInfo = {
    googleSignIn,
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };


  return (
    <Authcontext.Provider value={authInfo}>
      {children}
      </Authcontext.Provider>
  );
};

export default AuthProvider;