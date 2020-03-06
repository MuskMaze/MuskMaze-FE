import React, {useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [user, setUser] = useState({ username: '', password: ''});
    const history = useHistory();

    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }
     const handleSubmit = event => {
         event.preventDefault();
         console.log(user);
         
         axios
            .post("http://muskmaze.herokuapp.com:80/api/login/", user)
            .then(result => {
                localStorage.setItem("token", result.data.key);
                setUser({ username: '', password: ''});
                history.push('/viewport');
            }).catch(error => {
                console.log(error)
            alert(error)
            });

    }

  return (
     <div className="main-box"> 
          <Typography component="h1" variant="h5" className="header-text">
           User Login
          </Typography>
          <div className="input-box">
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
        </div>
   
  );
}

export default Login