import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
     const [user,setUser]=useState(null)
       const [loading,setLoading]=useState(true)
      const loginWithGoogle =()=>{
       setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const loginWithEmailPassword =(email,password)=>{
         setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
     const registerUser =(email,password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
       const updateUser =(updateData)=>{
        return updateProfile(auth.currentUser ,updateData)
    }
     const logout =()=>{
        return signOut(auth)
    }
      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

   const AuthData={
        loginWithGoogle,
        loginWithEmailPassword,
        loading,
        registerUser,
         updateUser,
         user,setUser,logout


    }
    return <AuthContext value={AuthData}>
        {
            children
        }
    </AuthContext>
};

export default AuthProvider;