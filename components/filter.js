import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import data from '../pages/api/mock.json'


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'5vh',
    flexGrow: 1,
    paddingBottom:'10vh'
  },
  paper: {
    height: '100%',
    width: '60vh',
    marginBottom: '5vh'
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

const skills = data.data;
const fields = data.Fields;

export function SpacingGrid() {
  const classes = useStyles();
  const [ foe, setFoe ] = React.useState();
  const [ skill, setSkill ] = React.useState();

  const handleFieldChange = (event) => {
    setFoe(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
            <Grid item>
              <Paper className={classes.paper} >
              <Container component="main" maxWidth="sm" className={classes.root}>
                <CssBaseline />
                <Box className={classes.form}>
                    <Typography component="h1" variant="h5" >
                      Filter
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
                        <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="cid"
                            label="College ID"
                            name="cid"
                            autoComplete="cid"
                            variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            select
                            fullWidth
                            label="Select a Field"
                            value={foe}
                            onChange={handleFieldChange}
                            helperText="Please select the required field"
                            variant="outlined"
                          >
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
                            type="number"
                            variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            select
                            fullWidth
                            label="Select a Skill"
                            value={skill}
                            onChange={handleSkillChange}
                            helperText="Please select the required skill"
                            variant="outlined"
                          >
                            {skills.map((option) => (
                              <MenuItem key={option.id} value={option.skill}>
                                {option.skill}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
                </Container>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} >    
              <Container component="main" maxWidth="sm" className={classes.root}>
                  <CssBaseline />
                  <Box className={classes.form}>
                      {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <AccountCircleIcon />
                      </Avatar> */}
                      <Typography component="h1" variant="h5" >
                        Parameters
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
                          {/* <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              id="cid"
                              label="College ID"
                              name="cid"
                              autoComplete="cid"
                              variant="outlined"
                          />
                          </Grid> */}
                          <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              type="number"
                              inputProps={{ min: "0", max: "5", step: "0.5" }}
                              name="foesp"
                              label="Field of expertise (Skill Points)"
                              id="foesp"
                              variant="outlined"
                          />
                          </Grid>
                          <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              type="number"
                              inputProps={{ min: "0", max: "5", step: "0.5" }}
                              name="skillsp"
                              label="Skill Set (Skill Points)"
                              id="skillspsp"
                              variant="outlined"
                          />
                          </Grid>
                      </Grid>
                      </Box>
                  </Box>
                  </Container>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function Filter() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <SpacingGrid />
            </div>
        </div>
    )
}