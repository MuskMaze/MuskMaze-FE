import React, {useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Login = (props) => {
    const [user, setUser] = useState({ username: '', password: ''})

    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }
     const handleSubmit = event => {
         event.preventDefault();
         console.log(user);
         
         axios
            .post("/api/login/", user)
            .then(result => {
            console.log(result)
            localStorage.setItem("token", result.data.token);    
            setUser({ username: '', password: ''})
        })
        .catch(error => {
          console.log(error)
          alert("Username and/or Passwrod not recognized, please try again", error)
      })
    
    }

  return (
     <div>
          <Typography component="h1" variant="h5">
           User Login
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            //   className={classes.submit}
            >
              Login
            </Button>
          </form>
        </div>
   
  );
}

export default Login