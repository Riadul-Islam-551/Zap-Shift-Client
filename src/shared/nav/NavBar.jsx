import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../components/logo/Logo";
import "./nav.css";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, setUser, logOutUser } = useAuth();

  const handleLogOut = () => {
    logOutUser()
      .then(setUser(null))
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <ul>
        <li>
          <NavLink className="m-1 p-2 font-bold" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="m-1 p-2 font-bold" to="/coverage">
            Coverage
          </NavLink>
        </li>
        <li>
          <NavLink className="m-1 p-2 font-bold" to="/aboutUS">
            About Us
          </NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link onClick={handleLogOut} to="/" className="btn">
              Log Out
            </Link>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
