import React from "react";

const PageTitle = (props) => {
  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default PageTitle;
