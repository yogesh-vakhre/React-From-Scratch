import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname);
  const splitLocation = pathname.split("/");

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-xxl">
            <Link className="navbar-brand" to="/#">
              Todo App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      splitLocation[1] === "/" ? "active" : ""
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      splitLocation[1] === "users" ? "active" : ""
                    }`}
                    to="/users"
                  >
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      splitLocation[1] === "about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      splitLocation[1] === "contact" ? "active" : ""
                    }`}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                />
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </form> */}
              <ul className="navbar-nav ml-auto action-buttons">
                <li className="nav-item ">
                  <Link
                    to="/sign-in"
                    className="nav-link  mr-4"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                <Link
                    to="/sign-up"
                    href="/#"
                 
                    className="btn btn-primary"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
