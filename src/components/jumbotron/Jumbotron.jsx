import React from "react";
import "./jumbotron.css";
import sayur1 from "../../assets/sayur1.jpg";
import mushroom from "../../assets/mushroom.jpg";
import cassava from "../../assets/cassava.jpg";
import pumpkin from "../../assets/pumpkin.jpg";
import potato from "../../assets/potato.jpg";
import eggplant from "../../assets/eggplant.jpg";
import s3 from "../../assets/s3.jpg";
import Kategory from "../category/Kategory";
import Popular from "../popular/Popular";
import Lope from "../../assets/Love-love.png";

import {
  Card,
  Container,
  Button,
  Row,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";
import { SlBasket } from "react-icons/sl";
import { GiSelfLove } from "react-icons/gi";

const Jumbotron = () => {
  return (
    <div className="px-5 mx-4">
      <div bg="light" expand="lg" className="px-5 mx-5 mt-4 pb-5">
        <Card>
          <Card.Body>
            <div className="mx-3 pt-1">
              <b>
                {" "}
                <h4> LIMITED OFFERS FOR YOU </h4>
              </b>
            </div>
          </Card.Body>
          <div
            bg="light"
            expand="lg"
            className="px-2 mt-1 pb-5 head_jumbotron_limited"
          >
            <Row>
              <Col sm={2} className="mx-3 kolom__produk__header">
                <Card style={{ width: "13rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "12rem" }}
                    src={sayur1}
                  />
                  <Card.Footer>
                    <Card.Title>SAY CABAGE</Card.Title>
                    <Card.Img variant="top" className="star3" src={s3} />
                    <Card.Text>Rp 20.000</Card.Text>
                    <div className="button__card__footer">
                      <Row>
                        <Col sm={2}></Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <GiSelfLove />
                          </Button>
                        </Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <SlBasket />
                          </Button>
                        </Col>
                        <Col sm={2}></Col>
                      </Row>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={2} className="mx-3 kolom__produk__header">
                <Card style={{ width: "13rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "12rem" }}
                    src={mushroom}
                  />
                  <Card.Footer>
                    <Card.Title>MASHROOM</Card.Title>
                    <Card.Img variant="top" className="star3" src={s3} />
                    <Card.Text>Rp 20.000</Card.Text>
                    <div className="button__card__footer">
                      <Row>
                        <Col sm={2}></Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <GiSelfLove />
                          </Button>
                        </Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <SlBasket />
                          </Button>
                        </Col>
                        <Col sm={2}></Col>
                      </Row>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={2} className="mx-3 kolom__produk__header">
                <Card style={{ width: "13rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "12rem" }}
                    src={cassava}
                  />
                  <Card.Footer>
                    <Card.Title>CASSAVA</Card.Title>
                    <Card.Img variant="top" className="star3" src={s3} />
                    <Card.Text>Rp 20.000</Card.Text>
                    <div className="button__card__footer">
                      <Row>
                        <Col sm={2}></Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <GiSelfLove />
                          </Button>
                        </Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <SlBasket />
                          </Button>
                        </Col>
                        <Col sm={2}></Col>
                      </Row>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={2} className="mx-3 kolom__produk__header">
                <Card style={{ width: "13rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "12rem" }}
                    src={pumpkin}
                  />
                  <Card.Footer>
                    <Card.Title>PUMPKIN</Card.Title>
                    <Card.Img variant="top" className="star3" src={s3} />
                    <Card.Text>Rp 20.000</Card.Text>
                    <div className="button__card__footer">
                      <Row>
                        <Col sm={2}></Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <GiSelfLove />
                          </Button>
                        </Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <SlBasket />
                          </Button>
                        </Col>
                        <Col sm={2}></Col>
                      </Row>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={2} className="mx-3 kolom__produk__header">
                <Card style={{ width: "13rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "12rem" }}
                    src={potato}
                  />
                  <Card.Footer>
                    <Card.Title>POTATO</Card.Title>
                    <Card.Img variant="top" className="star3" src={s3} />
                    <Card.Text>Rp 20.000</Card.Text>
                    <div className="button__card__footer">
                      <Row>
                        <Col sm={2}></Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <GiSelfLove />
                          </Button>
                        </Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <SlBasket />
                          </Button>
                        </Col>
                        <Col sm={2}></Col>
                      </Row>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={2} className="mx-3 kolom__produk__header">
                <Card style={{ width: "13rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "12rem" }}
                    src={eggplant}
                  />
                  <Card.Footer>
                    <Card.Title>EGGPLANTE</Card.Title>
                    <Card.Img variant="top" className="star3" src={s3} />
                    <Card.Text>Rp 20.000</Card.Text>
                    <div className="button__card__footer">
                      <Row>
                        <Col sm={2}></Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <GiSelfLove />
                          </Button>
                        </Col>
                        <Col sm={4}>
                          <Button variant="success">
                            <SlBasket />
                          </Button>
                        </Col>
                        <Col sm={2}></Col>
                      </Row>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </div>

      <div bg="light" expand="lg" className="px-5 mx-5 mt-4 pb-5">
        <Row>
          <Col sm={2}>
            <Kategory />
          </Col>
          <Col sm={10}>
            <Card>
              <Card.Header>
                <Nav variant="pills" defaultActiveKey="#Popular">
                  <Nav.Item>
                    <Nav.Link href="#first">Sort</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Popular">Popular</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Newest">Newest</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Best">Best Seller</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Price">Price</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
            </Card>
            <Popular />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Jumbotron;
