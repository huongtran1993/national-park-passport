import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';
import { GlobalContext } from './GlobalContext';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import HikingIcon from '@mui/icons-material/Hiking';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Passport = (props) => {
  const { value } = useContext(GlobalContext);

  const [visited, setVisited] = useState([]);
  const [toVisit, setToVisit] = useState([]);
  const [customConfig, setCustomConfig] = useState({});
  const [parkCount, setParkCount] = useState(0);
  const [stateCount, setStateCount] = useState(0);
  const [level, setLevel] = useState('Traveler');

  useEffect(() => getUserData(), []);

  const getUserData = () => {
    const params = {
      email: value
    };
    axios.get('/stamp', { params })
      .then(response => {
        const data = response.data;
        console.log('THIS IS data:', data);
        const states = data.visited.map(item => item.state);
        const stateSet = new Set(states);
        const config = {};
        stateSet.forEach(state => config[state] = {fill: 'green'});
        setVisited(data.visited);
        setToVisit(data.toVisit);
        setCustomConfig(config);
        setParkCount(data.visited.length);
        setStateCount(stateSet.size);
        if (stateCount > 15) {
          setLevel('Explorer');
        } else if (stateCount > 40) {
          setLevel('Adventurer');
        }
      })
      .catch(err => {
        console.log('Error from sending get request /stamp: ', err);
      });
  };

  const handleRemovePark = (e) => {
    const dataArr = e.target.value.split(',');
    const data = {
      email: value,
      park: dataArr[0],
      parkCode: dataArr[1],
      state: dataArr[2],
      img: dataArr[3]
    };
    axios.put('/stamp/tovisit/remove', data)
      .then(response => {
        getUserData();
      })
      .catch(err => {
        console.log('Error sending put request: ', err);
      });
  };

  const handleCollectPark = (e) => {
    const dataArr = e.target.value.split(',');
    const data = {
      email: value,
      park: dataArr[0],
      parkCode: dataArr[1],
      state: dataArr[2],
      img: dataArr[3]
    };
    axios.put('/stamp/visited/add', data)
      .then(response => {
        axios.put('/stamp/tovisit/remove', data)
          .then(response => {
            getUserData();
          });
      })
      .catch(err => {
        console.log('Error sending put request: ', err);
      });
  };

  return (
    <div style={{ padding: '2em 5em'}}>
      <div>
        <h1>NATIONAL PARK PASSPORT</h1>
        <div className='flexboxrow'>
          <Map customConfig={customConfig} />
          <Stack direction="column" spacing={2}>
            <Button variant="contained" color='success' endIcon={<DoneOutlineIcon />} sx={{ borderRadius: '50%'}}>
              {parkCount > 1 ? `${parkCount} Parks Visited` : `${parkCount} Park Visited`}
            </Button>
            <Button variant="contained" color='success' endIcon={<DoneOutlineIcon />} sx={{ borderRadius: '50%'}}>
              {stateCount > 1 ? `${stateCount} States Visited` : `${stateCount} State Visited`}
            </Button>
            <Button variant="contained" color='success' endIcon={<HikingIcon />} sx={{ borderRadius: '50%'}}>
              {`${level} Level`}
            </Button>
          </Stack>
        </div>
      </div>
      <div>
        <h1>STAMP COLLECTION</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '3em 5em', maxHeight: '1000', overflow: 'hidden', overflowY: 'scroll' }}>
          {visited.length === 0 ? (
            <p>Find a park to visit and collect your first stamp</p>
          ) : (
            visited.map(item => (
              <Card sx={{ width: 150, height: 250, marginRight: '2em', marginBottom: '2em' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image="/US-NationalParkService-Logo.svg"
                  alt="stamp"
                />
                <CardContent>
                  <Typography gutterBottom variant="button text" component="div" sx={{ textAlign: 'center', fontSize: '1em' }}>
                    {item.park}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
      <div>
        <h1 style={{ display: 'flex', alignItems: 'center' }}>
          <FavoriteIcon sx={{ fontSize: '1.2em' }}/>
          {' '}
          PARKS
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '3em 5em', maxHeight: '1000', overflow: 'hidden', overflowY: 'scroll' }}>
          {toVisit.length === 0 ? (
            <p>Find a park and add it to your Favorite list</p>
          ) : (
            toVisit.map(item => (
              <Card sx={{ width: 150, height: 250, marginRight: '2em' }}>
                <CardMedia
                  component="img"
                  height="130"
                  image={item.img}
                  alt="national park"
                />
                <CardContent sx={{ pb: '0.2em'}}>
                  <Typography gutterBottom variant="button text" component="div" sx={{ textAlign: 'center', fontSize: '1em' }}>
                    {item.park}
                  </Typography>
                </CardContent>
                <CardActions sx={{ pt: '0'}}>
                  <Button value={[item.park, item.parkCode, item.state, item.img]} onClick={handleRemovePark} sx={{ fontSize: '0.5em', margin: 'auto' }}>
                    Remove
                  </Button>
                  <Button value={[item.park, item.parkCode, item.state, item.img]} onClick={handleCollectPark} sx={{ fontSize: '0.5em', margin: 'auto' }}>
                    Collect
                  </Button>
                </CardActions>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};


export default Passport;