import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';

const Home = () => {

     const courseCategory = useLoaderData();
     // console.log(course);
     return (
          <div>
               <div className='m-5 lg:grid-cols-3 md:grid-cols-2 gap-10 sm:grid-cols-1 grid'>
                   

                         {
                              courseCategory.map(category => <CourseCategory
                                   key={category.id} 
                                   category={category}
                                   ></CourseCategory>)
                         }

                    
               </div>
          </div>
     );
};

export default Home;