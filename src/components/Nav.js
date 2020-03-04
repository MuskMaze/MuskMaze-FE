import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    nav: {
        backgroundColor: "#1d1c1d",

    },
    label: {
        style:'none',
        margin: theme.spacing(3),
        marginRight: theme.spacing(7),
        color:'white',

    },
    image: {
        width: '180px',
        height: 'auto',
        margin: '10px',
    }
  }));
  

const Nav = () => { 
    const classes = useStyles();


      return (
        <AppBar position="static" className={classes.nav} title="My App">
          <Tabs>
          <Grid
            justify='flex-end' // Add it here :)
            container 
            spacing={18}>
                <Link href="/register" className={classes.label} label="register">
                Sign up
                </Link>
                <Link href="/login" className={classes.label} label="Play Puzzle">
                Login
                </Link>
            </Grid>
          </Tabs>
        </AppBar>
      )
    }
  
export default Nav