import { Navigate, useLocation } from "react-router-dom";
import useAuth from './../assets/Hooks/useAuth';
import useOrganizer from "../assets/Hooks/useOrganizer";





const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isOrganizer, isOrganizerLoading] = useOrganizer();
    const location = useLocation();

    if (loading || isOrganizerLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isOrganizer) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;