import logo from "@/assets/logo.svg";
import React from "react";
import Container from "../../ui/container";

function Navbar() {
  return (
    <Container>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 text-lg'
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Leaderboard</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>Volunteers</a>
              </li>
            </ul>
          </div>
          <span>
            <img src={logo} alt='logo' />
          </span>
          <a className=' text-xl font-bold ml-1'>Aidnest</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 text-lg'>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Leaderboard</a>
            </li>
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>Volunteers</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <a className='btn  text-lg'>Login</a>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
