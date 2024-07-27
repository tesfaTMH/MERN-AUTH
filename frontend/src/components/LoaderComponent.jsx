import { Spinner } from "react-bootstrap";

import React from "react";

const LoaderComponent = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "50px",
        height: "50px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default LoaderComponent;
