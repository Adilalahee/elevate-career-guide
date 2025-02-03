import React from 'react';

const Modal = () => {
  const saveddata=localStorage.getItem("feedbacks")
const data=JSON.parse(saveddata);
  const handleModal=(e)=>{

  }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<form onSubmit={handleModal} action="">
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{data?.name}Thank you for submitting</h3>
    <p className="py-4">We will get back to you later</p>
    <div className="modal-action">
     
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>

    </div>
  </div>
</dialog>
</form>
        </div>
    );
};

export default Modal;