import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import signInWithEmail from '../auth.js';

const SigninForm = () => {
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

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmail(values.email, values.password)
    .then((userCredential) => {
      console.log('Signed in as ', userCredential.user);
    })
    .catch((error) => {
      console.log(`Error signing in: ${error.code}: ${error.message}`)
    });

  };

  return (
    <form onSubmit={signIn}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" required onChange={handleChange('email')}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5, marginBottom: '15px' }} />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
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
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        </Box>
    </form>
  );
}

export default SigninForm;