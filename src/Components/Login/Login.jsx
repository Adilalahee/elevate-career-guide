import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {handleGoogle}=useContext(AuthContext);
    return (
        <div>
            <button onClick={handleGoogle}>Google Login</button>
        </div>
    );
};

export default Login;