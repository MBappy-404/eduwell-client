import React from 'react';
import image from '../../Assets/images/pngwing.com (6).png'

const LandingPage = () => {
     return (
          <div>
               <h1 className='text-center text-xl md:text-4xl mt-24 md:mt-10 mr-10 lg:mr-0 text-purple-600 font-bold'>Select Course From Category</h1>
               <div className=' flex justify-around'>
                    <img src={image} className='w-80 mr-20 lg:mr-0  p-10' alt="" />
               </div>
          </div> 
     );
};

export default LandingPage;