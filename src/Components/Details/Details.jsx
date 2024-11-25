import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';

const Details = ({name}) => {
    const {Category,Service_Details}=useLoaderData();
    const handleSubmit=(e)=>{
      e.preventDefault();
      const form=e.target;
      const name=form.name.value;
      const feedback=form.feedback.value;
      return name,feedback;
    }
    return (
        <>
        <div className="hero bg-base-200 max-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{Category}</h1>
            <p className="py-6">
              {Service_Details}
            </p>
            
          </div>
        </div>
        
      </div>
      <form onSubmit={handleSubmit} action="">
        <div>
        <input className="input input-bordered" type="text" name='name' placeholder='Name' />
        </div>
        <div>
        <textarea name='feedback' className="textarea textarea-primary" placeholder="Bio"></textarea>
        </div>
        <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Submit</button>
      </form>
      <Modal></Modal>
      </>
    );
};

export default Details;