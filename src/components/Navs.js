import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';



const useStyles = makeStyles(theme => ({
  
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
        <AppBar position="static" className="nav" title="My App">
          <Tabs>
          <Grid
            justify='flex-start' 
            container 
            spacing={18}>
                <Link href="/" label="home">
                      <HomeIcon style={{ fontSize: 32, color: 'goldenrod', marginLeft: '52', marginTop: '7' }} />
                </Link>
            </Grid>
          </Tabs>
        </AppBar>
      )
    }

export default Nav