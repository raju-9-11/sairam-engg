import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import data from '../pages/api/mock.json';
import FullScreenDialog from './Modal';
import { Button } from '@material-ui/core';
import AddField from './addField';
import EditField from './editField';
import firebase from '../lib/firebase'
import { useEffect, useState } from 'react';


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
  

export default function ManageFields () {

    const classes = useStyles();
    const firestore = firebase.firestore();
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
      firestore
        .collection('fields')
        .get()
        .then((response) => {
          var lst=[]
          response.forEach((dat) => {
            lst.push({id:dat.id, ...dat.data()})
          })
          setCards(lst)
        })
    },[])

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      // "https://source.unsplash.com/random"
                      title={card.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      <Typography>
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Remove Field</Button>
                        <EditField card={card}/>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              <Grid item key={'1q'} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      // image={card.image}
                      image = "https://cdn3.iconfinder.com/data/icons/rest/30/add_order-512.png"
                      title={"Add Skill"}
                    >
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {"Add Field"}
                      </Typography>
                      <Typography>
                        {"Add New Field"}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <AddField  />
                    </CardActions>
                  </Card>
                </Grid>
            </Grid>
          </Container>
        </div>
    )
}