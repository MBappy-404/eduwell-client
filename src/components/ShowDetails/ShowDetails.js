import React from 'react';

const ShowDetails = ({ detail }) => {
     console.log(detail);
     return (
          <div>
               
                    <figure className="px-10 pt-10">
                         <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                         <h2 className="card-title">{detail.name}</h2>
                         <p>{detail.description}</p>
                         <div className="card-actions">
                              <button className="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
               
          </div>
     );
};

export default ShowDetails;