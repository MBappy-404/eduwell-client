import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';

const CourseDetails = () => {
     const details = useLoaderData();
     console.log(details);


     return (
          <div className='m-auto mb-10  p-0 md:m-16'>
               <div className="card m-auto w-80  p-5 mr-7 md:mr-0 mt-24 md:mt-0  md:w-96 lg:w-full  shadow-purple-900 shadow-2xl">

                    <ShowDetails key={details.id } details={details} ></ShowDetails>

               </div>


          </div>
     );
};

export default CourseDetails;