import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ProfileUpdate from '../../components/userComponents/profileupdate'
import List from '@material-ui/core/List';
import Skillset from '../../components/userComponents/skillset';
import Foe from '../../components/userComponents/foe';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import PersonIcon from '@material-ui/icons/Person'
import BookIcon from '@material-ui/icons/Book';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { useAuth } from '../../lib/auth';
import Copyright from '../../components/Copyright';
import SimpleBackdrop from '../../components/backDrop';
import Custom from '../../components/custom404'
import WorkIcon from '@material-ui/icons/Work';
import viewWork from '../../components/viewWork';
import ViewWork from '../../components/viewWork';
import Head from 'next/head';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      paddingLeft:'10vh'
    },
    flexDirection:'column',
    alignItems:'center'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    paddingTop: theme.spacing(10),
    width:'100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const tabs = [
  {
    tab:0,
    name:'Profile Update'
  },
  {
    tab:1,
    name:'Skill list'
  },
  {
    tab:2,
    name:'Field list'
  },
  {
    tab:3,
    name:'View Work'
  }
]

function Dashboard(props) {
  const { window } = props;
  const { user, loading, signout } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [ tab, setTab ] = React.useState(0)


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();

  const handleClick = (index) => {
    if(index===0){
      setTab(0);
    }
    if(index===1){
      setTab(1);
    }
    if(index===2){
      setTab(2);
    }
    if(index===3){
      setTab(3);
    }
    setMobileOpen(false);
  }
 
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Profile Update', 'Skill Set', 'Field of Expertise'].map((text, index) => (
          <ListItem selected = {tab===index} button key={text}  onClick={()=>handleClick(index)}>
            <ListItemIcon>{index  === 0 ? <PersonIcon /> : index === 1 ? <BookIcon />: <RecentActorsIcon /> }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem  selected={tab===3} button key={5} onClick={()=>handleClick(3)}>
        <ListItemIcon> <WorkIcon /> </ListItemIcon>
        <ListItemText primary={`View Work`}  />
    </ListItem>
      <Divider />
      <ListItem  button key={4} onClick={()=>signout()}>
        <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
        <ListItemText primary={`Logout`} />
    </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <>
    {loading && <SimpleBackdrop/>}
    {user && user.type==0 &&
     <div className={classes.root}>
       <Head>
         <title>{tabs[tab].name}</title>
       </Head>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <IconButton
                color="secondary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                {tabs[tab].name}
            </Typography>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
            </Hidden>
        </nav>
        <footer className={classes.footer} >
        {tab===0? <ProfileUpdate /> : tab===1? <Skillset /> : tab===2? <Foe/>: <ViewWork />}
        {/* <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            This Website was developed by
          </Typography>
          <Copyright /> */}
        </footer>
        </div>}
        {(!user && !loading)||(user && user.type==1) && <Custom />}
        </>
  );
}


export default Dashboard;