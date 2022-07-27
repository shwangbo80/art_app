import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import MainComponent from "./MainComponent";
import ArtComponent from "./ArtComponent";
import SearchComponent from "./SearchComponent";

export default function HomeComponent() {
  const [test, setTest] = useState("test");
  const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Container fluid className="bg-dark">
        <NavbarComponent />
      </Container>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/art" element={<ArtComponent />} />
        <Route
          path="/search"
          element={
            <SearchComponent
              test={test}
              setTest={setTest}
              data={data}
              setData={setData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
