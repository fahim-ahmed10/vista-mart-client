import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
