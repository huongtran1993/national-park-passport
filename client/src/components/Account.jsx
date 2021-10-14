import React, { Fragment, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Map from './Map';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import Passport from './Passport';
import Search from './Search';

const Account = () => {
  const [value, setValue] = useState('account');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory();

  const handleLogOut = () => {
    setValue('');
    history.push('/');
  };

  return (
    <BrowserRouter>
      <div id='nav-bar'>
        <Route
          path = '/account'
          render = {({ location }) => (
            <Fragment>
              <Tabs
                value={location.pathname}
                onChange={handleChange}
                textColor='secondary'
                indicatorColor='secondary'
                aria-label='secondary tabs example'
              >
                <Tab label='My Passport' value='/account' component={Link} to={'/account'}/>
                <Tab label='Find a park' value='/account/search' component={Link} to={'/account/search'}/>
              </Tabs>
              <Button
                style={{ position: 'fixed', top: '2%', left: '90%', zIndex: '20'}}
                variant='contained'
                color='primary'
                type='button'
                onClick={handleLogOut}
              >
                Sign Out
              </Button>
              <Switch>
                <Route exact path='/account'>
                  <Passport />
                </Route>
                <Route path='/account/search'>
                  <Search />
                </Route>
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default Account;