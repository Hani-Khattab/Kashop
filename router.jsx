import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/layouts/MainLayout.jsx";
import Home from "./src/pages/home/Home";
import Cart from "./src/pages/cart/Cart";
import Login from "./src/pages/auth/login/Login";
import Register from "./src/pages/auth/register/Register";
import Blogs from "./src/pages/Blogs/Blogs.jsx";
import Shop from "./src/pages/shop/Shop.jsx";
import Contact from "./src/pages/contact/Contact.jsx";
import About from "./src/pages/About/About.jsx";


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
            {
                path:'/blog',
                element:<Blogs />
            },
            {
                path:'/shop',
                element:<Shop />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/about',
                element:<About />
            },
            
        ]
    }
  
]);

export default router;