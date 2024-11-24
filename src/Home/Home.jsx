import React from 'react';
import Banner from '../navbar/Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/Service/ServiceCard';

const Home = () => {
    const services=useLoaderData();
    return (
        <div>
            {/* <Banner></Banner> */}
            {
                services.map(service=><ServiceCard service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Home;