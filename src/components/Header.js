import React, { useEffect, useState } from 'react';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    fontFamily: 'Nunito',
  },
  AppBar: {
    background: 'none',
    fontFamily: 'Nunito',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  AppBarTitle: {
    flexGrow: '1', // SEPARATES TITLE FROM ICON
  },
  AppBarWrapper: {
    width: '80%',
    margin: '0 auto', // PUSH ITEMS TO THE CENTER
  },
  colorText: {
    color: '#5AFF3D',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  container: {
    textAlign: 'center',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar className={classes.AppBarWrapper}>
          <h1 className={classes.AppBarTitle}>
            My<span className={classes.colorText}>Own</span>Island
            <span className={classes.colorText}>.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to
            <br />
            My Own <span className={classes.colorText}>Island</span>.
          </h1>
          <Scroll to='place-to-visit' smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
