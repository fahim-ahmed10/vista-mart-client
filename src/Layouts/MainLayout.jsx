import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      {!noHeaderFooter && <Navbar />}
      <div
        className={
          noHeaderFooter
            ? ""
            : "max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16"
        }
      >
        <Outlet />
      </div>
      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
