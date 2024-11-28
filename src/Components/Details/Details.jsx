import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const {Category,Service_Details}=useLoaderData();
    const handleSubmit=(e)=>{
      e.preventDefault();
    const name=e.target.name.value;
    const feedback=e.target.feedback.value;
    const info={
      name,feedback
    }
    let savedata=[];
    const localData=localStorage.getItem("feedbacks")
    if(localData){
      savedata=JSON.parse(localData);
    }  
    savedata.push(info);
    localStorage.setItem("feedbacks",JSON.stringify(savedata))
  }
    
    return (
        <>
        <Helmet>
          <title>Card Details</title>
        </Helmet>
        <div className="hero bg-base-200 max-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">{Category}</h1>
            <p className="py-6">
              {Service_Details}
            </p>
            
          </div>
        </div>
        
      </div>
      <form className='max-w-screen-sm mx-auto space-y-3' onSubmit={handleSubmit} action="">
        <div>
        <input className="input input-bordered" type="text" name='name' placeholder='Name' />
        </div>
        <div>
        <textarea name='feedback' className="textarea textarea-primary" placeholder="Bio"></textarea>
        </div>
        <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary m-3">Submit</button>
      </form>
      <Modal></Modal>
      </>
    );
};

export default Details;