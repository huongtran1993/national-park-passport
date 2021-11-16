import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlertInfo = (props) => {
  const [alertInfo, setAlertInfo] = useState([]);

  useEffect(() => getAlertInfo(), []);

  const getAlertInfo = () => {
    const params = {
      'api_key': 'olgLzecHtJsvKmlyp1pF71gi0LIs5dTYGfFwY0Rx',
      parkCode: props.parkCode
    };
    axios.get('https://developer.nps.gov/api/v1/alerts', { params })
      .then(response => {
        const rawdata = response.data.data;
        const data = rawdata.map(item => {
          const title = item.title;
          const text = item.description;
          return { title, text };
        });
        setAlertInfo(data);
      })
      .catch(err => {
        console.log('Error getting alert info: ', err);
      });
  };

  return (
    <div>
      {alertInfo.map(item => (
        <div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AlertInfo;
