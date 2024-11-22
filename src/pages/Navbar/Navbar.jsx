import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="pb-16">
      <div className="fixed z-50 top-0 left-0 right-0 w-full border-b-2">
        <div className="navbar max-w-screen-2xl mx-auto navBgColor fontPoppins px-4 md:px-10 lg:px-16">
          <div className="navbar-start gap-4 md:gap-6 lg:gap-0 lg:justify-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="rounded-lg lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-100 hover:bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navOptions}
              </ul>
            </div>
            <div className="h-7 flex items-center gap-1">
              <Link to="/">
                <h2 className="text-2xl md:text-3xl lg:text-4xl pt-1 md:pt-2 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Vista Mart
                </h2>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="mr-4 md:mr-8">
                  <button>
                    <Link to={"/cart"}>
                      <span>
                        <FaShoppingCart
                          size={26}
                          className="inline-block mr-2 mb-1"
                        />
                      </span>
                      Cart
                    </Link>
                  </button>
                </div>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="rounded-lg">
                    <span>
                      <IoMdLogIn size={26} className="inline-block mr-2 mb-1" />
                    </span>
                    {user?.displayName && <span>{user.displayName}</span>}
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content right-0 items-start hover:bg-white bg-gray-100 text-black rounded-box z-[1] mt-3 w-52 p-2 py-5 shadow"
                  >
                    <li className="w-full ">
                      <Link to="/dashboard/overview">
                        <span>
                          <MdOutlineDashboard
                            size={26}
                            className="inline-block"
                          />
                        </span>
                        Dashboard
                      </Link>
                    </li>
                    <li className="w-full ">
                      <button onClick={handleLogOut}>
                        <span>
                          <RiLogoutCircleLine
                            size={26}
                            className="inline-block"
                          />
                        </span>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <button>
                  <Link to={"/login"}>
                    <span>
                      <IoMdLogIn size={26} className="inline-block mr-2 mb-1" />
                    </span>
                    Log in
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
