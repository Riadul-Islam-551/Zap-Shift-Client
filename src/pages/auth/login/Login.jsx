import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const handleSigninUser = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-6 rounded-2xl ">
      <div className="mb-9 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl text-secondary font-bold">
          Welcome Back
        </h1>
        <p>Login with ZapShift</p>
      </div>

      <form onSubmit={handleSubmit(handleSigninUser)}>
        <fieldset className="fieldset">
          {/* email  */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-xs">Email is Required</p>
          )}

          {/* password  */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-xs">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-xs">
              Password must be in 6 chatacter or more
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-xs">
              Password must be in at least one uppercase, one lowercase, one
              number and one special character
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary text-black mt-4">Log In</button>
        </fieldset>
        <p className="text-sm my-2">
          Don't have any account?{" "}
          <Link className="text-primary-content" to="/register">
            Register
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
