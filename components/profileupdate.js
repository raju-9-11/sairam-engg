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
import { useAuth } from '../lib/auth';
import data from '../pages/api/mock.json';
import firebase from '../lib/firebase';
import { useSnackbar } from 'notistack'; 
import LinearProgress from '@material-ui/core/LinearProgress';


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
    marginLeft:'2vh',
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

const fields = data.Fields;


export default function Profileupdate () {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(4);
  const { enqueueSnackbar } = useSnackbar();

  const [ loading, setLoading ] = useState(true);
  const [ firstName , setFirstName ] = useState('');
  const [ lastName , setLastName ] = useState('');
  const [ cid, setCid ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ final, setFinal ] = useState('');
  const [ email, setEmail] = useState('');
  const [ foe, setFoe ] = useState('---Select---');
  const [ years, setYears ] = useState(0);
  const { user } = useAuth();
  const firestore = firebase.firestore();

  useEffect(() => {
    if(user){
      try{
        firestore
          .collection('users')
          .doc(user.uid)
          .get()
          .then((doc)=>{
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



  const handleSave = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
      <div >
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1].map((value,index) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} >
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
                                name="email"
                                value={email}
                                onChange={(Event)=>setEmail(Event.target.value)}
                                autoComplete="email"
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                value={password}
                                onChange={(Event)=> setPassword(Event.target.value)}
                                label="Current Password"
                                type="password"
                                id="password"
                                variant="outlined"
                            />
                            </Grid> 
                            <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="npassword"
                                value={final}
                                onChange={(Event) => setFinal(Event.target.value)}
                                label="New Password"
                                type="password"
                                id="npassword"
                                variant="outlined"
                            />
                            </Grid>
                            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                            </Grid> */}
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
                                  // required
                                  fullWidth
                                  disabled
                                  id="clgid"
                                  value={cid}
                                  label="College ID"
                                  autoFocus
                                  variant="outlined"
                              />
                              </Grid>
                              <Grid item xs={12}>
                            <TextField
                              select
                              fullWidth
                              label="Field of Study"
                              value={foe}
                              onChange={(Event) => setFoe(Event.target.value)}
                              // helperText="Please select the required field"
                              variant="outlined"
                            >
                               <MenuItem key={1} value={'---Select---'}>
                                  {'---Select---'}
                                </MenuItem>
                              {fields.map((option) => (
                                <MenuItem key={option.id} value={option.skill}>
                                  {option.skill}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                              <Grid item xs={12}>
                              <TextField
                                  required
                                  fullWidth
                                  name="experience"
                                  label="Years of Experience"
                                  id="exp"
                                  value={years}
                                  onChange={(Event) => setYears(Event.target.value)}
                                  type="number"
                                  autoComplete="exp"
                                  variant="outlined"
                              />
                              </Grid>
                              {/* <Grid item xs={12}>
                              <FormControlLabel
                                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                                  label="I want to receive inspiration, marketing promotions and updates via email."
                              />
                              </Grid> */}
                          </Grid>
                          </Box>
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


