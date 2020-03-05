import React, {useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";



const Register = (props) => {
    
    const [user, setUser] = useState({ "email": '', username: '',  "password1": '', "password2": ''})
    const history = useHistory();
    
    const changeHandler = event => {
    
        event.preventDefault();
        setUser({...user, [event.target.name]: event.target.value })
    }
    
    
    const handleSubmit = event => {
        event.preventDefault();
    
        axios
            .post("http://muskmaze.herokuapp.com:80/api/registration/", user)
            .then( result => {
              localStorage.setItem("token", result.data.key);
              setUser({email: '', username: '', password1: '', password2: ''})
              history.push("/game");
            })
            .catch(error => {
                let errorMessage = "" + 
                (error.response.data.email || " ") +
                (error.response.data.username || " ") + 
                (error.response.data.password1 || " ") + 
                (error.response.data.password2 || " ");
                alert(errorMessage);
            })
             }


  

  return (
        <div className="main-box">   
          <Typography component="h1" variant="h5" className="header-text">
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
        <div className="input-box">
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
            </div>
          </form>
        
        </div>
    
  );
}

export default Register
