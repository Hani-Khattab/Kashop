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
import ProductsDetails from "./src/pages/products/ProductsDetails.jsx";
import CategoriesPage from "./src/pages/Categories/CategoriesPage.jsx";
import ProtectedRouter from "./src/ProtectedRouter.jsx";
import Checkout from "./src/pages/Checkout/Checkout.jsx";
import Profile from "./src/pages/profile/Profile.jsx";
import ProfileInfo from "./src/pages/profile/ProfileInfo.jsx";
import ProfileOrders from "./src/pages/profile/ProfileOrders.jsx";
import ForgetPassword from "./src/pages/auth/ForgetPassword/ForgetPassword.jsx";
import ResetPassword from "./src/pages/auth/ResetPassword/ResetPassword.jsx";


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
                
                path:'cart',
                element:
                <ProtectedRouter>
                <Cart />
                </ProtectedRouter>
            },
            {
                
                path:'profile',
                element:
                <ProtectedRouter>
                <Profile />
                </ProtectedRouter>,
                children:[
                    {
                        index:true,
                        element:<ProfileInfo />
                    },
                    {
                        path:'orders',
                        element:<ProfileOrders />
                    }
                ]
            },
             {
                
                path:'/checkout',
                element:
                <ProtectedRouter>
                <Checkout />
                </ProtectedRouter>
            },
            {
                path:'Login',
                element:<Login />
            },
            {
                path:'ForgetPassword',
                element:<ForgetPassword />
            },
            {
                path:'ResetPassword',
                element:<ResetPassword />
            },
            {
                path:'categories',
                element:<CategoriesPage />
            },
            
            {
                path:'product/:id',
                element:<ProductsDetails />
            },
            {
                path:'register',
                element:<Register />
            },
            {
                path:'blog',
                element:<Blogs />
            },
            {
                path:'shop',
                element:<Shop />
            },
            {
                path:'contact',
                element:<Contact />
            },
            {
                path:'about',
                element:<About />
            },
            
        ]
    }
  
]);

export default router;