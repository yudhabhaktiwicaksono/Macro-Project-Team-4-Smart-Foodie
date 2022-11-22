import React from "react";
import logo from "../../assets/logo.jpg";
import ig from "../../assets/ig.svg";
import fb from "../../assets/fb.svg";
import twiter from "../../assets/twiter.svg";
import linked from "../../assets/linked.svg";
import cod from "../../assets/cod.svg";
import mcard from "../../assets/card.svg";
import dana from "../../assets/dana.svg";
import ovo from "../../assets/ovo.svg";
import gpn from "../../assets/gpn.svg";
import visa from "../../assets/visa.svg";
import "./footer.css";
import surat from "../../assets/kop-surat.png";
import { FiMail } from "react-icons/fi";
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

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer">
        <div className="footer__padding">
          <div className="subscribe__footer">
            <div className="row">
              <div className="col-sm-1 icon__mail pl-5">
                <img src={surat} alt="" />
              </div>
              <div className="col-sm-4 subscribe__desc">
                <h3>Subscribe To Our Newsletter</h3>
                <small>
                  And get best other and updates aboute your fovorite product{" "}
                  <br /> and recipes
                </small>
              </div>
              <div className="col-sm-7 subscribe__desc">
                <Col sm={7}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Enter your email here"
                      className="search__footer"
                      aria-label="Search"
                    />
                    <a className="btn tombol__orange">Submit</a>
                  </Form>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contanct__footer">
        <div className="follow__us pt-4 mt-2">
          <Row>
            <Col sm={4}>
              <img className="logo-footer" src={logo} alt="1day-fresh" />
            </Col>
            <Col>
              <Row className="sosmed__footer">
                <Col sm={2}>
                  <h6>
                    <b> FOLLOW US ON </b>
                  </h6>
                </Col>
                <Col sm={1}>
                  <img className="svg-footer" src={fb} alt="1day-fresh" />
                </Col>
                <Col sm={1}>
                  <img className="svg-footer" src={ig} alt="1day-fresh" />
                </Col>
                <Col sm={1}>
                  <img className="svg-footer" src={twiter} alt="1day-fresh" />
                </Col>
                <Col sm={1}>
                  <img className="svg-footer" src={linked} alt="1day-fresh" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="about__company">
            <Col sm={3} className="about__dec__footer">
              <h5>
                <b>
                  About The Company <br />
                </b>
              </h5>
              <p>
                Since 2022, 1DayFresh is actively helping to simplified our
                society life by providing fresh groceries to your door.
              </p>
            </Col>
            <Col sm={3}>
              <h5>
                <b> Payment Options </b>
                <br />
              </h5>
              <Row className="mt-4">
                <Col sm={4}>
                  <img className="svg-footer" src={mcard} alt="1day-fresh" />
                </Col>
                <Col sm={4}>
                  <img className="svg-footer" src={visa} alt="1day-fresh" />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm={4}>
                  <img className="svg-footer" src={dana} alt="1day-fresh" />
                </Col>
                <Col sm={4}>
                  <img className="svg-footer" src={cod} alt="1day-fresh" />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm={4}>
                  <img className="svg-footer" src={gpn} alt="1day-fresh" />
                </Col>
                <Col sm={4}>
                  <img className="svg-footer" src={ovo} alt="1day-fresh" />
                </Col>
              </Row>
            </Col>
            <Col sm={1}>
              <div className="des_li">
                <h5>
                  <b> User Area </b>
                  <br />
                  <ul>
                    <li>My Account</li>
                    <li>My Cart</li>
                    <li>My Orders</li>
                    <li>My Whislist</li>
                  </ul>
                </h5>
              </div>
            </Col>
            <Col sm={1}>
              <div className="des_li">
                <h5>
                  <b> Shoping Guide </b>
                  <br />
                  <ul>
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>FAQ's</li>
                    <li>Help</li>
                  </ul>
                </h5>
              </div>
            </Col>
            <Col sm={1}>
              <div className="des_li">
                <h5>
                  <b> Contact Us </b>
                  <br />
                  <ul>
                    <li>
                      {" "}
                      <b> Phome : </b>
                    </li>
                    <li>+62 711 247 555</li>
                    <li>
                      {" "}
                      <b>Mail : </b>
                    </li>
                    <li>info@1dayfresh.com</li>
                  </ul>
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="privacy__policy">
        <Row>
          <Col sm={9}>
            <p>1day-fresh, enjoy your life from home</p>
          </Col>
          <Col sm={3}>
            <p>
              <b>Tern And Conditions | Privacy Policy </b>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
