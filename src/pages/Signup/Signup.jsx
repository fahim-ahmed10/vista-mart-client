import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoWarningOutline } from "react-icons/io5";
import showPassLogo from "../../logos/show-pass.png";
import hidePassLogo from "../../logos/hide-pass.png";

//custom css
import "./Signup.css";
import { AuthContext } from './../../providers/AuthProvider';
import Swal from "sweetalert2";
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm(); 

  const {createUser, logOut, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

  const [isNewPassVisible, setIsNewPassVisible] = useState(false);
  const [isConfirmPassVisible, setConfirmPassVisible] = useState(false);

  // Watch the password value from the form
  const newPassword = watch("newPassword", "");

  const toggleNewPassVisibility = () => {
    setIsNewPassVisible(!isNewPassVisible); // Toggle the password visibility
  };

  const toggleConfirmPassVisibility = () => {
    setConfirmPassVisible(!isConfirmPassVisible); // Toggle the password visibility
  };
  const onSubmit = (data) => {
     //create user
     createUser(data.email, data.newPassword)
     .then((result) => {
       const loggedUser = result.user;
       console.log(loggedUser);
       //update user with other info
       updateUserProfile(data.firstName)
         .then(() => {
           console.log("User Profile Updated");
           //sweetalert2
           Swal.fire({
             title: "Account created successfully",
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
           logOut()
             .then(() => {
               navigate("/login");
             })
             .catch((error) => console.log(error));
         })
         .catch((error) => {
           console.log(error);
         });
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

    reset(); //This will clear all the fields
    clearErrors();
  };

  return (
    <div className="flex bg-base-200 justify-center items-start lg:items-center min-h-screen fontPoppins px-2 md:px-4 pt-8 md:pt-8 lg:pt-20">
      <div className="hero-content items-start flex-col md:flex-col lg:flex-row gap-10 lg:gap-20 px-2 md:px-10">
        <div className="w-full sm:max-w-sm md:max-w-lg lg:pt-20">
          <div className="flex items-center gap-1">
            <Link to="/">
              <h4 className="text-2xl md:text-4xl lg:text-4xl pt-2 md:pt-2 lg:pt-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Vista Mart
              </h4>
            </Link>
          </div>
          <div>
            <p className="text-xl mt-4 md:text-2xl font-medium mb-3 titleClr">
              Create your account
            </p>
            <p className="font-bold mb-3 lg:mb-5">
              Have an account?{" "}
              <Link to="/login" className="text-blue-700">
                Log in now
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
        <div>
          <div className="divider mt-0 h-0 mb-6 labelTextClr">
            Or with email and password
          </div>
          <div className="card bg-base-100 w-full sm:max-w-sm md:max-w-lg shadow-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body gap-3 md:gap-4"
            >
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-between">
                {/* first name */}
                <div className="form-control relative flex-1 md:w-[65%]">
                  <label
                    htmlFor="firstName"
                    className="labelTextClr text-sm md:text-base font-medium pb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First name must not be empty",
                      },
                      maxLength: {
                        value: 20,
                        message: "First name must be between 1-20 letters",
                      },
                      pattern: {
                        value: /^[A-Za-z ]{1,20}$/,
                        message:
                          "First name must not include numbers or special characters",
                      },
                    })}
                    placeholder="First Name"
                    className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                      errors.firstName
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
                  {errors.firstName && (
                    <div className="pt-1">
                      <span className="text-red-600 text-sm">
                        {errors.firstName.message}
                      </span>
                    </div>
                  )}
                </div>
                {/* last name */}
                <div className="form-control relative flex-1 md:w-[35%]">
                  <label
                    htmlFor="lastName"
                    className="labelTextClr text-sm md:text-base font-medium pb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last name must not be empty",
                      },
                      maxLength: {
                        value: 20,
                        message: "Last name must be between 1-20 letters",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message:
                          "Last name must not include numbers or special characters",
                      },
                    })}
                    placeholder="Last Name"
                    className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                      errors.lastName
                        ? "focus:ring-red-500"
                        : "focus:ring-blue-500"
                    }`}
                  />
                  <div>
                    <IoWarningOutline
                      size={18}
                      className={`absolute right-2 top-3 transform -translate-y-1/2 ${
                        errors.lastName ? "" : "hidden"
                      }`}
                    />
                  </div>
                  {errors.lastName && (
                    <div className="pt-1">
                      <span className="text-red-600 text-sm">
                        {errors.lastName.message}
                      </span>
                    </div>
                  )}
                </div>
              </div>
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
                      errors.email ? "" : "hidden"
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
              {/* Role */}
              <div className="form-control relative">
                <label
                  htmlFor="role"
                  className="labelTextClr text-sm md:text-base font-medium pb-1"
                >
                  Role
                </label>
                <select
                  {...register("role", {
                    required: {
                      value: true,
                      message: "Please select a role",
                    },
                  })}
                  defaultValue="" // Ensures the placeholder is selected by default
                  className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                    errors.role
                      ? "focus:ring-red-500 border-red-500"
                      : "focus:ring-blue-500"
                  }`}
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>

                {errors.role && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* new password */}
              <div className="form-control relative">
                <label
                  htmlFor="newPassword"
                  className="labelTextClr text-sm md:text-base font-medium pb-1"
                >
                  Password
                </label>
                <input
                  type={isNewPassVisible ? "text" : "password"}
                  {...register("newPassword", {
                    required: true,
                    validate: {
                      minLength: (value) => value.length >= 8 || "",
                      hasNumber: (value) => /\d/.test(value) || "",
                      hasSpecialChar: (value) => /[!@#$%^&*]/.test(value) || "",
                    },
                  })}
                  placeholder="Enter a new password"
                  className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                    errors.newPassword
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {/* Notice logo inside input field*/}
                <div>
                  <IoWarningOutline
                    size={18}
                    className={`absolute right-2 top-3 transform -translate-y-1/2 ${
                      errors.newPassword ? "" : "hidden"
                    }`}
                  />
                </div>
                <img
                  src={isNewPassVisible ? hidePassLogo : showPassLogo}
                  alt={isNewPassVisible ? "Hide password" : "Show password"}
                  width={20}
                  className="absolute right-3 top-8 transform translate-y-1/2 cursor-pointer"
                  onClick={toggleNewPassVisibility}
                />
              </div>

              {/* confirm password */}
              <div className="form-control relative">
                <label
                  htmlFor="confirmPassword"
                  className="labelTextClr text-sm md:text-base font-medium pb-1"
                >
                  Confirm Password
                </label>
                <input
                  type={isConfirmPassVisible ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Please confirm your password",
                    },
                    validate: (value) =>
                      value === newPassword || "Password do not match",
                  })}
                  placeholder="Confirm Password"
                  className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                    errors.confirmPassword
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {/* Notice logo inside input field */}
                <div>
                  <IoWarningOutline
                    size={18}
                    className={`absolute right-2 top-3 transform -translate-y-1/2 ${
                      errors.confirmPassword ? "" : "hidden"
                    }`}
                  />
                </div>
                <img
                  src={isConfirmPassVisible ? hidePassLogo : showPassLogo}
                  alt={isConfirmPassVisible ? "Hide password" : "Show password"}
                  width={20}
                  className="absolute right-3 top-8 transform translate-y-1/2 cursor-pointer"
                  onClick={toggleConfirmPassVisibility}
                />
                {errors.confirmPassword && (
                  <div className="pt-1">
                    <span className="text-red-600 text-sm">
                      {errors.confirmPassword.message}
                    </span>
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-600 hover:bg-purple-700 w-full mx-auto text-lg md:text-xl text-white">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
