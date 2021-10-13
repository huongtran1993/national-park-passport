import React from 'react';
import Map from './Map';

const Passport = (props) => {
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

  };

  return (
    <div>
      <div>
        <h1>Welcome back Explorer!</h1>
        <Map customConfig={customConfig} />
      </div>
    </div>
  );
};


export default Passport;