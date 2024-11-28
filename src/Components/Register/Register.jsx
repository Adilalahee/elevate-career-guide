import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { MdOutlinePassword } from "react-icons/md";
import { MdHideSource } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Helmet } from 'react-helmet-async';



const Register = () => {
    const {handleRegister,handleProfile}=useContext(AuthContext);
    const [error,setError]=useState("");
    const [showpassword,setShowPassword]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const image=form.image.value;
        const password=form.password.value;
        handleRegister(email,password).then(res=>{
          handleProfile(name,image)
        })
        if(password.length<6){
          setError('At least 6 characters');
          return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]){6,}$/;
      if(!passwordRegex.test(password)){
        setError('Need to enter the password in a correct way(uppercase,lowercase,special characters need to be used)')
          return;
      }
   
    }
    return (
      <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1 className="text-5xl font-semibold max-w-sm mx-auto p-4">Register Here</h1>
        <div className='bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex justify-center mx-auto mt-10  p-6'>
            <form className='space-y-4' onSubmit={handleSubmit} action="">
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
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" name='email' className="grow" placeholder="Email" />
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
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type={showpassword ? 'text':'password'} name='password' className="grow"/>
</label>
<button onClick={()=>setShowPassword(!showpassword)} className='absolute right-[650px] top-[400px]'>
            {
              showpassword ? <MdHideSource />:<MdOutlinePassword />
            }
</button>
<div className='form-control'>
<button type="submit" className='btn btn-warning'>Register</button>
</div>
{
        error && <p className='text-red-500 text-5xl'>{error}</p>
      }

            </form>
  
        </div>
        </>
    );
};

export default Register;