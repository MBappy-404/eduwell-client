import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ShowCategory = ({ data }) => {
     const { name, logo, description, rating, id } = data;
   


     return (
          <div className=' flex mb-16 md:mb-24  mt-24 m-0 md:m-32  md:mt-20 justify-center'>
               <div className="card w-60 mr-10 md:w-full m-0   bg-base-100 shadow-purple-900 shadow-2xl">
                    <figure className="px-10 pt-10">
                         <img src={logo}  alt="Shoes" className="rounded-xl w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                         <h2 className="card-title">{name}</h2>
                         <p>{description.slice(0, 200)}.....</p>
                         <div className="card-actions flex self-center mt-5 justify-evenly">
                              <p>Rating : <strong>{rating}  <small> <FaStar className=' inline-block w-4 mb-1 text-yellow-600'></FaStar></small>  </strong></p>
                              <button className="btn btn-primary ml-5 btn-sm"> <Link to={`/courses/singleItem/${id}`}>View Details</Link> </button>

                             
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ShowCategory;