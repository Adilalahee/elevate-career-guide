import React from 'react';

const ServiceCard = ({service}) => {
    const {Image,Category,Service_Name,Counselor_Name,Pricing}=service
    return (
        <div className="card bg-base-100 image-full w-96">
        <figure>
          <img
            src={Image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Category}</h2>
          <p>{Pricing}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn more</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;