import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function NavBar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1106px] mx-[320px] py-4 ">
      <Link to="/">
        <div className="font-bold text-3xl mx-12 text-white ">
          Personal Portfolio
        </div>
      </Link>
      <nav>
        <ul className="flex gap-x-6 ml-5 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="border border-richblack-700 bg-richblack-800 rounded-[8px] py-[8px] px-[12px] text-white">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="border border-richblack-700 bg-richblack-800 rounded-[8px] py-[8px] px-[12px] text-white">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="border border-richblack-700 bg-richblack-800 rounded-[8px] py-[8px] px-[12px] text-white"
              onClick={() => {
                setLoggedIn(false);
                toast.success('Logged out');
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="border border-richblack-700 bg-richblack-800 rounded-[8px] py-[8px] px-[12px] text-white">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default NavBar;
