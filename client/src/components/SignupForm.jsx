import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
import FormHelperText from '@mui/material/FormHelperText';

import { signUpWithEmail } from '../auth.js';

const SignupForm = (props) => {
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

  const signUp = (e) => {
    e.preventDefault();
    signUpWithEmail(values.email, values.password)
    .then((userCredential) => {
      setValues({
        email: '',
        password: '',
        showPassword: false
      });
      props.handleLogIn(userCredential.user.email);
      console.log('Signed in as ', userCredential.user.email);
      axios.post('/account', { email: values.email })
        .then(() => {
          history.push('/account');
        })
        .catch(err => {
          console.log('Error sending post request to /account: ', err);
        })
    })
    .catch((error) => {
      console.log(`Error signing up: ${error.code}: ${error.message}`)
    });

  };

  return (
    <div className='sign-up'>
      <form onSubmit={signUp}>
        <Box sx={{ display: 'flex', alignItems: 'center', p: '0'}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl sx={{ m: 1, width: '15em' }} variant="standard" required>
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
              <FormHelperText id="component-helper-text">
                For authentication, you won't be emailed
              </FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mr: '1em' }}>
            <FormControl sx={{ m: 1, width: '15em' }} variant="standard" required>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input
                id='password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                aria-describedby="password-helper-text"
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
              <FormHelperText id="component-helper-text">
                Password must be at least 6 characters
              </FormHelperText>
            </FormControl>
          </Box>
          <Button variant='contained' color='warning' type='submit'>
            Sign Up - It's Free!
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default SignupForm;
