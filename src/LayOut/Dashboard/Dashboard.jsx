import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaOrcid,
  FaSearch,
  FaShoppingCart,
  FaStore,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
// import useCart from "../../Hooks/useCart";
// import useAdmin from './../../assets/Hooks/useAdmin';

const Dashboard = () => {
  //   const [cart]=useCart();
  // TODO:get isAdmin value from the database
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-56 min-h-screen bg-green-200">
        <ul className="menu text-2xl">
          {
          
          isAdmin ? (
            <>
            <li>
                <NavLink to="/dashboard/organizerProfile">
                  <FaHome></FaHome>
                  Organizer Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addCamp">
                  <FaCalendar></FaCalendar>
                  Add Camp
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCamp">
                  <FaShoppingCart></FaShoppingCart>
                  Manage Camp{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageRegisterdeCamp">
                  <FaAd></FaAd>
                  Manage Registerde Camp
                </NavLink>
              </li>
             
            </>
          ) 
          :
          
           (
            <>
              <li>
                <NavLink to="/dashboard/profileManagement">
                  <FaHome></FaHome>
                  Profile Management
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/registeredCamp">
                  <FaCalendar></FaCalendar>
                  Registered Camp
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaShoppingCart></FaShoppingCart>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/feedback&Rating">
                  <FaAd></FaAd>
                  Feedback & Rating
                </NavLink>
              </li>
           
            </>
          )}
          {/* Shared navlinks */}

          <div className="divider text-black font-extrabold"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/campDetails">
              <FaSearch />
              Camp Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/availableCamps">
              <FaOrcid />
              Available Camps
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;


