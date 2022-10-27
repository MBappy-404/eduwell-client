import React from 'react';
 


const ShowDetails = ({ details }) => {

     const { description, logo, rating, enrolled, name } = details;
     

     const handleCheckOut = () =>{
          
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
                         <strong>  <p>Rating: {rating}</p></strong>
                         <strong> <p>Enrolled: {enrolled}</p></strong>
                         {/* The button to open modal */}
                         <label htmlFor="my-modal-6" className="btn btn-sm modal-button">Enroll Now</label>

                         {/* Put this part before </body> tag */}
                         <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                         <div className="modal modal-bottom sm:modal-middle">
                              <div className="modal-box">
                                   <h3 className="font-bold text-lg">Checkout!</h3>
                                    <p> Course: <strong>{name}</strong>.</p> 
                                    <p>Price: <strong>$100 <small> <del>$180</del> </small></strong>. </p>
                                    <p>Course-Duration: 1 Year.</p>
                                    <p>Rating: <strong>{rating}</strong></p>

                                   <div className="modal-action">
                                        <label htmlFor="my-modal-6" onClick={handleCheckOut} className="btn">Buy</label>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default ShowDetails;


 