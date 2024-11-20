import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2 className="text-2xl">Hello kitty</h2>
      <Outlet />
      
    </div>
  );
};

export default MainLayout;
