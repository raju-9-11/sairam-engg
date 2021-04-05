import AdminLayout from '../../components/adminLayout';
import AlignItemsList from '../../components/listview'
import { makeStyles } from '@material-ui/core/styles';
import data from '../api/mock.json';
import Filter from '../../components/filter';
import { useRouter } from 'next/router';
import ManageSkills from '../../components/manageSkills';
import ManageFields from '../../components/manageFields';
import ViewUsers from '../../components/viewUsers';
import { CssBaseline, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import firebase from '../../lib/firebase'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      display:'flex',
      float:'right',
      backgroundColor: theme.palette.background.paper,
    },
    list: {
      marginTop:'8vh',
      width: '87.5%',
      [theme.breakpoints.up('sm')]: {
        marginLeft:theme.spacing(30)
      },
    },
    filter : {
      [theme.breakpoints.up('sm')]: {
        marginLeft:theme.spacing(30)
      },
    },
    inline: {
      display: 'inline',
    },
    log: {
      display:'flex',
      flexDirection:'column',
      float:'right'
    },
    toolbar: {
      width:'100%'
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
export default function Admin () {
    const classes = useStyles();
    const [users, setUsers ] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    const firestore = firebase.firestore();
    if(id<1 || id>4){
      router.push('/admin/1');
    }

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
        <React.Fragment>
            <AdminLayout name={(id==1)? "Filter" : id ==2? "Manage Skills": id == 3? "Manage Fields" : "User List "} AppBar/>
            <CssBaseline />
            <footer>
            {/* <Typography variant="h6" align="center" gutterBottom> */}
              {id==1? 
              <div className={classes.filter}>
                <Filter />
                <AlignItemsList users={users}/>
              </div>
                : id==2? 
                <div className={classes.footer}>
                <ManageSkills />
              </div>
                : id==3?
                <div className={classes.footer}>
                  <ManageFields />
                </div>
                :
                <div className={classes.list}>
                  <ViewUsers/>
                </div>
                }
                {/* </Typography> */}
              </footer>
        </React.Fragment>
    )
}