import { NavLink, Outlet } from "react-router-dom";
import {FaAd,FaCalendar,FaHome,FaOrcid,FaSearch,FaShoppingCart} from "react-icons/fa";
import useOrganizer from './../../assets/Hooks/useOrganizer';
// import useCamp from './../../assets/Hooks/useCamp';

const Dashboard = () => {
    // const [addcamp]=useCamp();
  // TODO:get isAdmin value from the database
  const [isOrganizer] = useOrganizer();
  return (
    <div className="flex">
      <div className="w-56 min-h-screen bg-green-200">
        <ul className="menu text-2xl">
          {
          
          isOrganizer ? 
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
           
          :
          
           
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
          
          
          }
          {/* Shared navlinks */}

          <div className="divider text-black font-extrabold"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            
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


