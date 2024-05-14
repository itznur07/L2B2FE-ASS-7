import logo from "@/assets/logo.svg";
import useGetToken from "@/hooks/useGetToken";
import { SunMoon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../ui/container";

function Navbar() {
  const token = useGetToken();

  /** Handle Logout */
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

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
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </span>
          <Link>
            <a className=' text-xl font-bold ml-1'>Aidnest</a>
          </Link>
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
          <div>
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn m-1'>
                <SunMoon />
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24'
              >
                <li>
                  <a>Light</a>
                </li>
                <li>
                  <a>Dark</a>
                </li>
              </ul>
            </div>
          </div>
          {token?.length > 0 && token === String ? (
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn m-1'>
                Profile
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44'
              >
                <li>
                  <a>Dashboard</a>
                </li>
                <hr />
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to='/login'>
              <a className='btn  text-lg'>Login</a>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
