import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CurrentWork from './currentWork'
import firebase from '../lib/firebase'
import { useAuth } from '../lib/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    
    alignItems: 'center',
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
  inline: {
    display: 'inline',
  },
  current: {
    [theme.breakpoints.up('sm')]: {
      marginLeft:theme.spacing(20)
    },
  }
}));


export default function ViewAssignedWork() {
  // const activeWork = data.assignedWork;
  const classes = useStyles();

  const [ activeWork, setActiveWork ] = React.useState([]);
  const { user , loading } = useAuth();
  const firestore = firebase.firestore();

  React.useEffect(()=>{
    if(user){
      firestore
        .collection('work')
        .onSnapshot((response) => {
          let lst = []
          response.docs.map((doc)=>{
            if(doc.data().assigned.uid===user.uid){
              lst.push({
                id:doc.id,
                ...doc.data(),
              })
            }
          })
          setActiveWork(lst)
        })
        
    }
  },[user])

  return (
    <>
    <div className={classes.current}>
   { activeWork.map((work, index)=>{
      return(
        <CurrentWork user work = {work} index ={index} />
      )
    })}
    </div>
    </>
  );
}