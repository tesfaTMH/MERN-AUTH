import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-item-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Auth App</h1>
          <p className="text-center mb-4">
            This is a boilerplate for MERN authentication that stores JWT in an
            HTTP-Only cookie. It also uses redux toolkit and react bootstrap
            library
          </p>
          <div className="d-flex justify-content-center">
            {/*<Button variant="primary" href="/login" className="me-3">
              Sign In
            </Button>*/}
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            {/*<Button variant="secondary" href="/register">
              Sign Up
            </Button>*/}
            <LinkContainer to="/register">
              <Button variant="primary" className="me-3">
                Sign Up
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
