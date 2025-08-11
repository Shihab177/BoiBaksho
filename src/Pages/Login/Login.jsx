import React from "react";

import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginWithGoogle, loginWithEmailPassword } = React.useContext(AuthContext);

  const handelGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailPassword(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
        });
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="pb-8 mt-[59px] md:mt-[92px]"
    >
      <div>
        <div className="md:max-w-md p-2 mx-2 rounded-md sm:p-8 md:mx-auto mt-9 dark:bg-gray-50 dark:text-gray-800 ">
          <h2 className="mb-3 text-[24px] md:text-[36px] md:text-4xl font-semibold text-center">
            Login to your account
          </h2>
          <div className="my-6 space-y-4">
            <button
              onClick={handelGoogleLogin}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full py-3 md:py-3 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 bg-[#2198D4] hover:bg-[#26AAED] text-white text-base md:text-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-white"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="font-medium text-base md:text-xl text-white">Login with Google</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600 text-sm md:text-lg">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <form onSubmit={handelLogin} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[16px] font-semibold md:text-[18px]">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 placeholder:text-[16px] placeholder:font-medium font-medium border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-[16px] font-semibold md:text-[18px]">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <p className="text-sm md:text-lg hover:underline text-blue-600 cursor-pointer">
                  Forgot password?
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-[#2198D4] hover:bg-[#26AAED] text-white text-base md:text-xl"
            >
              Login
            </button>
          </form>
          <p className="text-base md:text-xl mt-5 text-center sm:px-6 dark:text-gray-600 font-semibold">
            Don't have an account?
            <Link
              to={"/auth/register"}
              className="underline text-blue-500 dark:text-gray-800"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
