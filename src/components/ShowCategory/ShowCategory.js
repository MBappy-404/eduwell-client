import React from 'react';
import { Link } from 'react-router-dom';

const ShowCategory = ({ data }) => {
     const { name, logo, description, rating, id } = data;
   


     return (
          <div className=' flex  justify-center'>
               <div className="card w-60 mr-10 mb-10  md:w-96 mt-24  md:mt-10 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                         <img src={logo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                         <h2 className="card-title">{name}</h2>
                         <p>{description.slice(0, 200)}.....</p>
                         <div className="card-actions flex self-center mt-5 justify-between">
                              <p>Rating : {rating}</p>
                              <button className="btn btn-primary ml-5 btn-sm"> <Link to={`/courses/singleItem/${id}`}>View Details</Link> </button>

                             
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ShowCategory;