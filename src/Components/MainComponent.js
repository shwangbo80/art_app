import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import HeroComponent from "./HeroComponent";
import ExploreComponent from "./ExploreComponent";
import CollectionComponent from "./CollectionComponent";
import LatestComponent from "./LatestComponent";

export default function MainComponent() {
  return (
    <div>
      <HeroComponent />
      <ExploreComponent />
      <CollectionComponent />
      <LatestComponent />
    </div>
  );
}
