import React from "react";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <footer className="container">
        <p className="float-right">
          <Link to="#">Back to top</Link>
        </p>
        <p>
          © 2017-2019 Company, Inc. · <a href="/#">Privacy</a> ·{" "}
          <Link to="#">Terms</Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
