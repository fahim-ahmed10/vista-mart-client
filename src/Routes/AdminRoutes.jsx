import { PropTypes } from "prop-types";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading/Loading";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { userData } = useUserData();
  const location = useLocation();

  if (loading || !userData?.role) {
    return <Loading />;
  }
  if (user && userData.role === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
// Prop validation
AdminRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminRoutes;
