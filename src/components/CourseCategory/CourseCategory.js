import React from 'react';

const CourseCategory = ({category}) => {
     // console.log(category);
     const {id, name, logo, enrolled} = category;
     return (
          <div>
               <figure><img src={logo} alt="Shoes" /></figure>
               <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                         <button className="btn btn-primary">View Details</button>
                    </div>
               </div>
          </div>
     );
};

export default CourseCategory;