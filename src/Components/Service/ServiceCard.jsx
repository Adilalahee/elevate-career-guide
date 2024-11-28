import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({service}) => {
  
    const {id,Image,Category,Service_Name,Counselor_Name,Pricing}=service
    return (
      <>
        <div className="card bg-base-100 shadow-xl">
        <figure className='p-4'>
          <img className='w-full h-40 rounded-xl'
            src={Image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto font-semibold">{Service_Name}</h2>
          <p className='font-semibold mx-auto'>{Category}</p>
          <p className='font-semibold mx-auto'>{Pricing}</p>
          <p className='font-bold mx-auto'>{Counselor_Name}</p>
          <div className="card-actions justify-center">
            <NavLink to={`/details/${id}`} className="btn btn-warning">Learn more</NavLink>
          </div>
        </div>
      </div>
      </>
    );
};

export default ServiceCard;