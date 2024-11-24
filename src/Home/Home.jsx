import React from 'react';
import Banner from '../navbar/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/Service/ServiceCard';

const Home = () => {
    const services=useLoaderData();
    return (
        <>
        <div className='grid grid-cols-3 gap-3 p-3'>
            {/* <Banner></Banner> */}
            {
                services.slice(0,6).map(service=><ServiceCard service={service}></ServiceCard>)
            }
        </div>
        <button className='mx-auto block btn btn-primary'><NavLink to="/blog">Browse all services</NavLink> </button>
        </>
    );
};

export default Home;