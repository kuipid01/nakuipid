/* eslint-disable no-unused-vars */

import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Register from './pages/register/Register';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
function App() {

  const Layout = () =>{
    return(
      <div className="main">
        <Navbar/>
       <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
      ]
    
    },
    {
      path:"/login",
element:<Login/>
    }
    ,
    {
      path:"/register",
element:<Register/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
