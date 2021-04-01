import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]:{
        paddingLeft: '8vh'
    }
  },
  paper: {
    height: '80vh',
    width: '50vh',
    marginLeft:'0vh'
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

export default function Personal () {
    const [spacing, setSpacing] = React.useState(4);
    const classes = useStyles();

    return (
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
                                autoComplete="email"
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
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
                    </Container>
    )
}