import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider();
    const[user,setUser]=useState(null);
    const handleRegister=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password);
    }
    const handleLogin=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
    }
    const handleGoogle=()=>{
        signInWithPopup(auth,googleProvider);
    }
    const handleLogOut=()=>{
        signOut(auth);
    }
    const authInfo={
        handleRegister,
        handleLogin,
        handleGoogle,
        handleLogOut
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{

            return()=>{
                unsubscribe();
            }
        })
    },[])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;