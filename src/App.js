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
import PrivateRoute from './Private/PrivateRoute';

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
          loader: () => fetch('https://edu-well-server.vercel.app/course-categories'),
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => fetch('https://edu-well-server.vercel.app/course-categories'),
        },

        {
          path: 'courses',
          element: <Courses></Courses>,
          loader: () => fetch(`https://edu-well-server.vercel.app/category`),
          children: [

            {
              path: '',
              element: <LandingPage></LandingPage>,
            },

            {
              path: '/courses/:id',
              element: <Course></Course>,
              loader: ({ params }) => fetch(`https://edu-well-server.vercel.app/category/${params.id}`)
            },
            {
              path: '/courses/singleItem/:id',
              loader: ({ params }) => fetch(`https://edu-well-server.vercel.app/course-details/${params.id}`),
              element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute> ,
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
