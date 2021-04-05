import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AdminDrawer from  '../components/adminDrawer';

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
  

export default function AdminLayout(props) {
    const classes = useStyles();
    return (
        <div>
             <Head>
                <title>{props.name}</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
              {props.AppBar==true && (
                  <AdminDrawer name={props.name} />
              )}
        </div>
    )
}