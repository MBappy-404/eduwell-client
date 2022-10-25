import React from 'react';
import image from '../../Assets/images/pngwing.com (6).png'

const LandingPage = () => {
     return (
          <div>
               <h1 className='text-center text-3xl mt-10 font-bold'>Select Your Favorite Course From Category</h1>
               <div className=' flex justify-center'>
                    <img src={image} className='w-2/6  p-10' alt="" />
               </div>
          </div> 
     );
};

export default LandingPage;