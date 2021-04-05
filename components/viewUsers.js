import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AlignItemsList from './listview';
import data from '../pages/api/mock.json'
import firebase from '../lib/firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    width:'100%',
    marginTop:'3vh'
  },
  pap: {
    marginBottom:'5vh',
    padding: '2px 4px',
    display: 'flex',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function ViewUsers(props) {
  const classes = useStyles();
  const [ users, setUsers ] = useState([]);
  const firestore = firebase.firestore();

  
  useEffect(() =>{ 
    firestore
      .collection('users')
      .get()
      .then((response) => {
        var lst =[]
        response.forEach((user) =>{
          lst.push(user.data());
        })
        setUsers(lst)
      })
  },[])


  return (
    <div className={classes.root}>
      <Paper component="form" className={classes.pap}>
        {/* <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <InputBase
          className={classes.input}
          placeholder="Search users by name"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        {/* <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <DirectionsIcon />
        </IconButton> */}
      </Paper>
      <AlignItemsList users = {users} />
    </div>
  );
}