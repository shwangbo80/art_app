import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

export default function ExploreComponent() {
  return (
    <Container className="mt-5">
      <h1 className="my-5">Start exploring</h1>
      <Row>
        <Col md={4}>
          <Image
            fluid
            className="img mb-3"
            src="https://www.metmuseum.org/-/media/images/art/collection-landing-page/collection-highlights/van-gogh-wheat-field.jpg?h=424&amp;iar=0&amp;mw=840&amp;w=672&amp;sc_lang=en&amp;hash=7FBE1232BED5A4F34061979F39A22C19"
          />
          <p className="">ART</p>
          <h3>Highlights</h3>
          <p>
            Browse some of The Met's most recognizable and eye-catching objects.
          </p>
        </Col>
        <Col md={4}>
          <Image
            fluid
            className="img mb-3"
            src="https://www.metmuseum.org/-/media/images/art/collection-landing-page/curatorial-departments/costume-institute.jpg?h=360&amp;iar=0&amp;mw=840&amp;w=570&amp;sc_lang=en&amp;hash=52ACE33D9F307D05BF9D43D9197F5883"
          />
          <p className="">ART</p>
          <h3>Popular Search: Fashion</h3>
          <p>Check art fashion at The Met. </p>
        </Col>
        <Col md={4}>
          <Image
            fluid
            className="img mb-3"
            src="https://www.metmuseum.org/-/media/images/about-the-met/policies-and-documents/image-resources/open-access/marble-landing-page/open-access-teaser_700x440.jpg?h=440&amp;iar=0&amp;mw=840&amp;w=700&amp;sc_lang=en&amp;hash=5DA105EECF65F1C3978601B6EBB2AECA"
          />
          <p className="">ART</p>
          <h3>Public Domain Images</h3>
          <p>Download, edit, and share images of public-domain artwork. </p>
        </Col>
      </Row>
    </Container>
  );
}
