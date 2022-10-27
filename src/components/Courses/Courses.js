import { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
// import CourseDetails from '../CourseDetails/CourseDetails';

import './courses.css'

const Courses = () => {

     const category = useLoaderData()
     // console.log(category);


     return (
          <div className=' course-container'>
               <Category  category={category} ></Category>
               <Outlet></Outlet>
              
          

          </div>
     );
};

export default Courses;