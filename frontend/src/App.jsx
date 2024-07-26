import React from "react";
import Header from "./components/HeaderComponent";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Header />;
      <ToastContainer />
      <Container className="my-2">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
