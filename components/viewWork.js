import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CurrentWork from './currentWork'
import firebase from '../lib/firebase'
import { useAuth } from '../lib/auth';
import { getFormattedWork, getUserDetails } from '../lib/db';

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
    async function getData(){
      if(user){
        firestore
          .collection('work')
          .onSnapshot(async (response) => {
            let lst = []
            for(const doc of response.docs ){
              if(doc.data().assigned===user.uid || ( doc.data().team!=undefined && doc.data().team.includes(user.uid) )){
                const currWork = await getFormattedWork(doc.data(),doc.id);
                lst.push(currWork)
              }
            }
            setActiveWork(lst)
          
        })
      }
    }

    getData();

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