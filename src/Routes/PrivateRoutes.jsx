import { PropTypes } from "prop-types";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

// Prop validation
PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoutes;
