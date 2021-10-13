import React, { useState } from 'react';
import USAMap from 'react-usa-map';

const Map = () => (
  <div id='map'>
    <USAMap onClick={mapHandler} customize={props.customConfig} />
  </div>
);

export default Map;