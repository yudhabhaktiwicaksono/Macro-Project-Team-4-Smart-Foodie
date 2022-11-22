import logo from "../../assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { SlBasket } from "react-icons/sl";
import { GiSelfLove } from "react-icons/gi";
import React from "react";
import "./header.css";
import Love from "../../assets/Love-love.png";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";

const Header = () => {
  return (
    <div id="header">
      <Navbar bg="light" expand="lg" className="px-5 mx-5 mt-4 pb-5">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="logo-navbar" src={logo} alt="1day-fresh" />
          </Navbar.Brand>
          <Row>
            <Row>
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  variant="pills"
                  defaultActiveKey="#action2"
                  className="me-auto my-2 my-lg-0 nav__atas nav-pills"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link id="menu__header" href="#action1">
                    <b>Home</b>
                  </Nav.Link>
                  <Nav.Link id="menu__header" href="#action2">
                    Category
                  </Nav.Link>
                  <Nav.Link id="menu__header" href="#action3">
                    Recipe
                  </Nav.Link>
                  <Nav.Link id="menu__header" href="#action4">
                    Order
                  </Nav.Link>
                </Nav>
                <div className="icon__bungkus">
                  <div className="btn icon_nav">
                    <img src={Love} alt="" width="30px" />
                  </div>
                  <div className="btn icon_nav">
                    <SlBasket />
                  </div>
                </div>
                <Button variant="btn sign px-3" className="tombol-masuk">
                  Sign in
                </Button>
              </Navbar.Collapse>
            </Row>
            <Row className="mt-2">
              <Navbar.Collapse id="navbarScroll">
                <Col sm={5}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Select Locaiton"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Col>
                <Col sm={7}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Enter keyword to search"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Col>
              </Navbar.Collapse>
            </Row>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
