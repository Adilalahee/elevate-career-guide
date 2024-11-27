import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';

const Profile = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            Hello profile pages
            <h1>{user.email}</h1>
        </div>
    );
};

export default Profile;