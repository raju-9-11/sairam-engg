import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/Copyright'
import Head from 'next/head';
import { useAuth } from '../lib/auth'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormDialog from '../components/LoginComponents/registerModal';
import SimpleBackdrop from '../components/backDrop';
import firebase from '../lib/firebase'
import { getUserDetails } from '../lib/db';
import { IconButton } from '@material-ui/core';
// import withLogin from '../components/LoginComponents/withLogin';


const num = Math.floor(Math.random()*17)+1
const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    }
  },
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: `url(https://edumate.sairam.edu.in/Wallpaper/${num}.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  box:{
      padding: '10vh',
      paddingTop: '25vh'
  },
  form:{
    padding:'7vh'
  },
  button: {
      marginTop: '3vh'
  },
  logos: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }
}));

function Home() {
  const classes = useStyles();

  const { user, loading, signinWithEmail ,resetPassword } = useAuth();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const router = useRouter()


  const onResetPassword = (e) => {
    e.preventDefault();
    resetPassword(email)
  }

  useEffect(()=>{
    const firebaseUser = firebase.auth().currentUser;
    async function checkPage(){
      if(firebaseUser){
        const userD = (await getUserDetails(firebaseUser.uid)).data(); 
        if(userD.type===3){
          router.push('/admin')
        }
        else if(userD.type===4){
          router.push('/principal')
        }
        else{
          router.push('/dashboard')
        }
      }
    }
    checkPage();
  },[user,loading])


  const handleClick = (e) => {
    e.preventDefault();
      signinWithEmail(email,password);
  }

  return (
    <>
    {loading && <SimpleBackdrop/>}
    {!user &&
      <Grid container component="main" className={classes.root}>
        <Head>
          <title> Sign In</title>
        </Head>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            className={classes.box}
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{
                width: '100%', // Fix IE11 issue.
                mt: 1,
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(Event)=>setEmail(Event.target.value)}
                value={email}
                autoComplete="off"
                variant="outlined"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(Event)=>setPassword(Event.target.value)}
                variant="outlined"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                className={classes.button}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className={classes.button}
                onClick={handleClick}
              >
                 Sign In
              </Button>
              <Grid container className={classes.form}>
                <Grid item xs>
                <Button size="small" color="primary" onClick={onResetPassword}>
                    Reset password
                  </Button>
                </Grid>
                <Grid item>
                  <FormDialog />
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
              <Grid item className={classes.logos}>
                <IconButton  disabled> 
                  <img width={100} src="/Raise.png" />
                  <img width={100} src="/EOMS.png" />
                </IconButton>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>}
      </>
  );
}

export default Home