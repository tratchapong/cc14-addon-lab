import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Header from '../pages/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AHome from '../pages/AHome'
import Form from '../pages/Form'
import Product from '../pages/Product'

export default function Router() {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <>
        <Header />
        <Outlet />
      </>,
      children : [
        { index: true , element: <Home/> },
        // { index: true , element: <AHome/> },
        { path: '/login' , element: <Login />},
        { path: '/register' , element: <Register/> },
        { path: '/form' , element: <Form/> },
        { path: '/logout' , element: <div className="text-xl">Logout</div> },
        { path: '/product' , element: <Product/> },
        { path: '*', element: <h1 className='text-xl text-red-300'>Page not found</h1>}
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
