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
import Private from './Route/Private.jsx';
import AllMovies from './Components/AllMovies.jsx';
import Details from './Components/Details.jsx';
import MyFavourite from './Components/MyFavourite.jsx';
import { ThemeProvider } from './Components/ThemeProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeProvider><Root></Root></ThemeProvider>,
    children:[{
      path:'/',
      element:<Banner></Banner>,
      loader:()=>fetch('http://localhost:4000/featured')
    },{
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element:<Register></Register>

    },
    {
      path:'/addMovies',
      element:<Private><AddMovies></AddMovies></Private>
    },{
      path:'/allMovies',
      element:<AllMovies></AllMovies>,
      loader:()=>fetch('http://localhost:4000/addMovies')
    },{
      path:'/details/:id',
      element:<Details></Details>,
      loader:({params})=>fetch(`http://localhost:4000/details/${params.id}`)
    },
  {
    path:'/favourites/:email',
    element: <MyFavourite></MyFavourite>,
    loader:({params})=> fetch(`http://localhost:4000/favourites/${params.email}`)
  },
   
  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
      <RouterProvider router={router} />
      </Authentication>
  </StrictMode>,
)
