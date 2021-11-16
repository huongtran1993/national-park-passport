import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import USAMap from 'react-usa-map';

import { GlobalContext } from '../GlobalContext';

const Map = (props) => {
  const history = useHistory();
  const { state, setSelectedState } = useContext(GlobalContext);

  const handleClick = (e) => {
    setSelectedState(e.target.dataset.name);
    history.push('/account/search');
    console.log(e.target.dataset.name);
  };

  return (
    <div id='map'>
      <USAMap customize={props.customConfig} onClick={handleClick}/>
    </div>
  );
};

export default Map;