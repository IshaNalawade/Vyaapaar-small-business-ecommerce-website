import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {TextField,TextareaAutosize} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link,useLocation} from "react-router-dom"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const location = useLocation()
  const person = location.state?.person
  console.log(person)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const [form, setForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    address : "",
    what : person
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', paddingTop:'2rem' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.youngisthan.in/wp-content/uploads/2018/05/featured-15.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={form.email}
                onChange={(event) => {
                  setForm({ ...form, email: event.target.value });
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.password}
                onChange={(event) => {
                  setForm({ ...form, password: event.target.value });
                }}
              />
                <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                placeholder="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                value={form.password_confirmation}
                onChange={(event) => {
                  setForm({
                    ...form,
                    password_confirmation: event.target.value,
                  });
                }}
              />
                <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                placeholder="Address"
                type="address"
                id="address"
                value={form.address}
                onChange={(event) => {
                  setForm({
                    ...form,
                    address: event.target.value,
                  });
                }}
                
              />
     
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                component={Link}
                to="/sign-up-page"
                size="small"
                onClick={() => {
                  if (form.password === form.password_confirmation) {
                    
                      fetch("http://localhost:5000/api/user/register", {
                        method: "POST",
                        credentials: "include",
                        mode: "cors",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(form),
                      })
                        .then((res) => {
                          if (res.status === 201) {
                            window.location.href = "/login";
                          }
                          res.json();
                        })
                        .then((data) => {
                          console.log(data);
                        });
                      }
                     else {
                    alert("password not match");
                  }
                }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link to="/login" variant="body2">
                    {"Sign in"}
                  </Link>
                </Grid>
              </Grid>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}