import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';

const Home = () => {

     const courseCategory = useLoaderData();
     // console.log(course);
     return (
          <div>
               <div className='grid  grid-cols-2 m-5'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">

                         {
                              courseCategory.map(category => <CourseCategory
                                   key={category.id} 
                                   category={category}
                                   ></CourseCategory>)
                         }

                    </div>
               </div>
          </div>
     );
};

export default Home;