import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import data from '../pages/api/mock.json';
import FullScreenDialog from './Modal';
import { useAuth } from '../lib/auth';
import { useEffect, useState } from 'react';
import firebase from '../lib/firebase'
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up('sm')]:{
        [theme.breakpoints.down('lg')]:{
          marginLeft: '30vh'
        }
      },
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
  

export default function Skillset () {

    const classes = useStyles();
    const [ cards , setCards ] = useState([]);
    const firestore = firebase.firestore()

    useEffect(()=>{ 
      firestore 
        .collection('skills')
        .get()
        .then((response) => {
          var lst = []
          response.forEach((dat)=>{
            console.log(dat.id)
            lst.push(dat.data());
          })
          setCards(lst)
        })
    },[])


    return (
        <div className={classes.root}>
            <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Skill List
              </Typography>
              {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
              </Typography> */}
              {/* <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained">Main call to action</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">Secondary action</Button>
                  </Grid>
                </Grid>
              </div> */}
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card,index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title={card.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.skill}
                      </Typography>
                      <Typography>
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <FullScreenDialog skill={card} />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        </div>
    )
}