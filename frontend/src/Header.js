import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import App from "./App";
import Chart from "./Chart";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Honey</Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="navbarScroll" />{" "}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/chart">
                <Nav.Link>Chart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default Header;
