import React, { useState } from 'react';
import USAMap from "react-usa-map";

const Map = () => {
  const [customConfig, setCustomConfig] = useState({});
  const mapHandler = (event) => {
    const state = event.target.dataset.name;
    console.log(event.target.dataset.name);
    const newConfig = Object.assign({}, customConfig);
    if (newConfig[state] === undefined) {
      newConfig[state] = {fill: 'blue'};
      setCustomConfig(newConfig);
    }
  };

  return (
    <div id='map'>
      <USAMap onClick={mapHandler} customize={customConfig} />
    </div>
  );
}

export default Map;