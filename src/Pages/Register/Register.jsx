import React, { use } from "react";
import { Link, useNavigate } from "react-router";

import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { loginWithGoogle, registerUser, updateUser,setUser } = use(AuthContext);

  const handelGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
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
  const handelRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUppercase) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must have at least one uppercase letter.",
      });
    }
    if (!hasLowercase) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must have at least one lowercase letter.",
      });
    }
    if (!isLengthValid) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must be at least 6 characters long.",
      });
    }
    registerUser(email, password)
    .then((result) => {
      const user=result.user
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
        })
        .catch(() => {
          setUser(user);
        
        });
    });
    navigate("/"),
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Register Successful",
        showConfirmButton: false,
        timer: 1500,
      }).catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
        });
      });
  };
  return (
    <div>
      <div className="w-[360px] md:w-[500px] p-4  mb-6 rounded-md border border-gray-300  sm:p-8 mx-auto mt-9  bg-[#F6F6F6] shadow-md dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Register your account
        </h2>
        <div className="my-6 space-y-4">
          <button
            onClick={handelGoogleLogin}
            aria-label="Login with Google"
            type="btn"
            className="flex w-full items-center justify-center  p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 bg-blue-600 text-white hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 text-white fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p className="text-white font-semibold">Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form onSubmit={handelRegister} className="space-y-8 ">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm">Photo URL</label>
              <input
                type="text"
                name="photo"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[16px]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <div className="">
                <label htmlFor="password" className="text-[16px]">
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  required
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-[16px] hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <p className="text-[19px] mt-5 text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link
            to={"/Auth/login"}
            className="underline text-blue-500 dark:text-gray-800"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;