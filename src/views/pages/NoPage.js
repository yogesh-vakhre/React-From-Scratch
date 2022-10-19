import React from "react";
import { Link } from "react-router-dom";

const NoPage = (props) => {
  return (
    <>
    <div className="container-fluid p-5 bg-dark text-white text-center">
      <div className="row">
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center text-white vh-100">
          <h1>404</h1>
          <h4>Page not found</h4>
          <p>
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <Link to="/">Back To Home</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default NoPage;
