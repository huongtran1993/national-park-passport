import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { signInWithEmail } from '../auth.js';

const SigninForm = (props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmail(values.email, values.password)
    .then((userCredential) => {
      setValues({
        email: '',
        password: '',
        showPassword: false
      });
      props.handleLogIn(userCredential.user.email);
      console.log('Signed in as ', userCredential.user.email);
      history.push('/account');
    })
    .catch((error) => {
      console.log(`Error signing in: ${error.code}: ${error.message}`)
    });

  };

  return (
    <div>
      <div style={{height: '4em', width: '8em', backgroundColor: 'rgba(216,233,244)', position: 'fixed', top: '1%', left: '89%', zIndex: '3' }}></div>
      <div className='sign-in'>
        <div className='label'>Sign-In</div>
        <form onSubmit={signIn}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: '0'}}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <FormControl sx={{ m: 1, width: '20em' }} variant="standard" required>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id='email'
                  value={values.email}
                  onChange={handleChange('email')}
                  startAdornment={
                    <InputAdornment position='start'>
                      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </InputAdornment>
                  }
                  required
                  />
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '2em' }}>
              <FormControl sx={{ m: 1, width: '20em' }} variant="standard" required>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input
                  id='password'
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  required
                  />
              </FormControl>
            </Box>
            <Button variant='contained' color='primary' type='submit' onSubmit={signIn}>
              Sign In
            </Button>
          </Box>
        </form>
        <div style={{ marginTop: '2em' }}>
          Don't have an account?
          &nbsp;
          <Link to='/'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;


