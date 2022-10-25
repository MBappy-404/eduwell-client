import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Category from './components/Category/Category';

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/course-categories'),
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/course-categories'),
        },
        {
          path:'/courses',
          element: <Courses></Courses>,

        },
        {
          path:'/category/:id',
          element: <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`),

        }

      ]
    }
  ])
  return (
    <div className="bg-dark">

   <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
