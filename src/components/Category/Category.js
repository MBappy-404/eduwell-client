import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCategory from '../ShowCategory/ShowCategory';

const Category = () => {

     const categoryes = useLoaderData();
     console.log(categoryes);

     return (
          <div>


               {/* <div>
                    <div className="card card-side bg-base-100 shadow-xl">
                         {

                              categoryes.map(category => <ShowCategory

                                   key={category.category_id}
                                   category={category}
                              ></ShowCategory>)

                         }
                    </div>

               </div> */}


          </div>
     );
};

export default Category;