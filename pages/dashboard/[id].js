import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/Copyright';
import data from '../api/mock.json';
import FullScreenDialog from '../../components/Modal';
import Layout from '../../components/layout';
import Skillset from '../../components/skillset';
import Profileupdate from '../../components/profileupdate';
import Foe from '../../components/foe';
import { useRouter } from 'next/router'
import { useAuth } from '../../lib/auth';
import firebase from '../../lib/firebase'

const useStyles = makeStyles((theme) => ({
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

const cards = data.data;

export default function Dashboard() {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query


  return (
    <React.Fragment>
        <Layout name={(id==1)? "Profile" : (id==2)? "Skillset": "Field of Expertise"} AppBar />
        <CssBaseline />
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            {id==1? <Profileupdate/>: id==2? <Skillset/> : <Foe />}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            This Website was developed by
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
  );
}
