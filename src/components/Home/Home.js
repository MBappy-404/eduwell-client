import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';
import hero from '../../Assets/images/about-left-image.png';

const Home = () => {

     const courseCategory = useLoaderData();
     // console.log(course);
     return (
          <div>

               {/* HERO SECTION  */}

               <div className='grid grid-cols-1 sm:grid-row-reverse self-center lg:grid-cols-2 m-auto'>

                    <div>
                         <img src={hero} alt="" />
                    </div>
                    <div className=' m-10 font-bold self-center'>
                         <p className='text-2xl text-purple-400 mb-7'>Welcome To EduWell</p>
                         <p className='text-3xl lg:text-6xl  lg:leading-normal'> <span className=' text-purple-900'>Best Place To </span> <br />

                              <span className='text-purple-900 '> Learn Programing</span>  <br />
                              <span className='text-purple-600 '>Language!</span>  <br />

                         </p>

                    </div>

               </div>
                  
                  {/* COURSE SECTION  */}
                  
               <div className=' mt-16'>
                    <p className='text-center text-purple-700 font-semibold text-5xl '>Our Courses</p>


                    <div className='m-5  lg:grid-cols-3 md:grid-cols-2 gap-10 sm:grid-cols-1 grid'>

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