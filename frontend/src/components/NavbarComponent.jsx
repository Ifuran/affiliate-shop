import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <nav>
        <Navbar expand="lg" className="bg-body-tertiary border border-bottom">
          <Container>
            <div className="navbar-brand p-0 m-0 flex-grow-1">
              <Link
                to="/"
                className="text-decoration-none text-dark text-center text-lg-start"
              >
                <h1 className="fw-bold fs-3 my-0">Affiliate Shop</h1>
                <p className="fw-light fs-6 p-0 m-0">
                  We recommend best products
                </p>
              </Link>
            </div>
            <div className="d-flex mt-2">
              <Form className="d-flex me-2">
                <Form.Control
                  type="search"
                  placeholder="Search here.."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              <Nav className="ms-auto my-2 my-lg-0 gap-3">
                <Link
                  to="/admin/product"
                  className="d-flex align-items-center link-dark text-decoration-none link-opacity-75-hover justify-content-center mt-2"
                >
                  Create Product
                </Link>
                <Link
                  to="/login"
                  className="d-flex align-items-center btn btn-success justify-content-center mt-2"
                >
                  Login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </>
  );
};

export default NavbarComponent;
