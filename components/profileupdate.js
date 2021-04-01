import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Professional from './professional';
import Paper from '@material-ui/core/Paper';
import Personal from './personaldetails'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'8vh',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]:{
      [theme.breakpoints.down('md')]: {
        paddingLeft: '20vh'
      }
    },
    paddingBottom:'10vh'
  },
  paper: {
    height: '100%',
    width: '60vh',
    marginBottom: '10vh'
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

export function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(4);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1].map((value,index) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >
                 {index==0? <Personal /> : <Professional />}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function Profileupdate () {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <SpacingGrid />
            </div>
        </div>
    )
}