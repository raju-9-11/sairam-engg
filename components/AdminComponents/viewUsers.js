import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AlignItemsList from '../listview';
import firebase from '../../lib/firebase'
import Fuse from 'fuse.js'
import { useAuth } from '../../lib/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.up('sm')]: {
      display:'flex',
      marginLeft:'9vh'
    },
    alignItems: 'center',
    width:'98%',
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
  current: {
    [theme.breakpoints.up('sm')]: {
      marginLeft:theme.spacing(20)
    },
  }
}));

export default function ViewUsers(props) {
  const classes = useStyles();
  const [ users, setUsers ] = useState([]);
  const [ filtered , setFiltered ] = useState([])
  const [ temp , setTemp ] = useState([]);
  const [ search, setSearch ] = useState('')
  const firestore = firebase.firestore();
  const { user , loading } = useAuth();
  
  useEffect(() => {
    const fuse = new Fuse(users,{
      keys: ['cid']
    })
    if(search===''){
      setFiltered(temp);
    }
    else{
      setFiltered(fuse.search(`^${search}`))
    }

  },[search])

  
  useEffect(() =>{ 
    firestore
      .collection('users')
      .get()
      .then((response) => {
        var lst =[]
        response.forEach((use) =>{
          if(use.data().uid!=user.uid){
            lst.push(use.data());
          }
        })
        setUsers(lst);
        const correctlyShapedArray = lst.map(val => ({
          item: Object.assign(val, {}),
          matches: [],
          score: 1
      }));
      setFiltered(correctlyShapedArray)
        setTemp(correctlyShapedArray);
      })
  },[])


  return (
    <>
    <div className={classes.current}>
      <Paper component="form" className={classes.pap}>
        {/* <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <InputBase
          className={classes.input}
          placeholder="Search users by college id"
          value={search}
          onChange={(Event) => setSearch(Event.target.value)}
          // inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        {/* <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <DirectionsIcon />
        </IconButton> */}
      </Paper>
     {filtered.length>0 && <AlignItemsList users = {filtered } />}
     {/* {search=='' && users.length>0 && <AlignItemsList users = {temp } len={} />} */}
    </div>
    </>
  );
}