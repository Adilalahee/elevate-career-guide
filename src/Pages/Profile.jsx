import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';

const Profile = () => {
    const {user,handleProfile,setUser}=useContext(AuthContext);
    const handleModify=(e)=>{
      e.preventDefault();
      const form=e.target;
      const name=form.name.value;
      const image=form.image.value;
      handleProfile(name,image);
      
    }
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={user.photoURL}
      className="w-24 h-24 ax-w-sm shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{user.displayName}</h1>
      <p className="py-6">
        {user.email}
      </p>
      <form onSubmit={handleModify} action="">
      <label className="input input-bordered flex items-center gap-2">
      <MdOutlineDriveFileRenameOutline lassName="h-4 w-4 opacity-70"></MdOutlineDriveFileRenameOutline>
  <input type="text" className="grow" name='name' placeholder="Name" />
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" name='image' className="grow" placeholder="Photo URL" />
</label>
<div className='form-control'>
<button type="submit" className='btn btn-warning'>Update & Reload</button>
</div>
      </form>


    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;