import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Copyright from './Copyright';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  fooroot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between'
  },
 
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.fooroot}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">Sairam Engineering college Work management system</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}