import React from "react";
import {Container, Row, Col, Form, Button, Image} from "react-bootstrap";

export default function LatestComponent() {
  return (
    <Container className="mt-5">
      <h1 className="my-5">Check out our latest</h1>
      <Row>
        <Col md={4}>
          <div className="imageContainer">
            <Image
              fluid
              className="img mb-3"
              src="https://www.metmuseum.org/-/media/images/unresized/jacques-louis-david/death-of-socrates_teaser.jpg?h=560&amp;iar=0&amp;mw=840&amp;w=840&amp;sc_lang=en&amp;hash=F90110BB4010A98519C5B152E31584EE"
            />
          </div>
          <p>CLOSE LOOK</p>
          <h3>Prisons Real and Imagined</h3>
          <p>
            In Jacques Louis David's The Death of Socrates (1787), a parable of
            principle on the eve of the French Revolution.
          </p>
        </Col>
        <Col md={4}>
          <div className="imageContainer">
            <Image
              fluid
              className="img mb-3"
              src="https://www.metmuseum.org/-/media/images/perspectives/2022/3/afpr-artist-interviews/fabiola-jean-louis.jpeg?h=560&amp;iar=0&amp;mw=840&amp;w=840&amp;sc_lang=en&amp;hash=EB76854B00BCAB948E0CC64E1ECACD17"
            />
          </div>
          <p>VIDEO</p>
          <h3>Meet the Artists: Fabiola Jean-Louis</h3>
          <p>
            Meet @fabiolajeanlouis, one of the many contemporary artists whose
            work is featured in "Before Yesterday We Could Fly: An Afrofuturist
            Period Room."⁣
          </p>
        </Col>
        <Col md={4}>
          <div className="imageContainer">
            <Image
              fluid
              className="img mb-3"
              src="https://www.metmuseum.org/-/media/images/perspectives/2022/3/carpeaux-ag/carpeauxag_square_2048x2048.jpg?h=840&amp;iar=0&amp;mw=840&amp;w=840&amp;sc_lang=en&amp;hash=C857484DA779C3058BB79FC7E375CBA2"
            />
          </div>
          <p>AUDIO</p>
          <h3>Fictions of Emancipation: Carpeaux Recast</h3>
          <p>
            This podcast features artists discussing works from the exhibition
            and themes that arise in representations of the Black figure in
            Western art.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
