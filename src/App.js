import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Category from './components/Category/Category';
import Login from './components/Lgin/Login';
import Registration from './components/Registration/Registration';
import Blog from './components/Blog/Blog';
import Error from './components/ErrorPage/Error';
import Course from './components/Course/Course';
import LandingPage from './components/CourseLandingPage/LandingPage';

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
              path: '/courses/:name',
              element: <Course></Course>,
              loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            }

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
