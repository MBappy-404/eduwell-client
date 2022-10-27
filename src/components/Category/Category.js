import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
     return (
          <div className='grid grid-cols-1  '>
               <div className=' flexible bg-purple-500 w-36 lg:w-full p-5 hidden lg:block  shadow-black '>
                    <h2 className='text-center lg:text-2xl mr-0 lg:mr-10 mt-10 font-semibold text-purple-100 my-2'>Course Name</h2>
                    {
                         category.map(category => <button key={category.id}
                              className='btn btn-outline font-semibold w-16  text-xs lg:w-40 col-span-1 mx-4 mt-5 my-2'>
                              <Link to={`/courses/${category.category_id}`}>{category.name}</Link>
                         </button>
                         )
                    }
               </div>

               <div className='m-5 sm:block lg:hidden'>
                    <div className="dropdown   dropdown-start">
                         <label tabIndex={0} className="btn  btn-primary">
                              <div className="">
                                   <h3 className='font-sm'>Vew Course</h3>
                              </div>
                         </label>
                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                              {
                                   category.map(category => <li ><Link to={`/courses/${category.category_id}`}>{category.name}</Link></li>)
                              }

                         </ul>
                    </div>
               </div>

          </div>
     );
};

export default Category;