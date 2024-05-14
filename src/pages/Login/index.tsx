import logo from "@/assets/logo.svg";
import { useLoginMutation } from "@/redux/fetures/auth/authAPI";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [login, { data, isSuccess }] = useLoginMutation();

  if (isSuccess) {
    window.location.href = "/";
  }

  /** Save token using localStorage api */
  useEffect(() => {
    setTokenLocalStorage(data?.token);
  }, [data?.token]);

  const setTokenLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
  };

  const handleSubmitForm = (data: any) => {
    console.log(data);
    login(data);
    reset();
  };

  return (
    <>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='card shrink-0 w-[400px] max-w-sm border '>
            <div className='flex flex-col items-center justify-center p-3 cursor-pointer'>
              <img className='w-[30px]' src={logo} alt='logo' />
              <span className='text-xs font-medium uppercase'>Aidnest</span>
              <h1 className='text-lg font-medium text-slate-500 '>
                Login or create an account
              </h1>
            </div>
            <hr />
            <form
              onSubmit={handleSubmit(handleSubmitForm)}
              className='card-body'
            >
              <div className='form-control'>
                <label className='label'>
                  <span className=' text-lg'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='input input-bordered text-sm'
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className='text-red-500 py-1 text-sm'>
                    email is required!
                  </span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className=' text-lg'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  className='input input-bordered text-sm'
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className='text-red-500 py-1 text-sm'>
                    password is required!
                  </span>
                )}
                <label className='label'>
                  <a href='#' className=' link link-hover text-sm'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn bg-[#00B2FF] text-white text-md'>
                  Login
                </button>
              </div>
              <div className='mt-2'>
                <span>
                  Don't Have an account?{" "}
                  <Link to='/signup'>
                    <span className='font-semibold text-[#00B2FF]'>
                      Sign Up
                    </span>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
