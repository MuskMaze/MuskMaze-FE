import React, {useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



const Register = (props) => {
        const [user, setUser] = useState({ "email": '', username: '',  "password1": '', "password2": ''})
    
    const changeHandler = event => {
    
        event.preventDefault();
        setUser({...user, [event.target.name]: event.target.value })
    }
    
    
    const handleSubmit = event => {
        event.preventDefault();
    
        axios
            .post("api/registration/", user)
            .then( result => {
              console.log("user", user)
              console.log("result", result)
              setUser({email: '', username: '', password1: '', password2: ''})
    
            })
            .catch(error => {
              console.log(error)
              alert("Username already exists please login to continue", error)
            })
             }


  

  return (
        <div>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              type="username"
              autoComplete="username"
              autoFocus
              onChange={changeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              onChange={changeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password1"
              label="Password"
              type="password"
              id="password1"
              autoComplete="current-password"
              onChange={changeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password"
              id="password2"
              onChange={changeHandler}
            />            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </form>
        </div>
    
  );
}

export default Register
