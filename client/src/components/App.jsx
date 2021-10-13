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
import SignupForm from './SignupForm';
import Map from './Map';
import Account from './Account';
import Search from './Search';
import { GlobalContext } from './GlobalContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { value, setValue } = useContext(GlobalContext);

  const handleLogIn = (email) => {
    setValue(email);
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setValue('');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Button
          style={{ position: 'fixed', top: '2%', left: '90%'}}
          variant='contained'
          color='primary'
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

const Landing = (props) => {
  return (
    <div>
      <div>
        <h1>US National Park Passport and Travel Guide</h1>
        <h3>Ready to explore? Create an account to get started!</h3>
      </div>
      <SignupForm handleLogIn={props.handleLogIn}/>
    </div>
  );
};


export default App;