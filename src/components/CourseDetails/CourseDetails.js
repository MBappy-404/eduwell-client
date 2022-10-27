import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';

const CourseDetails = () => {
     const details = useLoaderData();
     console.log(details);


     return (
          <div className='m-auto'>
               <div className="card m-auto w-80 mb-10 p-5 mr-7 md:mr-0 mt-24 md:mt-0 md:w-96 lg:w-full bg-base-100 shadow-xl">

                    <ShowDetails key={details.id } details={details} ></ShowDetails>

               </div>


          </div>
     );
};

export default CourseDetails;