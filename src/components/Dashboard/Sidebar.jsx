import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaHome } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = () => {
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-orange-50 border-r-2 border-slate-500 min-h-screen px-8 py-8">
      <h4 className="text-2xl md:text-xl lg:text-2xl font-bold pt-2 md:pt-2 lg:pt-3 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Vista Mart
      </h4>
      <ul className="flex flex-col gap-2 font-medium">
        <li className="btn justify-start bg-white">
          <GrOverview />
          <NavLink to="/dashboard/overview">Overview</NavLink>
        </li>
        <li className="btn justify-start bg-white">
          <FaHome />
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="btn justify-start bg-white">
          <RiLogoutBoxLine />
          <button onClick={handleLogOut}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
