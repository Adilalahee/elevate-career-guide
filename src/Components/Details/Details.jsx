import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {Category,Service_Details}=useLoaderData()
    return (
        <>
        <div className="hero bg-base-200 max-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{Category}</h1>
            <p className="py-6">
              {Service_Details}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>
      </div>
      </>
    );
};

export default Details;