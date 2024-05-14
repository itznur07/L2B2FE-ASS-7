import logo from "@/assets/logo.svg";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitForm = (data: any) => {
    console.log(data);
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
              <h1 className='text-lg font-medium text-slate-500'>
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
                  <span className='text-lg'>Name</span>
                </label>
                <input
                  type='name'
                  placeholder='Enter your name'
                  className='input input-bordered text-sm'
                  {...register("name", {
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                  })}
                />
                {errors.name && (
                  <span className='text-red-500 py-1 text-sm'>
                    name is required!
                  </span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='text-lg'>Email</span>
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
                  <span className='text-lg'>Password</span>
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
              </div>
              <div className='form-control mt-6'>
                <button className='btn bg-[#00B2FF] text-white text-md'>
                  Signup
                </button>
              </div>
              <div className='mt-2'>
                <span>
                  Already Have an account?{" "}
                  <Link to='/login'>
                    <span className='font-semibold text-[#00B2FF]'>Login</span>
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

export default Signup;
