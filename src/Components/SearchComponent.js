import React, {useEffect} from "react";
import axios from "axios";

export default function SearchComponent(props) {
  const apiUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;
  useEffect(() => {
    axios.get(apiUrl).then((response) => props.setData(response.data));
  }, []);

  return <div>SearchComponent</div>;
}
