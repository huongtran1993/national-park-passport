import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ParkList from './ParkList';

const Search = () => {
  const [stateUS, setStateUS] = useState('');
  const [activity, setActivity] = useState('');
  const [parkCodeList, setParkCodeList] = useState([]);

  const handleChange = (event, value) => {
    if(value.length === 2) {
      setStateUS(value);
    } else {
      setActivity(value);
    }
  }

  useEffect(() => getParkList(),[activity]);

  useEffect(() => {
    const parkCodes = parkCodeList.filter(object => object.states === stateUS);
    setParkCodeList(parkCodes);
  },[stateUS]);

  const getParkList = () => {
    const params = {
      'api_key': 'olgLzecHtJsvKmlyp1pF71gi0LIs5dTYGfFwY0Rx',
      q: activity
    };
    axios.get('https://developer.nps.gov/api/v1/activities/parks', { params })
      .then(response => {
        let data = response.data.data[0].parks;
        console.log(data);
        if (stateUS.length === 2) {
          data = data.filter(object => object.states === stateUS);
        }
        const parkCodes = data.map(object => {
          const states = object.states;
          const parkCode = object.parkCode;
          return {states, parkCode};
        });
        setParkCodeList(parkCodes);
      })
      .catch(err => {
        console.log('Error getting activity list: ', err);
      });
    };

    return (
      <div className='container'>
      <Autocomplete
        id='activity-select'
        sx={{ width: 300 }}
        options={activities}
        autoHighlight
        getOptionLabel={(option) => option}
        onChange={handleChange}
        renderOption={(props, option) => (
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            {option}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Choose an activity'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            required
          />
        )}
      />
      <Autocomplete
        id='state-select'
        sx={{ width: 300 }}
        options={states}
        autoHighlight
        getOptionLabel={(option) => option}
        onChange={handleChange}
        renderOption={(props, option) => (
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            {option}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Choose a state'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
      <ParkList parkCodeList={parkCodeList} />
    </div>
  );
}

const states = [
 'AK',
 'AL',
 'AR',
 'AZ',
 'CA',
 'CO',
 'CT',
 'DE',
 'FL',
 'GA',
 'HI',
 'IA',
 'ID',
 'IL',
 'IN',
 'KS',
 'KY',
 'LA',
 'MA',
 'MD',
 'ME',
 'MI',
 'MN',
 'MO',
 'MS',
 'MT',
 'NC',
 'ND',
 'NE',
 'NH',
 'NJ',
 'NM',
 'NV',
 'NY',
 'OH',
 'OK',
 'OR',
 'PA',
 'RI',
 'SC',
 'SD',
 'TN',
 'TX',
 'UT',
 'VA',
 'VT',
 'WA',
 'WI',
 'WV',
 'WY'
];

const activities = ['Arts and Culture', 'Astronomy', 'Auto and ATV', 'Biking', 'Boating', 'Camping', 'Canyoneering', 'Caving', 'Climbing', 'Compass and GPS', 'Dog Sledding', 'Fishing', 'Flying', 'Food', 'Golfing', 'Guided Tours', 'Hands-On', 'Hiking', 'Horse Trekking', 'Hunting and Gathering', 'Ice Skating', 'Junior Ranger Program', 'Living History', 'Museum Exhibits', 'Paddling', 'Park Film', 'Playground', 'SCUBA Diving', 'Shopping', 'Skiing', 'Snorkeling', 'Snow Play', 'Snowmobiling', 'Snowshoeing', 'Surfing', 'Swimming', 'Team Sports', 'Tubing', 'Water Skiing', 'Wildlife Watching'];

export default Search;