import React from 'react';

const Modal = ({savedata}) => {
  const saveddata=localStorage.getItem("feedbacks")
const data=JSON.parse(saveddata);
console.log(data.name)
  const handleModal=(e)=>{

  }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<form onSubmit={handleModal} action="">
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{saveddata.name}</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
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