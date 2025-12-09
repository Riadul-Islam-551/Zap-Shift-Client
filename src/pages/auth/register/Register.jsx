import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6 rounded-2xl bg-[#E8F6BD] shadow-2xl">
      <form onSubmit={handleSubmit(handleRegistration)}>
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
          <button className="btn btn-secondary text-white mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
