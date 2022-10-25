import React from 'react';

const Blog = () => {
     return (
          <div>

                 
                 <p className='text-3xl text-purple-300 text-center m-5'>BLOG POST</p>


               <div className="flex flex-col m-10">

                    {/* QUESTION NO 1 */}
                    <div className="grid card bg-base-300 rounded-box p-10">
                         <h2 className='text-2xl text-white'>1. What is cors?</h2> <br />
                         <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.
                              CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.</p>
                    </div>
                    <div className="divider"></div>

                       {/* QUESTION NO 2 */}
                    <div className="grid card bg-base-300 rounded-box p-10 ">

                         <h2 className='text-2xl text-white'>2. Why are you using firebase? What other options do you have to implement authentication?</h2> <br />

                         <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                              Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                         <br />
                         <div className=''>
                              <span className='text-xl'>What other options to implement authentication?</span> <br />
                              1. Cookie-Based authentication. <br />
                              2. Token-Based authentication. <br />
                              3. Third party access(OAuth, API-token) <br />
                              4. OpenId. <br />
                              5. SAML. <br />
                         </div>

                    </div>
                    <div className="divider"></div>

                     {/* QUESTION NO 3 */}
                    <div className="grid card bg-base-300 rounded-box p-10">

                         <h2 className='text-2xl text-white'>3. How does the private route work?</h2> <br />
                         <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                    </div>
                    <div className="divider"></div>

                      {/* QUESTION NO 4 */}
                    <div className="grid card bg-base-300 rounded-box p-10">
                         <h2 className='text-2xl text-white'> 4. What is Node? How does Node work?</h2> <br />
                         <p>Node.js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire. The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. Node’s approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads, including Apache HTTP Server, the various Java application servers, IIS and ASP.NET, and Ruby on Rails.
                              Node.js turns out to be quite useful for desktop applications in addition to servers. Also note that Node applications aren’t limited to pure JavaScript. You can use any language that transpiles to JavaScript, for example TypeScript and CoffeeScript. Node.js incorporates the Google Chrome V8 JavaScript engine, which supports ECMAScript 2015 (ES6) syntax without any need for an ES6-to-ES5 transpiler such as Babel.
                              Much of Node’s utility comes from its large package library, which is accessible from the npm command. NPM, the Node package manager, is part of the standard Node.js installation, although it has its own website.</p>
                    </div>
               </div>


          </div >
     );
};

export default Blog;