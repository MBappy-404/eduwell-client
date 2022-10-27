import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaStar,FaUserCheck } from "react-icons/fa";

const ShowDetails = ({ details }) => {

     const { description, logo, rating, enrolled, name } = details;
     const MySwal = withReactContent(Swal);

     const handleCheckOut = () => {

          MySwal.fire({
               title: `${name}-Enroll Successfully`,
               text: 'We send course access as soon as possible.',
               icon: 'success',
               confirmButtonText: 'Ok'
          });


     }
     return (
          <div>

               <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className=" w-64" />
               </figure>
               <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold ">{name} Programing</h2>
                    <p>{description}</p>
                    <div className=" card-actions flex justify-around  mt-5">
                         <strong>  <p>Rating: {rating} <FaStar className=' inline-block w-4 mb-1 text-yellow-600'/></p></strong>
                         <strong> <p>Enrolled: {enrolled}  <small> <FaUserCheck className=' inline-block w-4 mb-2'></FaUserCheck></small>  </p></strong>
                         {/* The button to open modal */}
                         <label htmlFor="my-modal-6" className="btn btn-sm modal-button">Enroll Now</label>

                         {/* Put this part before </body> tag */}
                         <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                         <div className="modal modal-middle">
                              <div className="modal-box">
                                   <h3 className="font-bold text-lg">Checkout!</h3>
                                   <p> Course: <strong>{name}</strong>.</p>
                                   <p>Price: <strong>$100 <small> <del>$180</del> </small></strong>. </p>
                                   <p>Course-Duration: 1 Year.</p>
                                   <p>Rating: <strong>{rating}</strong></p>

                                   <div className="modal-action">
                                        {/* The button to open modal */}
                                        
                                        <label htmlFor="my-modal-6" className="btn">
                                          not now
                                        </label>
                                        <label htmlFor="my-modal-6" onClick={handleCheckOut} className="btn">
                                             <Link to='/home'>Purchase</Link>
                                        </label>
                                       
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default ShowDetails;


