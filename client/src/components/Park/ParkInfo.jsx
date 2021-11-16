import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { GlobalContext } from '../GlobalContext';
import ToDoInfo from './ToDoInfo';
import AlertInfo from './AlertInfo';

const ParkInfo = (props) => {
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const [fees, setFees] = useState([]);
  const [fullName, setFullName] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [stampInfo, setStampInfo] = useState({});
  const [stateUS, setStateUS] = useState('');

  const { value } = useContext(GlobalContext);

  useEffect(() => getParkInfo(), []);

  const handleAddToVisit = () => {
    const data = {
      email: value,
      park: fullName,
      parkCode: props.parkCode,
      state: stateUS,
      img: imgUrl
    };
    axios.put('/stamp/tovisit/add', data)
      .then(response => {
        console.log('This is RES from PUT: ', response);
      })
      .catch(err => {
        console.log('Error sending put request: ', err);
      });
  };

  const getParkInfo = () => {
    const params = {
      'api_key': 'olgLzecHtJsvKmlyp1pF71gi0LIs5dTYGfFwY0Rx',
      parkCode: props.parkCode
    };
    axios.get('https://developer.nps.gov/api/v1/parks', { params })
      .then(response => {
        const parkData = response.data.data[0];
        const addrObj = parkData.addresses[0];
        const addrStr = `
        ${addrObj.line1}
        ${addrObj.line2}
        ${addrObj.city}, ${addrObj.stateCode} ${addrObj.postalCode}
        `;
        const image = parkData.images;
        const info = {
          name: `${parkData.fullName} - ${addrObj.stateCode}`,
        };
        setFullName(parkData.fullName);
        setDescription(parkData.description);
        setAddress(addrStr);
        setFees(parkData.entranceFees);
        setUrl(parkData.url);
        if (image.length > 0) {
          setImgUrl(image[0].url);
          info.url = image[0].url;
        }
        setStampInfo(info);
        setStateUS(addrObj.stateCode);
      })
      .catch(err => {
        console.log('Error getting park info: ', err);
      });
  };

  return (
    <div>
      <Button variant='contained' color='secondary' type='button' onClick={handleAddToVisit} sx={{ textTransform: 'capitalize', position: 'relative', left: '90%' }}>
        Add to &nbsp; <FavoriteBorderIcon /> &nbsp; List
      </Button>
      <h1 id="modal-title" style={{ textAlign: 'center' }}>{fullName}</h1>
      <div id="modal-description">
        <img src={`${imgUrl}?w=248&fit=crop&auto=format`} style={{ margin: '1em 40%'}}/>
        <h3 style={{ fontStyle: 'italic', width: '80%', margin: '0 10%' }}>{description}</h3>
        <h2>Park Website</h2>
        <a href={url}>{url}</a>
        <h2>Address</h2>
        <p>{address}</p>
        <h2>Entrance Fees</h2>
        {fees.map(item => {
          if (Number(item.cost) === 0) {
            return (<p>{`${item.description}`}</p>);
          } else {
            return (<p>{`${item.description}: $${item.cost}`}</p>);
          }
        })}
        <h2>Things to Do</h2>
        <ToDoInfo parkCode={props.parkCode} />
        <h2>Alert</h2>
        <AlertInfo parkCode={props.parkCode} />
      </div>
    </div>
  );
};

export default ParkInfo;
