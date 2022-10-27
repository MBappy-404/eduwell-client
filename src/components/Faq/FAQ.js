import React from 'react';
import './FAQ.css'

const FAQ = () => {
     return (
          <div>

               <div className='container flex mt-16 mb-16 justify-center'>
                    <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_419,h_301/https://www.newsoftwares.net/wp-content/uploads/2017/03/vector-faq.png" className='faq-hero sm:w-96' alt="" />
               </div>

               <div className='m-10'>

                    <h1 className='text-center text-purple-700 font-semibold text-3xl mb-5'>Frequently Asked Questions </h1>
                    <div className="grid card bg-purple-900  text-white shadow-2xl rounded-box p-10">
                         <h2 className='text-2xl text-white'>1. What is express js ?</h2> <br />
                         <p> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                    </div>
                    <div className="grid card bg-purple-900 mt-5  text-white shadow-2xl rounded-box p-10">
                         <h2 className='text-2xl text-white'>1. What is a server?</h2> <br />
                         <p>A server is a computer program or device that provides a service to another computer program and its user, also known as the client. In a data center, the physical computer that a server program runs on is also frequently referred to as a server. That machine might be a dedicated server or it might be used for other purposes.</p>
                    </div>
               </div>
          </div>

     );
};

export default FAQ;