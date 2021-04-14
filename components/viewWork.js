import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CurrentWork from './currentWork'
import firebase from '../lib/firebase'
import { useAuth } from '../lib/auth';

const useStyles = makeStyles((theme) => ({
  nowork: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    margin:theme.spacing(10)
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
        <CurrentWork key={work.id} user work = {work} index ={index} />
      )
    })}
    {activeWork.length<1 &&
     <div className = {classes.nowork}>
     <h2>No active work </h2>
   </div>}
    </div>
    </>
  );
}