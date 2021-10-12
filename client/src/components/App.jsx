import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Map from './Map';
import SigninForm from './SigninForm';

const App = () => {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <div id='nav-bar'>
        <h2 >National Park Passport</h2>
        <Route
        path = '/'
        render = {({ location }) => (
          <Fragment>
          <Tabs
            value={location.pathname}
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'
            aria-label='secondary tabs example'
            >
            <Tab label='Home' value='/' component={Link} to={'/'}  />
            <Tab label='My Passport' value='/signin' component={Link} to={'/signin'}/>
          </Tabs>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/signin'>
              <Signin />
            </Route>
          </Switch>
          </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div>
      <Map />
    </div>
  );
}

function Signin() {
  return (
    <div>
      <SigninForm />
    </div>
  );
}

export default App;