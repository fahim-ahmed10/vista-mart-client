import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-purple-300 border-r-2 border-purple-700 min-h-screen">
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="/dashboard/overview">Overview</NavLink>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
