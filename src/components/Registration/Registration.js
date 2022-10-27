import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Registration = () => {
     const { createUser, providerLogin, updateUserProfile,githubLogin } = useContext(AuthContext);
     const navigate = useNavigate();
     const [error, setError] = useState([]);
     const MySwal = withReactContent(Swal);
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.username.value;
          const email = form.email.value;
          const password = form.password.value;

          // console.log(name,email,password);
          if (password.length < 8) {
               return setError('Password must be 8 character')
          }

          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                    setError('');
                    handleUpdateUserProfile(name);
                    MySwal.fire({
                         title: 'Registration Success',
                         text: '',
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

     const handleGoogleSignIn = () => {
          providerLogin(googleProvider)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate('/home');
                    MySwal.fire({
                         title: 'Registration Success',
                         text: '',
                         icon: 'success',
                         confirmButtonText: 'Ok'
                    });
               })
               .catch(error => console.error(error));

     }

     const handleGitSignIn = () =>{

          githubLogin(githubProvider)
          .then(result => {
               const user = result.user;
               console.log(user);
               navigate('/home');
               MySwal.fire({
                    title: 'Registration Success',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'Ok'
               });
          })
          .catch(error => console.error(error));          

     }

     const handleUpdateUserProfile = (name) => {
          const profile = { displayName: name }
          updateUserProfile(profile)
               .then(() => { })
               .catch(error => console.error(error))

     }

     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="text-center lg:text-left">

                              <img src="https://nilgiricollege.ac.in/app/app-files/images/userlog.png" className='w-full lg:w-full' alt="" />
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                              <h1 className="text-3xl mt-3 text-center font-bold">Register now!</h1>
                              <div className="card-body">

                                   <form onSubmit={handleSubmit}>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Name</span>
                                             </label>
                                             <input type="text" name='username' placeholder="username" className="input input-bordered" />
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
                                             <button className="btn btn-primary">Register</button>
                                        </div>
                                        <h1 className='text-xl text-center text-purple-700 font-semibold mt-3'>Sign In With</h1>
                                        <div className=" flex justify-between mt-6">
                                             <button onClick={handleGoogleSignIn} className="btn w30 btn-primary">
                                                  <img src="https://freesvg.org/img/1534129544.png" className='w-6 mr-3' alt="" />
                                                    Google</button>
                                             <button onClick={handleGitSignIn} className="btn w30 btn-primary"> 
                                              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='w-7 mr-3' alt="" />
                                              Github</button>
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