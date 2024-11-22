import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
      
  return (
    <div className="flex gap-10">
      <div className="w-4/12 md:w-1/4 lg:w-1/5">
        <Sidebar />
      </div>
      <div className="w-8/12 md:w-3/4 lg:w-4/5 py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
