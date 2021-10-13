import React, { useState, useContext } from 'react';
import axios from 'axios';
import Map from './Map';
import { GlobalContext } from './GlobalContext';

const Passport = (props) => {
  const { value } = useContext(GlobalContext);

  const [visited, setVisited] = useState([]);
  const [toVist, setToVist] = useState([]);
  const [customConfig, setCustomConfig] = useState({});
  // const mapHandler = (event) => {
  //   const state = event.target.dataset.name;
  //   console.log(event.target.dataset.name);
  //   const newConfig = Object.assign({}, customConfig);
  //   if (newConfig[state] === undefined) {
  //     newConfig[state] = {fill: 'blue'};
  //     setCustomConfig(newConfig);
  //   }
  // };

  const getUserData = () => {
    const params = {
      email: value
    };
    axios.get('/stamp', { params })
      .then(response => {
        console.log('RES FROM GET /stamp');
      })
      .catch(err => {
        console.log('Error from sending get request /stamp: ', err);
      });
  };

  return (
    <div>
      <div>
        <h1>Welcome back Explorer!</h1>
        <Map customConfig={customConfig} />
      </div>
      <div>
        <h2>Stamp Collections</h2>
        <ul>
          {}
        </ul>
      </div>
    </div>
  );
};


export default Passport;