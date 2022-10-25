
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import logo from '../../Assets/images/logo.png';


const Header = () => {

     const [navbar, setNavbar] = useState(false);
     const { user, logOut } = useContext(AuthContext);
     const handleLogOut = () => {
          logOut()
               .then(() => { })
               .catch(error => console.error(error))
     }



     return (
          <nav className="w-full bg-purple-500 shadow">
               <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                         <div className="flex items-center justify-between py-3 md:py-5 md:block">
                              <a href="javascript:void(0)">
                                   <img src={logo} alt="" />
                              </a>
                              <div className="md:hidden">
                                   <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                   >
                                        {navbar ? (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="w-6 h-6 text-white"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                             >
                                                  <path
                                                       fillRule="evenodd"
                                                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                       clipRule="evenodd"
                                                  />
                                             </svg>
                                        ) : (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="w-6 h-6 text-white"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                  strokeWidth={2}
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       d="M4 6h16M4 12h16M4 18h16"
                                                  />
                                             </svg>
                                        )}
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div>
                         <div
                              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                   }`}
                         >
                              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                   <li className="text-white hover:text-indigo-200">
                                        <a href="javascript:void(0)"> <Link to="/home">Home</Link> </a>
                                   </li>
                                   <li className="text-white hover:text-indigo-200">
                                        <a href="javascript:void(0)"> <Link to="/courses">Courses</Link> </a>
                                   </li>
                                   <li className="text-white hover:text-indigo-200">
                                        <a href="javascript:void(0)">FAQ</a>
                                   </li>
                                   <li className="text-white hover:text-indigo-200">
                                        <a href="javascript:void(0)"> <Link to="/blog">Blog</Link> </a>
                                   </li>
                              </ul>





                              <div className="mt-3 m-5 space-y-2 lg:hidden md:inline-block">



                                   <label className="swap   swap-rotate">

                                        {/* <!-- this hidden checkbox controls the state --> */}
                                        <input type="checkbox" />

                                        {/* <!-- sun icon --> */}
                                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* <!-- moon icon --> */}
                                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                   </label>


                                   {
                                        user?.uid ?
                                             <>
                                                  <span className='text-black text-bold mr-3'>  {user?.displayName}</span>
                                                  <a
                                                       href="javascript:void(0)"
                                                       className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                                  >
                                                       <Link onClick={handleLogOut} to="/login">Log out</Link>
                                                  </a>
                                             </>
                                             :
                                             <>
                                                  <a
                                                       href="javascript:void(0)"
                                                       className="px-4 py-2 m-3 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                                  >
                                                       <Link to="/login">Sign in</Link>
                                                  </a>
                                                  <a
                                                       href="javascript:void(0)"
                                                       className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                                  >
                                                       <Link to="/register">  Sign up</Link>
                                                  </a>
                                             </>
                                   }

                              </div>
                         </div>
                    </div>








                    <div className="hidden  space-x-2 md:inline-block">
                         <div className='flex'>
                              <div className="flex-none lg:block">





                                   <label className="swap swap-rotate mr-5">

                                        {/* <!-- this hidden checkbox controls the state --> */}
                                        <input type="checkbox" />

                                        {/* <!-- sun icon --> */}
                                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* <!-- moon icon --> */}
                                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                   </label>




                                   {
                                        user?.uid ?

                                             <>
                                                  <div className="dropdown dropdown-end">
                                                       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                            <div className="w-12 rounded-full">
                                                                 {user?.photoURL ?
                                                                      <><img src={user?.photoURL} title={user.displayName} className='mb-1' /></>

                                                                      :

                                                                      <> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU" className='mb-1' title={user?.displayName} />
                                                                      </>
                                                                 }
                                                            </div>
                                                       </label>
                                                       <ul tabIndex={0} className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-purple-400 rounded-box w-64">
                                                            <li>
                                                                 <a className="justify-between">


                                                                      {
                                                                           user?.uid ?
                                                                                <span className='text-black text-bold mr-3'>  {user?.displayName} <br />

                                                                                     {user?.email}

                                                                                </span>

                                                                                :
                                                                                ' '
                                                                      }

                                                                 </a>
                                                            </li>

                                                       </ul>
                                                  </div>


                                             </>

                                             :

                                             ''
                                   }





                              </div>

                              <div>

                                   {
                                        user?.uid ?
                                             <>

                                                  <a>
                                                       <Link onClick={handleLogOut} to="/login"> <button className="btn ml-3">Log out</button></Link>
                                                  </a>
                                             </>
                                             :
                                             <>
                                                  <a>
                                                       <Link to="/login"> <button className="btn btn-primary ml-3">Sign in</button></Link>
                                                  </a>
                                                  <a>
                                                       <Link to="/register"> <button className="btn btn-primary ml-3">Sign Up</button></Link>
                                                  </a>
                                             </>
                                   }

                              </div>
                         </div>


                    </div>
               </div>
          </nav>
     );
};

export default Header;