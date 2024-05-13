import logo from "@/assets/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
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
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='name'
                  placeholder='name'
                  className='input input-bordered'
                  required
                />
              </div>
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
              </div>
              <div className='form-control mt-6'>
                <button className='btn bg-[#00B2FF] text-white text-md'>
                  Signup
                </button>
              </div>
              <div className='mt-2'>
                <span>
                  already singup?{" "}
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
