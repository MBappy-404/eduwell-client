import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
// import CourseDetails from '../CourseDetails/CourseDetails';

import './courses.css'

const Courses = () => {

     // const courses = useLoaderData();
     // console.log(courses);
     const [categories, setCategories] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/course-categories')
               .then(res => res.json())
               .then(data => setCategories(data));
     }, [])


     return (
          <div className=' course-container'>
              
              <div className='bg-purple-500 sticky top-0'>
                         {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}> <p className='text-white text-center mt-5'>{category.name}</p> </Link> 
                    </p>)
                }


               </div>


               <div className='m-10'>
                    <Category></Category>
               </div>

          </div>
     );
};

export default Courses;