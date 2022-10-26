import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
     return (
          <div className='grid grid-cols-1  '>
               <div className=' flexible bg-purple-500 w-full p-5   shadow-black '>
                    <h2 className='text-center text-2xl mt-10 font-semibold text-purple-100 my-2'>Course Name</h2>
                    {
                         category.map(category => <button key={category.id}
                              className='btn btn-outline font-semibold w-30 lg:w-48 col-span-1 mx-4 mt-5 my-2'>
                                   <Link to={`/courses/${category.category_id}`}>{category.name}</Link>
                              </button>)
                    }

               </div>
               
          </div>
     );
};

export default Category;