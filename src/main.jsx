import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Login from './Components/Login.jsx';
import Banner from './Banner.jsx';
import Authentication from './Providers/Authentication.jsx';
import Register from './Components/Register.jsx';
import AddMovies from './Components/AddMovies.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path:'/',
      element:<Banner></Banner>
    },{
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element:<Register></Register>

    },
    {
      path:'/addMovies',
      element:<AddMovies></AddMovies>
    }
  
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
      <RouterProvider router={router} />
      </Authentication>
  </StrictMode>,
)
