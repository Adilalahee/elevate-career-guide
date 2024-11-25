import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {id,Image,Category,Service_Name,Counselor_Name,Pricing}=service
    return (
        <div className="card bg-base-100 image-full">
        <figure>
          <img
            src={Image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Service_Name}</h2>
          <p>{Category}</p>
          <p>{Pricing}</p>
          <p>{Counselor_Name}</p>
          <div className="card-actions justify-end">
            <NavLink to={`/details/${id}`} className="btn btn-primary">Learn more</NavLink>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;