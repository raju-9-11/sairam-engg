import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { checkPassword , checkEmail, checkname, checkCid, checkExp } from '../lib/func'
import { useSnackbar } from 'notistack';
import { useAuth } from '../lib/auth'
import { useRouter } from 'next/router'
import Dashboard from './dashboard'


const useStyles = makeStyles({
  root: {
      marginTop:'12vh'
  },
  form:{
    padding:'7vh'
  },
  button: {
    marginTop: '3vh'
  },
  box:{
    padding: '10vh',
    paddingTop: '25vh'
  },
})

export default function SignUp() {

  const { user , type } = useAuth();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ years, setYears ] = useState(0);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ final, setFinal ] = useState('');
  const [ emailError, setEmailError ] = useState('');
  const [ passwordError, setPasswordError ] = useState('');
  const [ cidError, setCidError ]  = useState('');
  const [ firstNameError, setFirstNameError ] = useState('');
  const [ lastNameError, setLastNameError ] = useState('');
  const [ expError, setExpError ] = useState('');
  const [ cid, setCid ] = useState('');

  const { signupWithEmail ,signout } = useAuth();

  useEffect(()=> {
    if(user){
      if(type===0){
        return(<Dashboard/>)
      }
    }
  },[user])


  const handleSignUp = (e) => {
    e.preventDefault();
      setPasswordError(checkPassword(password,final));
      setEmailError(checkEmail(email));
      setFirstNameError(checkname(firstName));
      setLastNameError(checkname(lastName));
      setCidError(checkCid(cid));
      setExpError(checkExp(years));
      const val = emailError+passwordError+firstNameError+lastNameError+cidError+expError
      if(val==''){
        try{
          signupWithEmail(email, process.env.NEXT_PUBLIC_DEFAULT_PASSWORD, firstName, 0, lastName, cid , years);
        }
        catch(E){
          enqueueSnackbar('Register error try again!',{variant:'error'});
        }
      }
    
  }



  return (
    <Container component="main" maxWidth="sm" className={classes.root}>
      <CssBaseline />
      <Box className={classes.form}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          Sign up
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
                value={firstName}
                onChange={(Event)=>setFirstName(Event.target.value)}
                error={firstNameError!=''}
                helperText={firstNameError}
                id="firstName"
                label="First Name"
                variant="outlined"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                value={lastName}
                onChange={(Event)=>setLastName(Event.target.value)}
                error={lastNameError!=''}
                helperText={lastNameError}
                label="Last Name"
                name="lastName"
                variant="outlined"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                  autoComplete="cid"
                  name="collegeId"
                  required
                  fullWidth
                  id="clgid"
                  value={cid}
                  onChange={(Event)=>setCid(Event.target.value)}
                  error={cidError!=''}
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
                value={email}
                onChange={(Event)=>setEmail(Event.target.value)}
                id="email"
                error={emailError!=''}
                helperText={emailError}
                label="Email Address"
                name="email"
                variant="outlined"
                autoComplete="email"
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
            {/* <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={password}
                onChange={(Event)=>setPassword(Event.target.value)}
                error={passwordError!=''}
                helperText={passwordError}
                name="password"
                label="Password"
                type="password"
                id="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={final}
                onChange={(Event)=>setFinal(Event.target.value)}
                error={passwordError!=''}
                helperText={passwordError}
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                variant="outlined"
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button type="submit" onClick={handleSignUp} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
            Create Account
          </Button>
          <Grid container justify="flex-end" className={classes.button}>
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
