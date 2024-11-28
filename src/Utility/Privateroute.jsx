import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <h1>Helloooo</h1>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to='/login'></Navigate>
    }
    return children;
};

export default Privateroute;