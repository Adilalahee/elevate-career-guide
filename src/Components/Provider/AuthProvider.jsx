import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider();
    const[user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const handleRegister=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const handleLogin=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const handleGoogle=()=>{
       return signInWithPopup(auth,googleProvider);
    }
    const handleProfile=(name,image)=>{
        updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
        })
    }
    const handleLogOut=()=>{
        signOut(auth);
    }
    const authInfo={
        handleRegister,
        handleLogin,
        handleGoogle,
        handleLogOut,
        handleProfile,
        user,
        setUser,
        loading
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoading(false)
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