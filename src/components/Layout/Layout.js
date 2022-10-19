import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <ScrollToTop/>
      <div className="container-xxl">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
