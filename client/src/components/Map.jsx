import React, { useState } from 'react';
import USAMap from 'react-usa-map';

const Map = (props) => (
  <div id='map'>
    <USAMap customize={props.customConfig} />
  </div>
);

export default Map;