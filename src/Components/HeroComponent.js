import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

export default function HeroComponent() {
  return (
    <div className="hero-bg d-flex">
      <Container className="align-self-center ">
        <h1 className="text-light text-center hero-header">
          Art Collection Database
        </h1>
        <h2 className="text-light text-center mb-5">
          Explore more than 490,000 works—from around the world and throughout
          history—and the research and conversations they inspire.
        </h2>
        <Form>
          <Row className="align-items-center">
            <Col className="my-1">
              <Form.Control
                id="inlineFormInputName"
                size="lg"
                placeholder="Search"
              />
            </Col>
            <Col xs="auto" className="my-1">
              <a href="/search">
                <Button className="btn-warning btn-lg">Submit</Button>
              </a>
            </Col>
          </Row>
        </Form>
        <div className="text-center mt-5">
          <Button className="btn-light mx-2 my-2 btn-lg">
            Start Exploring
          </Button>
          <Button className="btn-light mx-2 my-2 btn-lg">
            Check out the latest
          </Button>
          <Button className="btn-light mx-2 my-2 btn-lg">
            Peek behind the scenes
          </Button>
          <Button className="btn-light mx-2 my-2 btn-lg">
            See our Research
          </Button>
          <a href="/">
            <p className="text-light mt-5">Go to advanced collection search</p>
          </a>
        </div>
      </Container>
    </div>
  );
}
