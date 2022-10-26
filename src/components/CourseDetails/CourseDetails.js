import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';

const CourseDetails = () => {
     const details = useLoaderData();
     

     return (
          <div className='m-auto'>
                         <div className="card m-auto w-96 bg-base-100 shadow-xl">

                              {
                                   details.map(detail=> <ShowDetails
                                   detail={detail}
                                   key={detail.id}
                                   ></ShowDetails>)
                              }

                              </div>
               
              
          </div>
     );
};

export default CourseDetails;