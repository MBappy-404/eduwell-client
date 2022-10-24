import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/',
          element: <Home></Home>,
          // loader: fetch () => 
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
