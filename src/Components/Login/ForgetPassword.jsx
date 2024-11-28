import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import auth from '../../Firebase/Firebase';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
    const emailref=useRef();
    const handleForget=()=>{
        const email=emailref.current.value;
        if(!email){
            alert('Please provide a valid email address')
        }
        else{
            sendPasswordResetEmail(auth,email)
            .then(()=>{
                alert('Reset email has been sent. Please set a new password');
                
            })
            window.location.href='gmail.com'
        }

    }
    return (
        <div>
            <Helmet>
                <title>Forget Password</title>
            </Helmet>
            <form className='bg-base-100 w-full max-w-sm shrink-0 mx-auto mt-5 mb-64    ' action="">
                <h2 className='text-lg font-semibold py-3'>Give your email address</h2>
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
  <input type="text" name='email' ref={emailref} className="grow" placeholder="Email" />
</label>
<button onClick={handleForget} className='text-lg font-semibold pt-3'>Reset Password</button>
            </form>
            
        </div>
    );
};

export default ForgetPassword;