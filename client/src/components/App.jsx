import React, { Fragment, useState, useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SigninForm from './SigninForm';
import Map from './Map';
import Account from './Account';
import Search from './Search';
import { GlobalContext } from './GlobalContext';
import Landing from './Parallax';

const App = () => {
  const { value, setValue } = useContext(GlobalContext);

  const handleLogIn = (email) => {
    setValue(email);
  };

  return (
    <div>
      <BrowserRouter>
        <Button
          style={{ position: 'fixed', top: '2%', left: '90%', zIndex: '2'}}
          variant='contained'
          color='warning'
          type='button'
          component={Link}
          to={'/signin'}
        >
          Sign In
        </Button>
        <Route exact path='/'>
          {/* <Search /> */}
          <Landing handleLogIn={handleLogIn}/>
        </Route>
        <Route path='/signin'>
          <SigninForm handleLogIn={handleLogIn}/>
        </Route>
        <Route path='/account'>
          <Account />
        </Route>
      </BrowserRouter>
    </div>
  );
};




export default App;