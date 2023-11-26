import {createBrowserRouter} from "react-router-dom";
import Main from './../LayOut/Main';
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Details/Details";
import Login from './../Pages/Login/Login';
import Registation from './../Pages/Registation/Registation';
import CampDetails from "../Pages/CampDetails/CampDetails";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Dashboard from './../LayOut/Dashboard/Dashboard';
import PrivateRout from './PrivateRout';




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/campDetails',
          element:<PrivateRout><CampDetails></CampDetails></PrivateRout>
        },
        {
          path:'/availableCamps',
          element:<AvailableCamps></AvailableCamps>
        },
        {
          path:'/camp-details/:id',
          element:<Details></Details>,
          loader:({params})=> fetch(`camps.json/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
      
        {
          path:'/register',
          element:<Registation></Registation>
        },
      ]
    },
    // {
    //   path:'/dashboard',
    //   element:<PrivateRout><Dashboard></Dashboard></PrivateRout>,
    //   children:[
    //     {
    //       path:'userHome',
    //       element:<UserHome></UserHome>
    //     },
    //     {
    //       path:'cart',
    //       element:<Cart></Cart>
    //     },
    //     {
    //       path:'payment',
    //       element:<Payment></Payment>
    //     },
    //     {
    //       path: 'paymentHistory',
    //       element: <PaymentHistory></PaymentHistory>
    //     },


    //     // admin
    //     {
    //       path:'adminHome',
    //       element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
    //     },
    //     {
    //       path:'additems',
    //       element:<AdminRoute><AddItems></AddItems></AdminRoute>
    //     },
    //     {
    //       path:'manageitems',
    //       element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
    //     },
    //     {
    //       path:'updateItem/:id',
    //       element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
    //       loader:({params})=>fetch(`https://bistro-boss-server-cyan-six.vercel.app/${params.id}`),
    //     },
    //     {
    //       path:'users',
    //       element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    //     },
        
    //   ]
    // },


  ]);


