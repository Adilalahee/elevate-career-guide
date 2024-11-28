import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/Service/ServiceCard';

const Team = () => {
    const services=useLoaderData();
    return (
        <>
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='text-center font-bold text-2xl p-4'>Why Career Guidance and Mentoring is important for Graduates and Post Graduates ?</h2>
            <p className='font-semibold'>Graduation plays an important role in defining your professional life and provides a base for fulfilling your goals. So after graduation, you should have a higher level of expertise in the particular educational course you have done. For a wide number of students,however it is still difficult to choose the right career path after their college education. With changes in the world of work, individuals have a wide range of careers to choose from, some of which didn’t even exists few years ago. Thus, when selecting the best career path after education, you may need to get guidance and support from professional mentors.

You will have to understand potential growth, competitiveness, workplace quality, job conditions etc. before you select a suitable profession after your degree. You've came so far in your educational journey, and it's now the best time to make the right career choice as this could undoubtedly pave the way for a bright future. This isn't as easy and simple as it seems. Today the employment market is growing and changing rapidly and ,many gig jobs are also become increasingly popular.

Considering our strong researched base and advanced analytics used, our tests for career guidance after graduation will provide the direction and impetus for you to plan your future.</p>
        </div>
        <h1 className='font-bold p-5 ml-5'>Meet Our Team who will guide you to resolve all this!</h1>
        {
                services.map(service=>
                <div className='p-5 ml-5' service={service}>
                      
                      <h2 className='text-2xl font-semibold'>{service.Counselor_Name}</h2>  
                </div> )
            }
        </>
    );
};

export default Team;