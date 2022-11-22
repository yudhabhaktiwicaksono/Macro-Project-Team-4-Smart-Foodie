import React from "react";
import { Card, Container, Button, Row, Col, Nav, Navbar } from "react-bootstrap";
import sayur1 from "../../assets/sayur1.jpg";
import mushroom from "../../assets/mushroom.jpg";
import cassava from "../../assets/cassava.jpg";
import pumpkin from "../../assets/pumpkin.jpg";
import potato from "../../assets/potato.jpg";
import eggplant from "../../assets/eggplant.jpg";
import s3 from "../../assets/s3.jpg";
import timun from "../../assets/timun.png";
import strawbery from "../../assets/strawbery.png";
import paprica from "../../assets/paprica.png";
import sayur2 from "../../assets/sayur2.png";
import wortel from "../../assets/wortel.png";
import jeruk from "../../assets/jeruk.png";
import ikan from "../../assets/ikan.png";
import salads from "../../assets/salads.png";

import { SlBasket } from "react-icons/sl";
import { GiSelfLove } from "react-icons/gi";
import "./popular.css";

const Popular = () => {
  return (
    <div id="popular__jumbotron">
      <Row>
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={strawbery} />
            <Card.Footer>
              <Card.Title>STRAWBERY</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={paprica} />
            <Card.Footer>
              <Card.Title>PAPRICA</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={sayur2} />
            <Card.Footer>
              <Card.Title>SAYUR</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={wortel} />
            <Card.Footer>
              <Card.Title>WORTEL</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={timun} />
            <Card.Footer>
              <Card.Title>TIMUN</Card.Title>
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

        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={wortel} />
            <Card.Footer>
              <Card.Title>WORTEL</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={jeruk} />
            <Card.Footer>
              <Card.Title>JERUK</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={strawbery} />
            <Card.Footer>
              <Card.Title>STRAWBERY</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={cassava} />
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={pumpkin} />
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

        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={salads} />
            <Card.Footer>
              <Card.Title>SALAD BOTH</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={eggplant} />
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={ikan} />
            <Card.Footer>
              <Card.Title>IKAN</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={mushroom} />
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={cassava} />
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

        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={strawbery} />
            <Card.Footer>
              <Card.Title>STRAWBERY</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={paprica} />
            <Card.Footer>
              <Card.Title>PAPRICA</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={sayur2} />
            <Card.Footer>
              <Card.Title>SAYUR</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={wortel} />
            <Card.Footer>
              <Card.Title>WORTEL</Card.Title>
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
        <Col sm={2} className="mx-3 mt-3">
          <Card style={{ width: "13rem" }}>
            <Card.Img variant="top" style={{ height: "12rem" }} src={timun} />
            <Card.Footer>
              <Card.Title>TIMUN</Card.Title>
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
  );
};

export default Popular;
