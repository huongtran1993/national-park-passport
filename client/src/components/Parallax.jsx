import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SignupForm from './SignupForm';

const Landing = (props) => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{ backgroundImage: 'url(./HorseshoeBend.jpeg)', backgroundSize: '100% auto' }}
      />

      <ParallaxLayer offset={0.75} speed={0} style={{ opacity: 0.6 }}>
        <img
          alt="cloud"
          src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
          style={{ display: "block", width: "40%", marginLeft: "55%" }}
        />
        <img
          alt="cloud"
          src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
          style={{ display: "block", width: "30%", marginRight: "55%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundImage: 'url(./arches-pic.jpeg)', backgroundSize: '100% auto' }}
      />
      <ParallaxLayer offset={1} speed={2} style={{ opacity: 0.6 }}>
        <img
          alt='cloud'
          src='https://freepngimg.com/thumb/cloud/7-cloud-png-image.png'
          style={{ width: '50%', marginLeft: '50%' }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={-1}
        style={{ display: 'flex', justifyContent: 'center', paddingTop: '7em' }}
      >
        <h1 style={{ fontSize: '3em'}}>US National Park Passport & Travel Guide</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <div style={{ padding: '0 0 0 10em'}}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8em', fontWeight: 'bold', paddingLeft: '5em'}}>
            Ready to explore? Create an account to get started!
          </h3>
          <SignupForm handleLogIn={props.handleLogIn}/>
        </div>
      </ParallaxLayer>

    </Parallax>
  );
};

export default Landing;