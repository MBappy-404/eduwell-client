import React from 'react';

const ShowCategory = ({ data }) => {


     return (
          <div className='self-center m-10'>
               <div className="card card-side   shadow-2xl">
                    <figure><img src={data.logo} className='w-72' alt="Movie" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">{data.name}</h2>
                         <p>{data.description.slice(0, 200) } ......</p>
                         <div className="card-actions mt-5 justify-end">
                              <p>Ratings: {data.rating}</p>
                              <button className="btn btn-primary">View Details</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ShowCategory;