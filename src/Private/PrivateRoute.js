import {useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const PrivateRoute = ({ children }) => {
     const { user } = useContext(AuthContext);
     const MySwal = withReactContent(Swal)

     if (user && user.uid) {
          return children;

     }
     
     return <Navigate to='/login'>
          {
               MySwal.fire({
                    title: 'You Need to First Login',
                    text: 'Please Login | Register',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
               })
          }
     </Navigate>


};

export default PrivateRoute;