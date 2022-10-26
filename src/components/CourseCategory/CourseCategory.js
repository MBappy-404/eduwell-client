import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({ category }) => {
     // console.log(category);
     const { name, logo, enrolled } = category;
     return (
          <div>
               <div className="card  m-auto lg:w-full shadow-2xl">
                    <figure><img src={logo} alt="Shoes" className='mt-5 w-72 h-64 ' /></figure>
                    <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <div className="flex  justify-start">
                              <p className='mt-2'>Enrolled: {enrolled}</p>
                              <button className="btn btn-sm btn-primary"> <Link to='/courses'>See Course</Link> </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CourseCategory;