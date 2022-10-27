import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/FirebaseConfig'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

     const [user, setUser] = useState(null);

     // GOOGLE SIGN IN 
     const providerLogin = (provider) => {
          return signInWithPopup(auth, provider)
     }
    
     // USER PROFILE 
     const updateUserProfile = (profile) => {
          return updateProfile(auth.currentUser, profile)
     }

     // USER LOG OUT 
     const logOut = () => {
          return signOut(auth)
     }


//     CRATE USER EMAIL AND PASS 
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     };
    
     // SIGN IN USER EMAIL AND PASS
     const signIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     useEffect(() => {

          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

               setUser(currentUser)

          });

          return () => {
               unsubscribe();
          }

     }, [])
     const authInfo = {
          user,
          providerLogin,
          logOut,
          createUser,
          signIn,
          updateUserProfile,
           
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;