import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Login from './components/Lgin/Login';
import Registration from './components/Registration/Registration';
import Blog from './components/Blog/Blog';
import Error from './components/ErrorPage/Error';
import Course from './components/Course/Course';
import LandingPage from './components/CourseLandingPage/LandingPage';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [

        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/course-categories'),
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/course-categories'),
        },
      
        {
          path: 'courses',
          element: <Courses></Courses>,
          loader: () => fetch(`http://localhost:5000/category`),
          children: [

            {
              path:'',
              element:<LandingPage></LandingPage>,
            },
      
            {
              path: '/courses/:id',
              element: <Course></Course>,
              loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
              path:'/courses/details/:id',
              loader: ({ params }) => fetch(`http://localhost:5000/category/details/${params.id}`),
              element: <CourseDetails></CourseDetails>,
            },

          ]

        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]
    }
  ])
  return (
    <div className="">

      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
