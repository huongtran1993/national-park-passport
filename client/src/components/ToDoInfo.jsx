import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ToDoInfo = (props) => {
  const [todoInfo, setTodoInfo] = useState([]);

  useEffect(() => getThingsToDo(), []);

  const getThingsToDo = () => {
    const params = {
      'api_key': 'olgLzecHtJsvKmlyp1pF71gi0LIs5dTYGfFwY0Rx',
      parkCode: props.parkCode
    };
    axios.get('https://developer.nps.gov/api/v1/thingstodo', { params })
      .then(response => {
        const rawdata = response.data.data;
        const data = rawdata.map(item => {
          const title = item.title;
          const text = item.shortDescription;
          return { title, text };
        });
        setTodoInfo(data);
      })
      .catch(err => {
        console.log('Error getting things to do info: ', err);
      });
  };

  return (
    <div>
      {todoInfo.map(item => (
        <div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoInfo;
