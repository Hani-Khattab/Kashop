import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/layouts/MainLayout.jsx";
import Home from "./src/pages/home/Home";
import Cart from "./src/pages/cart/Cart";
import Login from "./src/pages/auth/login/Login";
import Register from "./src/pages/auth/register/Register";


const router =  createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/cart',
                element:<Cart />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
        ]
    }
  
]);

export default router;