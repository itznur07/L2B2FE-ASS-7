import logo from "@/assets/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='card shrink-0 w-[400px] max-w-sm border '>
            <div className='flex flex-col items-center justify-center p-1 cursor-pointer'>
              <img className='w-[30px]' src={logo} alt='logo' />
              <span className='text-xs font-medium uppercase'>Aidnest</span>
            </div>
            <hr />
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
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
                  Don't Have an account? <Link to='/signup'>Sign Up</Link>
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
