import React, {useEffect} from "react";
import {Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import MainComponent from "./MainComponent";
import ArtComponent from "./ArtComponent";

export default function HomeComponent() {
  useEffect(() => {
    console.log("HOme Component");
  }, []);
  return (
    <BrowserRouter>
      <Container fluid className="bg-dark">
        <NavbarComponent />
      </Container>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/art" element={<ArtComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
