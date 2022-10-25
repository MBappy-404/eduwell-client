import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCategory from '../ShowCategory/ShowCategory';

const Course = () => {

     const data = useLoaderData();
     return (
          <div className='grid lg:grid-cols-1 md:grid-cols-1 gap-3'>
               {data.map( data => <ShowCategory key={data.id} data={data}></ShowCategory> )}
               
          </div>
     );
};

export default Course;