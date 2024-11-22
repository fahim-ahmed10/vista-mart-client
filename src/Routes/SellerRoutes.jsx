import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Loading/Loading";
import { PropTypes } from 'prop-types';
import useUserData from "../hooks/useUserData";

const SellerRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const {userData} = useUserData();
  const location = useLocation();

  if (loading || !userData?.role) {
    return <Loading />;
  }
  if (user && userData.role === "seller") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

// Prop validation
SellerRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SellerRoutes;
