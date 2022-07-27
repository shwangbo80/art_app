import React from "react";
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
