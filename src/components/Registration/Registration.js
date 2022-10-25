import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Registration = () => {
     const { createUser } = useContext(AuthContext);
     const navigate = useNavigate();
     const [error, setError] = useState([]);
     const MySwal = withReactContent(Swal)

     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;

          // console.log(name,email,password);
          if(password.length < 8 ){
               return setError('Password must be 8 character')
           }


          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                    setError('');
                    MySwal.fire({
                         title: 'Log in Success',
                         text: 'Now you can Book hotel room, Happy honeymoon',
                         icon: 'success',
                         confirmButtonText: 'Ok'
                       });
                    navigate('/home')

               })

               .catch(error => {
                    console.error(error);
                    setError(error.message);
               })
     };

     const { providerLogin } = useContext(AuthContext);
     const googleProvider = new GoogleAuthProvider();

     const handleGoogleSignIn = () => {

          providerLogin(googleProvider)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate('/home')
               })
               .catch(error => console.error(error));

     }
     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Register!</h1>
                              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">

                                   <form onSubmit={handleSubmit}>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Email</span>
                                             </label>
                                             <input type="text" name='username' placeholder="username" className="input input-bordered"  />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Email</span>
                                             </label>
                                             <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Password</span>
                                             </label>
                                             <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                             <label className="label">
                                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                  <a href=""> <Link to="/login">already have account</Link></a>
                                             </label>
                                        </div>
                                        <p className='text-warning'>{error}</p>
                                        <div className="form-control mt-6">
                                             <button className="btn btn-primary">Login</button>
                                        </div>
                                        <div className="form-control mt-6">
                                             <button onClick={handleGoogleSignIn} className="btn btn-primary">Login with Google</button>
                                        </div>
                                   </form>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Registration;