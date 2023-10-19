"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Add your authentication logic here
    console.log("Logging in with:", data);
  };

  return (
    <div className="flex justify-center h-screen mt-20">
      <div className="p-10">
        <h2 className="text-2xl font-normal mb-4 ">Login to Keka</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Username:
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className="mt-1 p-2 border  w-72"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password:
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="mt-1 p-2 border  w-full"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 flex-initial w-72 "
            >
              Continue
            </button>
          </div>
          <div className="keka-img">
            <img src="" alt="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
