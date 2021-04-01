import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';

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

export default function Professional () {
    const [spacing, setSpacing] = React.useState(4);
    const classes = useStyles();

    return (
              <Container component="main" maxWidth="sm" className={classes.root}>
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
                                label="College ID"
                                autoFocus
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="field"
                                label="Field of Interest"
                                name="field"
                                autoComplete="field"
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
                    </Container>
    )
}