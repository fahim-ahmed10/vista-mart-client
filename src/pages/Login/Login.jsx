import { Link, useLocation, useNavigate } from "react-router-dom";
import showPassLogo from "../../logos/show-pass.png";
import hidePassLogo from "../../logos/hide-pass.png";
import { FcGoogle } from "react-icons/fc";
import { IoWarningOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const [isPassVisible, setIsPassVisible] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const togglePassVisibility = () => {
    setIsPassVisible(!isPassVisible); // Toggle the password visibility
  };

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //sweetalert2
        Swal.fire({
          title: "User logged in successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          Swal.fire({
            title: error,
            showClass: {
              popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
            },
            hideClass: {
              popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
            },
          });
        }
      });

    reset();
    clearErrors();
  };

  return (
    <div className="hero bg-base-200 min-h-screen fontPoppins px-2 md:px-4 pt-8 md:pt-8 lg:pt-20">
      <div className="hero-content flex-col md:flex-col lg:flex-row gap-10 lg:gap-20 px-2 md:px-10">
        <div className="w-full sm:max-w-sm md:max-w-lg">
          <div className="flex items-center gap-1">
            <Link to="/">
              <h4 className="text-2xl md:text-4xl lg:text-4xl pt-2 md:pt-2 lg:pt-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Vista Mart
              </h4>
            </Link>
          </div>
          <div>
            {/* here titleClr css class act like global class from SignUp.css file */}
            <p className="text-xl md:text-xl mt-4 font-medium mb-3 titleClr">
              Login to your account
            </p>
            <p className="font-bold mb-3 lg:mb-5">
              Don{"'"}t have an account?
              <Link to="/signUp" className="linkClr ml-1">
                Sign Up
              </Link>
            </p>
            <div className="w-full">
              <button className="flex gap-4 items-center justify-center w-full input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-500">
                <div>
                  <FcGoogle size={30} color="green" />
                </div>
                <span className="font-semibold">Google</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="divider mt-0 h-0 mb-6 labelTextClr">
            Or with email and password
          </div>
          <div className="card bg-base-100 w-full sm:max-w-sm md:max-w-lg shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* email */}
              <div className="form-control relative">
                <label
                  htmlFor="email"
                  className="labelTextClr text-sm md:text-base font-medium pb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email must not be empty",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email format is not correct",
                    },
                  })}
                  placeholder="Enter email address"
                  className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                    errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                />
                <div>
                  <IoWarningOutline
                    size={18}
                    className={`absolute right-2 top-3 transform -translate-y-1/2 ${
                      errors.firstName ? "" : "hidden"
                    }`}
                  />
                </div>
                {errors.email && (
                  <div className="pt-1">
                    <span className="text-red-600 text-sm">
                      {errors.email.message}
                    </span>
                  </div>
                )}
              </div>
              {/* password */}
              <div className="form-control relative">
                <label
                  htmlFor="password"
                  className="labelTextClr text-sm md:text-base font-medium pb-1"
                >
                  Password
                </label>
                <input
                  type={isPassVisible ? "text" : "password"}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password must not be empty",
                    },
                  })}
                  placeholder="Enter your password"
                  className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                    errors.password
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                <div>
                  <IoWarningOutline
                    size={18}
                    className={`absolute right-2 top-3 transform -translate-y-1/2 ${
                      errors.firstName ? "" : "hidden"
                    }`}
                  />
                </div>
                {errors.password && (
                  <div className="pt-1">
                    <span className="text-red-600 text-sm">
                      {errors.password.message}
                    </span>
                  </div>
                )}
                <img
                  src={isPassVisible ? hidePassLogo : showPassLogo}
                  alt={isPassVisible ? "Hide password" : "Show password"}
                  width={20}
                  className="absolute right-3 top-8 transform translate-y-1/2 cursor-pointer"
                  onClick={togglePassVisibility}
                />

                <label className="flex justify-end pt-3">
                  <Link to="" className="pt-2 linkClr text-sm cursor-pointer">
                    Forgot password?
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-purple-600 hover:bg-purple-700 w-full mx-auto text-lg md:text-xl text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
