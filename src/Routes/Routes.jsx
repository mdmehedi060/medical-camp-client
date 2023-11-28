import { createBrowserRouter } from "react-router-dom";
import Main from "./../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "./../Pages/Login/Login";
import Registation from "./../Pages/Registation/Registation";
import CampDetails from "../Pages/CampDetails/CampDetails";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Dashboard from "./../LayOut/Dashboard/Dashboard";
import PrivateRout from "./PrivateRout";
import OrganizerProfile from "../Pages/Dashboard/OrganizerProfile/OrganizerProfile";
import AddCamp from "./../Pages/Dashboard/AddCamp/AddCamp";
import ManageCamp from "../Pages/Dashboard/ManageCamp/ManageCamp";
import ManageRegisteredCamp from "../Pages/Dashboard/ManageRegisteredCamp/ManageRegisteredCamp";
import Update from "../Pages/Dashboard/Update/Update";
import ProfileManagement from "../Pages/Dashboard/ProfileManagement/ProfileManagement";
import RegisteredCamp from "../Pages/Dashboard/RegisteredCamp/RegisteredCamp";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import FeedBack from "../Pages/Dashboard/FeedBack/FeedBack";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/camp-details/:id",
        element: <CampDetails></CampDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addcamp/${params.id}`),
      },
      {
        path: "/availableCamps",
        element: <AvailableCamps></AvailableCamps>,
        loader: () => fetch("http://localhost:5000/addcamp"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Registation></Registation>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/joincamp/${params?.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRout>
        <Dashboard></Dashboard>
      </PrivateRout>
    ),
    children: [
      // Organizer(Admin)
      {
        path: "organizerProfile",
        element: (
          <AdminRoute>
            <OrganizerProfile></OrganizerProfile>
          </AdminRoute>
        ),
      },
      {
        path: "addCamp",
        element: (
          <AdminRoute>
            <AddCamp></AddCamp>
          </AdminRoute>
        ),
      },
      {
        path: "manageCamp",
        element: (
          <AdminRoute>
            <ManageCamp></ManageCamp>
          </AdminRoute>
        ),
      },
      {
        path: "manageRegisterdeCamp",
        element: (
          <AdminRoute>
            <ManageRegisteredCamp></ManageRegisteredCamp>
          </AdminRoute>
        ),
      },

      // Perticepent(User)

      {
        path: "profileManagement",
        element: <ProfileManagement></ProfileManagement>,
      },
      {
        path: "registeredCamp",
        element: <RegisteredCamp></RegisteredCamp>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "feedback&Rating",
        element: <FeedBack></FeedBack>,
      },
    ],
  },
]);
