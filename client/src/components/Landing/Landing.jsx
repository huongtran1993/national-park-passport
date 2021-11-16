import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import SignupForm from './SignupForm';

const Landing = (props) => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={0} style={{ opacity: 0.6 }}>
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
        <img
          alt="cloud"
          src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
          style={{ display: "block", width: "50%", marginLeft: "25%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} style={{ opacity: 1 }}>
        <img
          src="./zion.jpeg"
          style={{ display: "block", width: "20%", marginLeft: "45%", boxShadow: '0px 0px 3px 6px rgba(1, 117, 171, 0.5)', marginBottom: '7em'}}
        />
        <img
          src="./antelope1.jpeg"
          style={{ display: "block", width: "25%", marginLeft: "10%", boxShadow: '0px 0px 3px 6px rgba(1, 117, 171, 0.5)'}}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={2} style={{ opacity: 1 }}>
        <img
          src="./yosemite.jpeg"
          style={{ display: "block", width: "25%", marginLeft: "70%", boxShadow: '0px 0px 3px 6px rgba(1, 117, 171, 0.5)', marginBottom: '3em'}}
        />
        <img
          src="./HorseshoeBend.jpeg"
          style={{ display: "block", width: "25%", marginLeft: "40%", boxShadow: '0px 0px 3px 6px rgba(1, 117, 171, 0.5)'}}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={1.5} style={{ opacity: 1 }}>
        <img
          src="./lakepowell.jpeg"
          style={{ display: "block", width: "25%", marginLeft: "60%", boxShadow: '0px 0px 3px 6px rgba(1, 117, 171, 0.5)', marginBottom: "10em", marginTop: "17em"}}
        />
        <img
          src="./glacier.jpg"
          style={{ display: "block", width: "25%", marginLeft: "75%",  boxShadow: '0px 0px 3px 6px rgba(1, 117, 171, 0.5)'}}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={1} style={{ opacity: 1 }}>
        <img
          src="./grandcanyon.jpg"
          style={{ display: "block", width: "30%", marginLeft: "5%", boxShadow: '0px 0px 3px 6px rgba(1, 117, 171, 0.5)', marginTop: '10em', marginBottom: '13em'}}
        />
        <img
          src="./yellowstone.jpeg"
          style={{ display: "block", width: "25%", marginLeft: "30%", boxShadow: '0px 0px 3px 6px rgba(1, 117, 171, 0.5)'}}
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
        style={{ display: 'flex', justifyContent: 'center', paddingTop: '8em' }}
      >
        <h1 style={{ fontSize: '3em', color: 'rgba(0,0,0,0.8)'}}>US National Park Passport & Travel Guide</h1>
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