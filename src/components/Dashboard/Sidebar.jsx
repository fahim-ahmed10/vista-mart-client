import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaHome } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { RiLogoutBoxLine } from "react-icons/ri";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2, MdOutlineManageAccounts } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add Products",
    icon: <IoMdAddCircleOutline />,
  },
];

const adminRoutes = [
  {
    id: 1,
    route: "/dashboard/manage-users",
    title: "Manage Users",
    icon: <MdOutlineManageAccounts />,
  },
];

const Sidebar = () => {
  const { logOut } = useAuth();
  const { userData, isLoading, error } = useUserData();
  console.log(userData);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <div>Loading...</div>; // Display a loader while data is being fetched
  }

  if (error || !userData?.role || userData?.role === "buyer") {
    return (
      <div className="bg-orange-50 border-r-2 border-slate-500 min-h-screen px-4 py-8">
        <h4 className="text-2xl md:text-xl lg:text-2xl font-bold pt-2 md:pt-2 lg:pt-3 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Vista Mart
        </h4>
        <ul className="flex flex-col gap-2 font-medium">
          <NavLink to="/dashboard/overview">
            <li className="btn justify-start bg-white w-full">
              <GrOverview />
              Overview
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="btn justify-start bg-white w-full">
              <FaHome />
              Home
            </li>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="btn justify-start bg-white w-full"
          >
            <RiLogoutBoxLine />
            Logout
          </button>
        </ul>
      </div>
    );
  }
  if (userData.role === "seller") {
    return (
      <div className="bg-orange-50 border-r-2 border-slate-500 min-h-screen px-4 py-8">
        <h4 className="text-2xl md:text-xl lg:text-2xl font-bold pt-2 md:pt-2 lg:pt-3 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Vista Mart
        </h4>
        <ul className="flex flex-col gap-2 font-medium">
          <NavLink to="/dashboard/overview">
            <li className="btn justify-start bg-white w-full">
              <GrOverview />
              Overview
            </li>
          </NavLink>
          {userData.role === "seller" &&
            sellerRoutes.map((route) => (
              <NavLink key={route.id} to={route.route}>
                <li className="btn justify-start bg-white w-full">
                  <>{route.icon}</>
                  <p>{route.title}</p>
                </li>
              </NavLink>
            ))}
          <NavLink to="/">
            <li className="btn justify-start bg-white w-full">
              <FaHome />
              Home
            </li>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="btn justify-start bg-white w-full"
          >
            <RiLogoutBoxLine />
            Logout
          </button>
        </ul>
      </div>
    );
  }
  if (userData.role === "admin") {
    return (
      <div className="bg-orange-50 border-r-2 border-slate-500 min-h-screen px-4 py-8">
        <h4 className="text-2xl md:text-xl lg:text-2xl font-bold pt-2 md:pt-2 lg:pt-3 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Vista Mart
        </h4>
        <ul className="flex flex-col gap-2 font-medium">
          <NavLink to="/dashboard/overview">
            <li className="btn justify-start bg-white w-full">
              <GrOverview />
              Overview
            </li>
          </NavLink>
          {sellerRoutes.map((route) => (
            <NavLink key={route.id} to={route.route}>
              <li className="btn justify-start bg-white w-full">
                <>{route.icon}</>
                <p>{route.title}</p>
              </li>
            </NavLink>
          ))}
          {adminRoutes.map((route) => (
            <NavLink key={route.id} to={route.route}>
              <li className="btn justify-start bg-white w-full">
                <>{route.icon}</>
                <p>{route.title}</p>
              </li>
            </NavLink>
          ))}
          <NavLink to="/">
            <li className="btn justify-start bg-white w-full">
              <FaHome />
              Home
            </li>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="btn justify-start bg-white w-full"
          >
            <RiLogoutBoxLine />
            Logout
          </button>
        </ul>
      </div>
    );
  }
};

export default Sidebar;
