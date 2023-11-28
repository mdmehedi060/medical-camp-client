

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import app from './../assets/Firebase/firebase.config';
import useAxiosPublic from './../assets/Hooks/useAxiosPublic';






export const Authcontext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(false);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic=useAxiosPublic();
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
  const updateUserProfile=(name,profile)=>{
    return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: profile
      })
    }



    useEffect(()=>{
      const unsubscribe  = onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser);
            
          //    if (currentUser) {
          //      // get token and store client
          //      const userInfo = { email: currentUser.email };
          //      axiosPublic.post('/jwt', userInfo)
          //          .then(res => {
          //              if (res?.data?.token) {
          //                  localStorage.setItem('access-token', res?.data?.token);
          //                  setLoading(false)
          //              }
          //          })
          //  }
          //  else {
          //      // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
          //      localStorage.removeItem('access-token');
          //      setLoading(false)
          //  }
            
         })
         return ()=>{
             return unsubscribe();
         }
     },[axiosPublic])




  const authInfo = {
    googleSignIn,
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile
  };


  return (
    <Authcontext.Provider value={authInfo}>
      {children}
      </Authcontext.Provider>
  );
};

export default AuthProvider;