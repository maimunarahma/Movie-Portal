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
import Error from './Components/Error.jsx';
import Update from './Components/Update.jsx';
import UpcomingMovies from './Components/UpcomingMovies.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <Error />,
      element: (
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      ),
      children: [
        {
          path: '/',
          element: <Banner />,
          // loader: () => fetch('https://movie-server-b8t3qhy1x-maimuna-myshas-projects.vercel.app/featured'),
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/addMovies',
          element: <Private><AddMovies /></Private>,
        },
        {
          path: '/allMovies',
          element: <AllMovies />,
        },
        {
          path: '/details/:id',
          element: <Details />,
          loader: ({ params }) =>
            fetch(`https://movie-server-indol.vercel.app/details/${params.id}`),
        },
        {
          path: '/favourites/:email',
          element: <MyFavourite />,
          loader: ({ params }) => fetch(`https://movie-server-indol.vercel.app/favourites/${params.email}`),
        },
        {
          path: '/update/:id',
          element: <Private><Update /></Private>,
          loader:  ({ params }) => fetch(`https://movie-server-indol.vercel.app/details/${params.id}`) 
            
          
        },
        {
          path: '/upcoming',
          element: <UpcomingMovies />,
        },
      ],
    }
  ],
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
      <RouterProvider router={router}  
 
  />
      </Authentication>
  </StrictMode>,
)
