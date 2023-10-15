import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './Componate/Addcoffee.jsx';
import UpdateCoffee from './Componate/UpdateCoffee.jsx';
import SingUp from './Componate/SingUp.jsx';
import Login from './Componate/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Componate/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('https://old-coffee-store-server-chfmbsvq3-sazins-projects.vercel.app/coffee')
  },
  {
    path:'/addCoffee',
    element: <Addcoffee></Addcoffee>
  },
  {
    path:'/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=> fetch(`https://old-coffee-store-server-chfmbsvq3-sazins-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path:'/singup',
    element: <SingUp></SingUp>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: ()=> fetch('https://old-coffee-store-server-chfmbsvq3-sazins-projects.vercel.app/users')

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>  
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
