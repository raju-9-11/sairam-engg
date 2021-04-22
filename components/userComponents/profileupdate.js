import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import { useAuth } from '../../lib/auth';
import firebase from '../../lib/firebase';
import { useSnackbar } from 'notistack'; 
import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from '@material-ui/core';
import { getFields } from '../../lib/db'
import { checkCid, checkExp, checkname } from '../../lib/func';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'3vh',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]:{
      [theme.breakpoints.down('md')]: {
        paddingLeft: '20vh',
      }
    },
    paddingBottom:'10vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  paper: {
    height: '100%',
    marginLeft:'4vh',
  },
  control: {
    padding: theme.spacing(2),
  },
  form:{
    paddingTop:'7vh',
    paddingRight:'7vh'
  },
  button: {
    marginTop: '3vh'
  },
  box:{
    padding: '10vh',
    paddingTop: '25vh'
  },
}));


export default function Profileupdate () {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(4);
  const { enqueueSnackbar } = useSnackbar();

  const [ loading, setLoading ] = useState(true);
  const [ firstName , setFirstName ] = useState('');
  const [ lastName , setLastName ] = useState('');
  const [ cid, setCid ] = useState('');
  const [ email, setEmail] = useState('');
  const [ years, setYears ] = useState(0);
  const { user } = useAuth();
  const firestore = firebase.firestore();
  const [ expError, setExpError ] = useState('');
  const [ fnameError, setFnameError ] = useState('');
  const [ lnameError, setLnameError ] = useState('');
  const [ cidError, setCidError ] = useState('');
  // const [ password, setPassword ] = useState('');
  // const [ final, setFinal ] = useState('');
  // const [ foe, setFoe ] = useState('---Select---');
  
  const handleUpdate = () => {
    setFnameError(checkname(firstName));
    setLnameError(checkname(lastName));
    setExpError(checkExp(years));
    setCidError(checkCid(cid))
    if(checkname(firstName)==='' && checkname(lastName)==='' && checkExp(years) ==='' && checkCid(cid)===''){
      firestore
        .collection('users')
        .doc(user.uid) 
        .set({
          name:firstName,
          first_name: firstName,
          last_name:lastName,
          years: years,
          cid: cid,
        },{merge:true})
        .then((response) => {
          enqueueSnackbar('User details succesfully updated',{ variant : 'success'})
        })
        .catch((err) => {
          enqueueSnackbar('Error occured while updating')
        })
    }
    var fireUser = firebase.auth().currentUser;
    fireUser.updateProfile({
      displayName:firstName,
    })

  }

  useEffect(() => {
    if(user){
      try{
        firestore
          .collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            setEmail(doc.data().email);
              setFirstName(doc.data().first_name);
              setLastName(doc.data().last_name);
              setCid(doc.data().cid);
              setYears(doc.data().years || 0);
              setLoading(false)
          })
      }
      catch(e){
        console.log(e)
        // enqueueSnackbar('Error fetching Data',{variant: 'error'})
      }
      if(!user && firstName==''){
        enqueueSnackbar('Error fetching Data',{variant: 'error'})
      }
    }
  },[user])


  return (
      <div >
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1].map((value,index) => (
                <Grid key={value} item>
                  <Paper elevation={3} className={classes.paper} >
                  {loading &&<LinearProgress />}

                    {index==0? (
                    <Container component="main" maxWidth="sm" className={classes.root}>
                    <CssBaseline />
                    <Box className={classes.form}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AccountCircleIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" >
                        Personal Details
                        </Typography>
                        <Box
                        className={classes.button}
                        component="form"
                        noValidate
                        sx={{
                            width: '100%', // Fix IE11 issue.
                            mt: 3,
                        }}
                        >
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                value={firstName}
                                error={fnameError!=''}
                                helperText={fnameError}
                                onChange={(Event)=> setFirstName(Event.target.value)}
                                autoFocus
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                value={lastName}
                                error={lnameError!=''}
                                helperText={lnameError}
                                onChange={(Event)=> setLastName(Event.target.value)}
                                name="lastName"
                                autoComplete="lname"
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                disabled
                                name="email"
                                value={email}
                                onChange={(Event)=>setEmail(Event.target.value)}
                                autoComplete="email"
                                variant="outlined"
                            />
                            </Grid>
                        </Grid>
                        </Box>
                    </Box>
                    </Container>) 
                    :
                      ( <Container component="main" maxWidth="sm" className={classes.root}>
                      <CssBaseline />
                      <Box className={classes.form}>
                          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                          <PersonIcon />
                          </Avatar>
                          <Typography component="h1" variant="h5" >
                          Professional Details
                          </Typography>
                          <Box
                          className={classes.button}
                          component="form"
                          noValidate
                          sx={{
                              width: '100%', // Fix IE11 issue.
                              mt: 3,
                          }}
                          >
                          <Grid container spacing={5}>
                              <Grid item xs={12} >
                              <TextField
                                  autoComplete="cid"
                                  name="collegeId"
                                  required
                                  fullWidth
                                  id="clgid"
                                  value={cid}
                                  onChange={(Event)=>setCid(Event.target.value)}
                                  error={cidError.length>0}
                                  helperText={cidError}
                                  label="College ID"
                                  autoFocus
                                  variant="outlined"
                              />
                              </Grid>
                              <Grid item xs={12}>
                              <TextField
                                  required
                                  fullWidth
                                  name="experience"
                                  label="Years of Experience"
                                  id="exp"
                                  error={expError!=''}
                                  helperText={expError}
                                  value={years}
                                  onChange={(Event) => setYears(Event.target.value)}
                                  type="number"
                                  autoComplete="exp"
                                  variant="outlined"
                              />
                              </Grid>
                              {(user.dept!=undefined && user.dept!=null) &&
                              <Grid item xs={12}>
                              <TextField
                                  fullWidth
                                  name="dept"
                                  label="Department"
                                  id="dept"
                                  disabled
                                  value={user.dept.toUpperCase()}
                                  variant="outlined"
                              />
                              </Grid>}
                              {(user.dept==undefined || user.dept==null) && 
                              <Grid item xs={12}>
                              <TextField
                                  fullWidth
                                  name="dept"
                                  label="Role"
                                  id="dept"
                                  disabled
                                  value={user.type===1?"Dean" :"Office"}
                                  variant="outlined"
                              />
                              </Grid>}
                          </Grid>
                          </Box>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            className={classes.button}
                            onClick={handleUpdate}
                          >
                            Update Details
                          </Button>
                      </Box>
                      </Container>)}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        </div>
  );
}


