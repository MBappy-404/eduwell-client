import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
     return (
          <div className='grid grid-cols-1 gap-x-0 m-4  rounded-lg'>
               <div className=' flexible bg-blue-500 shadow-black rounded-lg'>
                    <h2 className='text-center text-2xl my-2'>Course Name</h2>
                    {
                         category.map(category => <button key={category.id}
                              className='btn btn-outline w-48 col-span-1 mx-4 my-2'>
                                   <Link to={`/courses/${category.category_id}`}>{category.name}</Link>
                              </button>)
                    }

               </div>
               
          </div>
     );
};

export default Category;