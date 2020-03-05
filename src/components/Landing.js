import React  from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Link from '@material-ui/core/Link';


const Landing = (props) => {
  return (
    <div>
    <h1>MuskMaze</h1>
    <h3>Multi User Dungeon Game </h3>
    <div className="main-btn">
    <ButtonToolbar>
      <Button variant="outline-secondary" className="btn">
        <Link href="/login"  label="Login">
          Login
        </Link>
      </Button>
      <Button variant="outline-secondary" className="btn">
        <Link href="/register" label="register">
          Sign up
        </Link>
      </Button>
    </ButtonToolbar>
    </div>
    </div>
  );
}

export default Landing
