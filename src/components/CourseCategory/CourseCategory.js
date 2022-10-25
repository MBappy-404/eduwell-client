import React from 'react';

const CourseCategory = ({category}) => {
     // console.log(category);
     const { name, logo, enrolled} = category;
     return (
          <div>
                <div className="card card-compact w-64 m-auto lg:w-80 bg-base-100 shadow-xl">
               <figure><img src={logo} alt="Shoes" className=' w-72 h-64 ' /></figure>
               <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex  justify-start">
                         <p className='mt-2'>Enrolled: {enrolled}</p>
                         <button className="btn btn-sm btn-primary">View Details</button>
                    </div>
               </div>
               </div>
          </div>
     );
};

export default CourseCategory;